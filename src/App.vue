<template>
  <v-app>
    <div class='loading-container' v-if='isLoading'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/loadingyeast.webp'
           alt='LoadingYeast'
           style='width: 350px'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/loading.webp'
           alt='Loading'
           style='width: 300px; transform: translateX(6px); margin-top: -70px'>
    </div>
    <HeaderNavbar/>
    <router-view/>
    <FooterNavbar/>
    <el-backtop :right='80' :bottom='80' class='back-top'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/backtotop.webp' alt='BackToTop'
           style='width: 40px'>
    </el-backtop>
  </v-app>
</template>

<script setup lang='ts'>
import {ref, onMounted} from 'vue'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FooterNavbar from '@/components/FooterNavbar.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style scoped>
.back-top {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 4px #5182F8 solid;
}

.loading-container {
  width: 100vw;
  height: 100vh;
  background: #0D244B;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
