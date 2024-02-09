<template>
    <div class="container mx-auto my-5">
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
            Something went wrong
        </p>
        <div
            v-else
            class="flex flex-wrap"
        >
            <div class="w-full md:w-3/12">
                <img
                    :src="data.Poster"
                    :alt="data.Title"
                    class="max-w-full w-full"
                >
            </div>
            <div class="w-full md:w-9/12 px-5">
                <p class="text-2xl font-bold mb-8 mt-8 md:mt-0">
                    {{ data.Title }}
                </p>
                <p>Director: <b>{{ data.Director }}</b></p>
                <p>Released: <b>{{ data.Released }}</b></p>
                <p>Genre: <b>{{ data.Genre }}</b></p>
                <p>Actors: <b>{{ data.Actors }}</b></p>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const { data, pending, error } = useAsyncData(
    'movie',
    async () => {
        const movie = await $fetch(`http://www.omdbapi.com/?i=${route.params.id}&apikey=46438196`);
        return movie;
    },
);
</script>
