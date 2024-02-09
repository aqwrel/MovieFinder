<template>
    <div class="flex flex-col justify-between min-h-screen">
        <HeaderMain />

        <div class="flex-1 container mx-auto flex flex-col">
            <slot />
        </div>

        <FooterMain />
    </div>
</template>

<script setup>
import HeaderMain from '../components/common/HeaderMain.vue';
import FooterMain from '../components/common/FooterMain.vue';
</script>
