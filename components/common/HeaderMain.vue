<template>
    <header>
        <div class="container mx-auto p-4">
            <div class="flex flex-wrap items-center">
                <div class="w-full text-center md:text-left md:w-4/12 mb-5 md:mb-0">
                    <NuxtLink to="/">
                        <span class="text-2xl font-bold">MovieFinder</span>
                    </NuxtLink>
                </div>

                <div class="w-full md:w-8/12">
                    <Search />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import Search from '../Search.vue';
</script>
