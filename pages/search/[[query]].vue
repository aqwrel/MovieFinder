<template>
    <div class="h-full flex flex-1 items-center">
        <div
            v-if="pending"
            class="w-full flex items-center justify-center"
        >
            <span>Loading...</span>
        </div>
        <p
            v-else-if="error"
            class="text-center font-bold text-xl text-red-500 w-full"
        >
            No movies found
        </p>
        <el-carousel
            v-else
            :autoplay="false"
            :loop="false"
            :trigger="'click'"
            :type="carouselType"
            height="600px"
            arrow="always"
            class="!bg-transparent w-full"
            :initial-index="activeSlide"
            @change="change"
        >
            <el-carousel-item
                v-for="movie in data.movies"
                :key="movie.imdbID"
                class="justify-center"
            >
                <div>
                    <img
                        :src="movie.Poster"
                        :alt="movie.Title"
                    >
                    <NuxtLink :to="`/movie/${movie.imdbID}`">
                        <h2 class="text-white text-center text-xl font-bold py-4 hover:text-red-500">
                            {{ movie.Title }}
                        </h2>
                    </NuxtLink>

                    <div class="">
                        <p>Director: {{ movie.Director }}</p>
                        <p>Released: {{ movie.Released }}</p>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item
                v-if="data.total > data.movies.length"
                :key="'loading'"
            >
                <div class="flex items-center justify-center w-full">
                    Loading...
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
const route = useRoute();
const page = ref(1);
const activeSlide = ref(0);
const isLoadMore = ref(false);
const carouselType = ref('card');

const getMovies = async () => {
    const list = await $fetch(`https://www.omdbapi.com/?s=${route.params.query}&apikey=46438196&page=${page.value}`);
    const movies = await Promise.all(list.Search.map((item) => $fetch(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=46438196`)));
    return {
        movies,
        total: list.totalResults,
    };
};

const { data, pending, error } = useAsyncData(
    'movies',
    async () => {
        const response = await getMovies();
        return {
            ...response,
        };
    },
);

const change = async (evt) => {
    try {
        activeSlide.value = evt;
        if (data.value.movies.length - 5 === evt && !isLoadMore.value) {
            isLoadMore.value = true;
            page.value += 1;
            activeSlide.value = evt;
            const data2 = await getMovies();
            data.value.movies = [...data.value.movies, ...data2.movies];
        }
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
    } finally {
        isLoadMore.value = false;
    }
};

const updateCarouselTrigger = () => {
    carouselType.value = window.innerWidth <= 768 ? '' : 'card';
};

onMounted(() => {
    updateCarouselTrigger();
    window.addEventListener('resize', updateCarouselTrigger);
});

</script>

<style>
    .el-carousel__container {
        .is-active, .is-in-stage {
            display: flex !important;
        }
        .el-carousel__mask {
            display: none;
        }
    }
    .el-carousel__indicators {
        display: none !important;
    }
    .el-carousel__arrow {
        border: 2px solid red;
        color: red;
        background: #fff;
    }
</style>
