<template>
  <HeaderNavbar/>
  <router-view/>
  <FooterNavbar/>
</template>

<script setup lang='ts'>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FooterNavbar from '@/components/FooterNavbar.vue'
</script>

<style scoped>
</style>
