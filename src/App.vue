<script setup lang="ts">
import ImagePreview from "./components/ImagePreview/index.vue"
// 图片滚动框数据
const data = [
  { id: 1, image: "1.jpg", rotate: 0, scale: 1 },
  { id: 2, image: "2.jpg", rotate: 0, scale: 1 },
  { id: 3, image: "3.jpg", rotate: 0, scale: 1 },
  { id: 4, image: "4.jpg", rotate: 0, scale: 1 },
  { id: 5, image: "5.jpg", rotate: 0, scale: 1 }
]
</script>

<template>
  <ImagePreview :data="data"></ImagePreview>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
