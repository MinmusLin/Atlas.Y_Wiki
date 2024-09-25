<template>
  <div class='footer-navbar'
       :style="{ backgroundColor: (props.isHomePage ? '#16396E' : '#5182F8'), '--hover-color': hoverColor }">
    <img src='https://static.igem.wiki/teams/5503/design-materials/tongjiuniversitylogo.webp'
         alt='TongjiUniversityLogo'
         style='top: 50px; left: 100px; cursor: pointer; width: 140px'
         @click="goToLink('https://en.tongji.edu.cn')">
    <img src='https://static.igem.wiki/teams/5503/design-materials/tongjisoftwarelogo.webp'
         alt='TongjiSoftwareLogo'
         style='top: 90px; left: 304px; cursor: pointer; width: 183px'
         @click="goToLink('https://teams.igem.org/5503')">
    <img src='https://static.igem.wiki/teams/5503/design-materials/lightlogo.webp'
         alt='LightLogo'
         style='top: 93px; left: 545px; cursor: pointer; width: 243px'
         @click="goToLink('http://47.91.92.143')">
    <div class='notes'>
      <p>
        © 2024 - Content on this site is licensed under a
        <a href='https://creativecommons.org/licenses/by/4.0' target='_blank'>
          Creative Commons Attribution 4.0 International license</a>.
      </p>
      <p>
        The repository used to create this website is available at
        <a href='https://gitlab.igem.org/2024/tongji-software' target='_blank'>
          gitlab.igem.org/2024/tongji-software</a>.
      </p>
    </div>
    <p class='contact-us'>Contact Us</p>
    <a class='email' href='mailto:tongji_china2019@163.com'>tongji_china2019@163.com</a>
    <img src='https://static.igem.wiki/teams/5503/design-materials/email.webp'
         alt='Email'
         style='top: 225px; right: 439px; width: 51px'>
    <img src='https://static.igem.wiki/teams/5503/design-materials/tiktok.webp'
         alt='TikTok'
         style='top: 298px; right: 447px; width: 42px'>
    <img src='https://static.igem.wiki/teams/5503/design-materials/wechat.webp'
         alt='WeChat'
         style='top: 296px; right: 321px; width: 64px'>
    <img src='https://static.igem.wiki/teams/5503/design-materials/bilibili.webp'
         alt='Bilibili'
         style='top: 302px; right: 100px; width: 159px'>
  </div>
</template>

<script setup lang='ts'>
import {defineProps, computed} from 'vue'

const props = defineProps<{
  isHomePage: boolean
}>()

const hoverColor = computed(() => props.isHomePage ? '#AACAF9' : '#AACAF9');

function goToLink(link: string) {
  window.open(link, '_blank')
}
</script>

<style scoped>
.footer-navbar {
  height: 430px;
  position: relative;
  -webkit-user-select: none;
  --hover-color: #AACAF9;
}

.contact-us {
  position: absolute;
  color: white;
  font-family: 'Futura Md BT Bold', sans-serif;
  line-height: 34px;
  font-size: 32px;
  right: 330px;
  top: 135px;
  white-space: nowrap;
}

img {
  position: absolute;
}

.email {
  position: absolute;
  color: white;
  font-family: 'Futura Bk BT Book', sans-serif;
  font-size: 20px;
  right: 167px;
  top: 225px;
  text-decoration: none;
}

.notes {
  position: absolute;
  bottom: 78px;
  left: 99px;
}

.notes p {
  color: white;
  font-family: 'Futura Bk BT Book', sans-serif;
  line-height: 34px;
  font-size: 18px;
  white-space: nowrap;
}

a {
  color: white;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--hover-color);
}
</style>
