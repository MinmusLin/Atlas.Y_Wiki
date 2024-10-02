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
        <TitleBox title='WEB APPLICATION'/>
      </div>
      <p class='welcome'>Welcome to Atlas.Y!</p>
      <iframe style='border: none; margin-top: 47px; margin-bottom: 44px; z-index: 2'
              title='Atlas.Y --- example video'
              width='1332'
              height='749'
              src='https://video.igem.org/videos/embed/dd4635b1-17b7-473f-afed-075406950304'
              :allowfullscreen='true'
              sandbox='allow-same-origin allow-scripts allow-popups allow-forms'/>
      <p class='promote'>Due to geographic distance, network latency, and computational resource limitations, you may
        experience longer wait times on the calculation page. However, please rest assured that the results will be
        provided if you wait patiently. We also recommend watching our tutorial video, which uses real data and
        calculations to help you quickly familiarize yourself with the software.</p>
      <div class='button-area'>
        <button class='btn how-to-use'
                @click="goToLink('https://2024.igem.wiki/tongji-software/implementation')">
          How to Use
        </button>
        <button class='btn try-it'
                @click="goToLink('http://162.62.213.36')">
          Try it
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import TitleBox from '@/components/TitleBox.vue'

function goToLink(link: string) {
  window.open(link, '_blank')
}
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
  font-size: 60px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  z-index: 1;
  width: 50%;
}

.promote {
  font-family: 'Futura Md BT Medium', sans-serif;
  text-align: center;
  font-size: 30px;
  color: white;
  margin-bottom: 40px;
  z-index: 1;
  width: 1202px;
}

.button-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 75px;
  margin-bottom: 60px;
  z-index: 1;
}

.btn {
  width: 640px;
  height: 91px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 36px;
  font-family: 'Futura Md Bt Bold', sans-serif;
  border-radius: 20px;
  box-shadow: 3px 5px 0 0 #5182F8;
  border: 4px solid #5182F8;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.1s, transform 0.1s;
}

.how-to-use {
  background-color: white;
  color: #5182F8;
  margin-top: 42px;
}

.try-it {
  background-color: #7AA8F5;
  color: white;
}

.btn:hover {
  box-shadow: none;
  transform: translateY(5px) translateX(3px);
}
</style>
