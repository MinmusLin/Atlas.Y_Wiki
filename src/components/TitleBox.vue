<template>
  <div class='title-box'>
    <div class='image-container'>
      <img :src='imageSrc' alt='TitleImage' class='title-image'/>
      <img src='/DesignMaterials/Mascot.gif' alt='Mascot' class='corner-image'/>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {defineProps} from 'vue'

defineProps<{
  imageSrc: string
}>()
</script>

<style scoped>
.title-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.image-container {
  position: relative;
  width: 1240px;
  height: 281px;
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
</style>
