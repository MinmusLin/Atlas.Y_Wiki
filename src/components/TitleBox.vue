<template>
  <div class='title-box' :class="{ 'animate': startAnimation }">
    <div class='image-container' ref='imageContainer'>
      <img class='title-image'
           alt='TitleBackground'
           :src="`https://static.igem.wiki/teams/5503/design-materials/${props.title.replace(/\s+/g, '').toLowerCase()}title.webp`"/>
      <img src='https://static.igem.wiki/teams/5503/design-materials/mascot.webp'
           alt='Mascot'
           class='corner-image'
           :class="{ 'animate': mascotAnimation }"
           :style="{ right: mascotPosition.right, bottom: mascotPosition.bottom }"/>
      <p class='title' ref='title'>{{ props.title }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted, nextTick, reactive, defineProps} from 'vue'

const props = defineProps<{
  title: string
}>()

const startAnimation = ref(false)
const mascotAnimation = ref(false)
const title = ref<HTMLElement | null>(null)
const imageContainer = ref<HTMLElement | null>(null)
const ballPosition = reactive({x: 0, y: 0})
const mascotPosition = reactive({right: '-150px', bottom: '-150px'})

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    startAnimation.value = true
    // noinspection TypeScriptUnresolvedReference
    const rect = title.value?.getBoundingClientRect()
    // noinspection TypeScriptUnresolvedReference
    const containerRect = imageContainer.value?.getBoundingClientRect()
    if (rect && containerRect) {
      ballPosition.x = rect.right - containerRect.left
      ballPosition.y = rect.bottom - containerRect.top
      mascotPosition.right = `${containerRect.width - ballPosition.x - 290}px`
      mascotPosition.bottom = `${containerRect.height - ballPosition.y - 70}px`
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
  width: 1340px;
  height: 295px;
  background-color: #FEFBEB;
  border-radius: 20px;
}

.title-image {
  width: 1340px;
  height: 295px;
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

.title {
  position: absolute;
  left: 20px;
  bottom: 6px;
  font-size: 68px;
  color: transparent;
  font-family: 'Futura Md BT Bold', sans-serif;
}
</style>
