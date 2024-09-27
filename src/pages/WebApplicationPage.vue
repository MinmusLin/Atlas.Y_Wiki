<template>
  <div class='content-area'>
    <img src='https://static.igem.wiki/teams/5503/design-materials/toprightcircle.webp'
         alt='TopRightCircle'
         class='top-right-image'/>
    <img src='https://static.igem.wiki/teams/5503/design-materials/bottomleftcircle.webp'
         alt='BottomLeftCircle'
         class='bottom-left-image'/>
    <div class='flex-container'>
      <div class='title-box-container'>
        <TitleBox title='WEBAPPLICATION'/>
      </div>
      <p class='welcome'>Welcome to Atlas.Y!</p>
      <div class='button-area'>
        <button class='btn how-to-use'>How to Use</button>
        <button class='btn try-it'>Try it</button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import TitleBox from '@/components/TitleBox.vue'
</script>

<style scoped>
@import '@/styles/style.css';

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  -webkit-user-select: none;
}

.welcome {
  font-family: 'Futura Md BT Medium', sans-serif;
  text-align: center;
  font-size: 36px;
  color: #FFFFFF;
  margin-bottom: 40px;
  z-index: 1;
}

.button-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 75px;
  margin-bottom: 75px;
  z-index: 1;
}

.btn {
  width: 640px;
  height: 91px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 36px;
  font-family: 'Futura Md Bt Bold', sans-serif;
  color: #5182F8;
  background-color: transparent;
  border: 4px solid #5182F8;
  border-radius: 20px;
  box-shadow: 3px 5px 0 0 #5182F8;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.1s, transform 0.1s;
}

.how-to-use {
  background-color: white;
  color: #007bff;
}

.try-it {
  background-color: #007bff;
  color: white;
}

.btn:hover {
  box-shadow: none;
  transform: translateY(5px) translateX(3px);
}
</style>
