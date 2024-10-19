<template>
  <div class="image-preview">
    <control-bar
      @handle-image-rotate="handleImageRotate"
      @handle-image-scale="handleImageScale"
    ></control-bar>
    <indicator
      :dir="ARROW_DIRECTION.LEFT"
      @handle-image-slide="handleImageSlide"
    ></indicator>
    <indicator
      :dir="ARROW_DIRECTION.RIGHT"
      @handle-image-slide="handleImageSlide"
    ></indicator>
    <div
      class="slider"
      :style="{
        width: slideWidth + 'px',
        transform: `translate3d(-${slideLeft}px, 0,0)`
      }"
    >
      <image-container
        v-for="item of imageData"
        :key="item.id"
        :item="item"
      ></image-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ImageContainer from "./ImageContainer.vue"
import Indicator from "./Indicator.vue"
import ControlBar from "./ControlBar.vue"
import type { IImageData, ZOOM } from "./Types"
import { ARROW_DIRECTION } from "./Types"
import { useSliderIndex, useSliderLeft, setImageData } from "./hooks"
const props = defineProps<{ data: IImageData[] }>()

const { imageData, setImageRotate, setImageScale } = setImageData(props.data)

const imgLen = props.data.length
const slideWidth = imgLen * 440

const { sliderIndex, setSliderIndex } = useSliderIndex(imgLen)
const slideLeft = useSliderLeft(sliderIndex)

const handleImageSlide = (dir: ARROW_DIRECTION) => {
  imageReset()
  setSliderIndex(dir)
}
const handleImageRotate = (dir: ARROW_DIRECTION) => {
  setImageRotate(sliderIndex.value, dir)
}
const handleImageScale = (zoom: ZOOM) => {
  setImageScale(sliderIndex.value, zoom)
}
const imageReset = () => {
  const target = imageData.value[sliderIndex.value]
  target.rotate = 0
  target.scale = 1
}
</script>

<style lang="scss" scoped>
.image-preview {
  position: relative;
  width: 440px;
  height: 248px;
  overflow: hidden;
  .slider {
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s;
  }
}
</style>
