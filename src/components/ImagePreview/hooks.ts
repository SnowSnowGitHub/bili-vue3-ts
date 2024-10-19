// import { Ref, computed, ref, } from "vue";
import { type Ref, computed, ref, } from "vue";
import { ARROW_DIRECTION, ZOOM, type IImageData } from "./Types";

// export function useSliderLeft(sliderIndex: Ref) {
export function useSliderLeft(sliderIndex: Ref) {
  const sliderLeft = computed(() => sliderIndex.value * 440)
  return sliderLeft
}

export function useSliderIndex(imageLength: number) {
  const sliderIndex = ref(0)
  const setSliderIndex = (dir: ARROW_DIRECTION) => {
    const index = sliderIndex.value
    switch (dir) {
      case ARROW_DIRECTION.LEFT:
        sliderIndex.value = index === 0 ? imageLength - 1 : index - 1
        break;
      case ARROW_DIRECTION.RIGHT:
        sliderIndex.value = index === imageLength - 1 ? 0 : index + 1
        break;
      default:
        break;
    }
  }
  return {
    sliderIndex,
    setSliderIndex
  }
}

export function setImageData(images: IImageData[]) {
  const imageData = ref(images)
  const setImageRotate = (sliderIndex: number, dir: ARROW_DIRECTION) => {
    const rotate = imageData.value[sliderIndex].rotate
    switch (dir) {
      case ARROW_DIRECTION.LEFT:
        imageData.value[sliderIndex].rotate = rotate - 10
        console.log(imageData)
        break;
      case ARROW_DIRECTION.RIGHT:
        imageData.value[sliderIndex].rotate = rotate + 10
        break;

      default:
        break;
    }
  }

  const setImageScale = (sliderIndex: number, zoom: ZOOM) => {
    const scale = imageData.value[sliderIndex].scale
    switch (zoom) {
      case ZOOM.IN:
        scale > 0.3 && (imageData.value[sliderIndex].scale -= .1);
        break;
      case ZOOM.OUT:
        scale < 3 && (imageData.value[sliderIndex].scale += .1);
        break;

      default:
        break;
    }
  }

  return {
    imageData,
    setImageRotate,
    setImageScale
  }

}