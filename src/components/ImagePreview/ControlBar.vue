<template>
  <div class="control-bar">
    <span
      class="iconfont icon-rotate-left"
      @click="handleImageRotate(ARROW_DIRECTION.LEFT)"
    ></span>
    <span
      class="iconfont icon-rotate-right"
      @click="handleImageRotate(ARROW_DIRECTION.RIGHT)"
    ></span
    ><span
      class="iconfont icon-zoom-in"
      @click="handleImageScale(ZOOM.IN)"
    ></span
    ><span
      class="iconfont icon-zoom-out"
      @click="handleImageScale(ZOOM.OUT)"
    ></span>
  </div>
</template>
<script lang="ts" setup>
import { ARROW_DIRECTION, ZOOM } from "./Types"

const emits = defineEmits<{
  handleImageRotate: [dir: ARROW_DIRECTION]
  handleImageScale: [zoom: ZOOM]
}>()
const handleImageRotate = (dir: ARROW_DIRECTION) => {
  emits("handleImageRotate", dir)
}
const handleImageScale = (zoom: ZOOM) => {
  emits("handleImageScale", zoom)
}
</script>
<style lang="scss" scoped>
.control-bar {
  z-index: 1;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -60px;
  .iconfont {
    color: rgb(74, 158, 236);
    display: inline-block;
    margin-right: 10px;
    font-weight: 600;
    text-shadow: 1px 3px 5px #000;
    cursor: pointer;
    &:hover {
      text-shadow: 1px 2px 3px #000;
    }
  }
}
</style>
