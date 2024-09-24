<template>
  <div class='title-box' :class="{ 'animate': startAnimation }">
    <div class='image-container' ref='imageContainer'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/titlebackground.webp'
           alt='TitleBackground'
           class='title-image'/>
      <img src='https://static.igem.wiki/teams/5503/design-materials/mascot.webp'
           alt='Mascot'
           class='corner-image'
           :class="{ 'animate': mascotAnimation }"
           :style="{ right: mascotPosition.right, bottom: mascotPosition.bottom }"/>
      <p class='title1' ref='title1'>{{ title }}</p>
      <p class='title2'>{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted, nextTick, reactive, defineProps} from 'vue'

defineProps<{
  title: string
}>()

const startAnimation = ref(false)
const mascotAnimation = ref(false)
const title1 = ref<HTMLElement | null>(null)
const imageContainer = ref<HTMLElement | null>(null)
const ballPosition = reactive({x: 0, y: 0})
const mascotPosition = reactive({right: '-150px', bottom: '-150px'})

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    startAnimation.value = true
    // noinspection TypeScriptUnresolvedReference
    const rect = title1.value?.getBoundingClientRect()
    // noinspection TypeScriptUnresolvedReference
    const containerRect = imageContainer.value?.getBoundingClientRect()
    if (rect && containerRect) {
      ballPosition.x = rect.right - containerRect.left
      ballPosition.y = rect.bottom - containerRect.top
      mascotPosition.right = `${containerRect.width - ballPosition.x - 290}px`
      mascotPosition.bottom = `${containerRect.height - ballPosition.y - 90}px`
      mascotAnimation.value = true
    }
  }, 100)
})
</script>

<style scoped>
.title-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  -webkit-user-select: none;
}

.image-container {
  position: relative;
  width: 1240px;
  height: auto;
}

.title-image {
  width: 100%;
  height: 100%;
  border: 4px solid #5182F8;
  border-radius: 20px;
  box-shadow: 12px 20px 0 0 #5182F8;
}

.corner-image {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 10px;
  transition: right 1.5s, bottom 1.5s;
}

.title1 {
  position: absolute;
  left: 70px;
  bottom: 26px;
  font-size: 80px;
  color: #5182F8;
  font-family: 'Futura Md BT Bold', sans-serif;
}

.title2 {
  position: absolute;
  left: 61px;
  bottom: 30px;
  font-size: 80px;
  color: white;
  font-family: 'Futura Md BT Bold', sans-serif;
}

.title1, .title2 {
  clip-path: inset(0 0 0 100%);
  transition: clip-path 0.75s ease-out 1.5s;
}

.title-box.animate .title1, .title-box.animate .title2 {
  clip-path: inset(0);
}
</style>
