<template>
  <div class="image-container">
    {{ item.rotate }}
    <img :src="imgTargetUrl" :style="{ transform: `rotate(${item.rotate}deg)
    scale(${item.scale})`, }" draggeble:='false' />
  </div>
</template>

<script lang="ts" setup>
import type { IImageData } from "./Types"
const props = defineProps<{ item: IImageData }>()
const imgTargetUrl = new URL(
  `../../assets/images/${props.item.image}`,
  import.meta.url
).href
</script>

<style lang="scss" scoped>
.image-container {
  font-weight: 800;
  font-size: 30px;
  color: rgb(182, 127, 228);
  text-align: center;
  width: 440px;
  height: 248px;
  background-color: skyblue;
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
}
</style>
