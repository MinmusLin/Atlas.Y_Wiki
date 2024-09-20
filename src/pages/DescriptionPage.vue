<template>
  <div
    style='height: 10000px; background: repeating-linear-gradient(0deg, #f8f8f8, #f8f8f8 100px, #dfdfdf 100px, #dfdfdf 200px)'>
    <div id='animatedBall' :style='ballStyle'/>
    <div v-for='point in points' :key='`${point.x}-${point.y}`' :style="{
        position: 'absolute',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        left: point.x,
        top: point.y
      }">
    </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, computed} from 'vue'

const scrollY = ref(0)
const points = ref([
  {x: '10%', y: '10%'},
  {x: '10%', y: '20%'},
  {x: '90%', y: '20%'},
  {x: '90%', y: '30%'},
  {x: '10%', y: '30%'},
  {x: '10%', y: '40%'},
  {x: '90%', y: '40%'},
  {x: '90%', y: '50%'},
  {x: '10%', y: '50%'},
  {x: '10%', y: '60%'},
  {x: '90%', y: '60%'},
  {x: '90%', y: '70%'},
  {x: '10%', y: '70%'},
  {x: '10%', y: '80%'},
  {x: '90%', y: '80%'},
  {x: '90%', y: '90%'},
  {x: '10%', y: '90%'},
  {x: '10%', y: '100%'}
])

document.addEventListener('scroll', () => {
  scrollY.value = window.scrollY
})

const ballStyle = computed(() => {
  const pathLength = points.value.length
  const steps = Math.floor(scrollY.value / (document.body.scrollHeight / pathLength))
  const currentStep = steps % pathLength
  const nextStep = (currentStep + 1) % pathLength
  const progress = (scrollY.value % (document.body.scrollHeight / pathLength)) / (document.body.scrollHeight / pathLength)
  const startX = parseFloat(points.value[currentStep].x)
  const startY = parseFloat(points.value[currentStep].y)
  const endX = parseFloat(points.value[nextStep].x)
  const endY = parseFloat(points.value[nextStep].y)
  const posX = startX + (endX - startX) * progress
  const posY = startY + (endY - startY) * progress
  return {
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'red',
    left: `${posX}%`,
    top: `${posY}%`,
    transition: 'left 0.1s linear, top 0.1s linear'
  }
})
</script>
