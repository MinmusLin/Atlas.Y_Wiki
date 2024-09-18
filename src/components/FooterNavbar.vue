<template>
  <div class='footer-navbar'>
    <img src='/Logos/TongjiUniversityLogo.png'
         alt='TongjiUniversityLogo'
         style='top: 50px; left: 102px; cursor: pointer'
         @click="goToLink('https://en.tongji.edu.cn')">
    <img src='/Logos/TongjiSoftwareLogo.png'
         alt='TongjiSoftwareLogo'
         style='top: 90px; left: 306px'>
    <img src='/Logos/LightLogo.png'
         alt='LightLogo'
         style='top: 93px; left: 547px; cursor: pointer'
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
    <img src='/DesignMaterials/Email.png'
         alt='Email'
         style='top: 225px; right: 442px'>
    <img src='/DesignMaterials/TikTok.png'
         alt='TikTok'
         style='top: 298px; right: 450px'>
    <img src='/DesignMaterials/WeChat.png'
         alt='WeChat'
         style='top: 296px; right: 324px'>
    <img src='/DesignMaterials/Bilibili.png'
         alt='Bilibili'
         style='top: 302px; right: 103px'>
  </div>
</template>

<script setup lang='ts'>
function goToLink(link: string) {
  window.open(link, '_blank')
}
</script>

<style scoped>
.footer-navbar {
  background-color: #16396E;
  height: 430px;
  position: relative;
  -webkit-user-select: none;
}

.notes p {
  color: white;
  font-family: 'Futura Bk BT Book', serif;
  font-weight: 500;
  line-height: 34px;
  font-size: 18px;
  white-space: nowrap;
}

.contact-us {
  position: absolute;
  color: white;
  font-family: 'Futura Md BT', serif;
  line-height: 34px;
  font-size: 32px;
  font-weight: 700;
  right: 333px;
  top: 135px;
  white-space: nowrap;
}

img {
  position: absolute;
}

.email {
  position: absolute;
  color: white;
  font-family: 'Futura Bk BT Book', serif;
  font-size: 20px;
  font-weight: 500;
  right: 170px;
  top: 225px;
  text-decoration: none;
}

.notes {
  position: absolute;
  top: 284px;
  left: 108px;
}

a {
  color: white;
  transition: color 0.2s ease;
}

a:hover {
  color: #AACAF9;
}
</style>
