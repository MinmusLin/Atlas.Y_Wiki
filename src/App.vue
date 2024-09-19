<template>
  <v-app>
    <HeaderNavbar/>
    <router-view/>
    <FooterNavbar/>
    <el-backtop :right='60' :bottom='60'/>
  </v-app>
</template>

<script setup lang='ts'>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FooterNavbar from '@/components/FooterNavbar.vue'
</script>

<style scoped>
</style>
