<template>
  <div class='container'>
    <img src='/DesignMaterials/404.png' class='image-404' alt='404'>
    <p class='not-found-text-1'>Sorry, page not found</p>
    <p class='not-found-text-2'>The page is missing or you assembled the link incorrectly</p>
    <button class='go-back-button' @click="router.push('/')">GO BACK</button>
  </div>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 510px);
  padding: 20px;
}

.image-404 {
  width: 430px;
  height: auto;
}

.not-found-text-1 {
  margin-top: 10px;
  font-size: 42px;
  font-weight: 700;
  font-family: 'Futura Md BT', sans-serif;
  color: #5182F8;
  text-align: center;
}

.not-found-text-2 {
  font-size: 16px;
  font-weight: 400;
  font-family: 'Futura Md BT', sans-serif;
  color: #C5C9CD;
  text-align: center;
}

.go-back-button {
  width: 143px;
  height: 56px;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Futura Md BT', sans-serif;
  color: #5182F8;
  background-color: transparent;
  border: 4px solid #5182F8;
  border-radius: 20px;
  box-shadow: 3px 5px 0 0 #5182F8;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.1s, transform 0.1s;
}

.go-back-button:hover {
  box-shadow: none;
  transform: translateY(3px);
}
</style>
