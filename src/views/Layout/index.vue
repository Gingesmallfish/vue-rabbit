<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";

// 触发获取导航列表的action

import { useCategoryStore } from "@/stores/category.js";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();

onMounted(() => categoryStore.getCategory())

</script>

<template>
  <div>
    <!-- 二级路由出口 -->
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
      <!-- 添加key 破坏服用机制 强制销毁重建 -->
<!--    <RouterView :key="$route.fullPath"/>-->
    <RouterView/>
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped></style>
