<template>
  <div class='footer-navbar'>
    <img src='/Logos/TongjiUniversityLogo.png'
         alt='TongjiUniversityLogo'
         style='top: 50px; left: 102px'>
    <img src='/Logos/TongjiSoftwareLogo.png'
         alt='TongjiSoftwareLogo'
         style='top: 90px; left: 306px'>
    <img src='/Logos/LightLogo.png'
         alt='LightLogo'
         style='top: 93px; left: 547px'>
    <div class='notes'>
      <p>
        © 2024 - Content on this site is licensed under a
        <a>Creative Commons Attribution 4.0 International license</a>
        .
      </p>
      <p>
        The repository used to create this website is available at
        <a>gitlab.igem.org/2024/tongji-software</a>
        .
      </p>
    </div>
    <p class='contact-us'>Contact Us</p>
    <p class='email'>tongji_china2019@163.com</p>
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
</script>

<style scoped>
.footer-navbar {
  background-color: #16396E;
  height: 430px;
  position: relative;
}

p {
  color: white;
  font-family: 'Futura Bk BT Book', serif;
  font-weight: 500;
  line-height: 34px;
  font-size: 20px;
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
  top: 224px;
}

.notes {
  position: absolute;
  top: 290px;
  left: 108px;
}
</style>
