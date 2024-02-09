<template>
    <div class="flex">
        <el-input
            v-model="input"
            placeholder="Please input"
            @keyup.enter="search"
        />
        <el-button
            type="primary"
            :icon="Search"
            @click="search"
        />
    </div>
</template>

<script setup>
import {
    Search,
} from '@element-plus/icons-vue';

import { ref } from 'vue';

const router = useRouter();
const input = ref('');

const search = () => {
    if (input.value.length === 0) return;
    router.push({ path: `/search/${input.value}` });
};
</script>
