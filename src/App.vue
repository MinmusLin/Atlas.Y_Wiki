<template>
  <v-app>
    <HeaderNavbar/>
    <router-view/>
    <FooterNavbar/>
    <el-backtop :right='80' :bottom='80' class='back-top'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/backtotop.webp'
           alt='BackToTop'
           style='width: 40px'>
    </el-backtop>
  </v-app>
</template>

<script setup lang='ts'>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FooterNavbar from '@/components/FooterNavbar.vue'
</script>

<style scoped>
.back-top {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 4px #5182F8 solid;
  z-index: 1002;
}
</style>
