<template>
  <div class='title-box'>
    <div class='image-container'>
      <img src='/DesignMaterials/TitleBackground.png' alt='TitleBackground' class='title-image'/>
      <img src='/DesignMaterials/Mascot.gif' alt='Mascot' class='corner-image'/>
      <p class='title1'>{{ title }}</p>
      <p class='title2'>{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {defineProps} from 'vue'

defineProps<{
  title: string
}>()
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
  bottom: -100px;
  right: -100px;
  width: 320px;
  height: 320px;
  border-radius: 10px;
}

.title1 {
  position: absolute;
  left: 62px;
  bottom: 15px;
  font-size: 64px;
  font-weight: 800;
  color: #5182F8;
  font-family: 'Inter', serif;
}

.title2 {
  position: absolute;
  left: 53px;
  bottom: 19px;
  font-size: 64px;
  font-weight: 800;
  color: white;
  font-family: 'Inter', serif;
}
</style>
