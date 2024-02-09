<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
useHead({
    htmlAttrs: {
        class: 'dark',
    },
});
</script>

<style>
    body {
        background: rgb(2, 4, 32);
        color: #fff;
    }
</style>
