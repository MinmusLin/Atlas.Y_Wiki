<template>
  <v-app>
    <div class='loading-container' v-if='loadingVisible'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/loadingyeast.webp'
           alt='LoadingYeast'
           style='width: 350px'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/loading.webp'
           alt='Loading'
           style='width: 300px; transform: translateX(24px); margin-top: -100px'>
    </div>
    <HeaderNavbar/>
    <router-view/>
    <FooterNavbar :is-home-page='isHomePage'/>
    <el-backtop :right='80' :bottom='80' class='back-top'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/backtotop.webp'
           alt='BackToTop'
           style='width: 40px'>
    </el-backtop>
  </v-app>
</template>

<script setup lang='ts'>
import {computed, onMounted, onBeforeUnmount, ref} from 'vue'
import {useRoute} from 'vue-router'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FooterNavbar from '@/components/FooterNavbar.vue'

const route = useRoute()
const isHomePage = computed(() => route.path == '/')
const loadingVisible = ref(true)
let timer = null

onMounted(() => {
  setTimeout(() => {
    loadingVisible.value = false
  }, 3000)
})

onBeforeUnmount(() => {
  clearTimeout(timer)
})
</script>

<style scoped>
.back-top {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 4px #5182F8 solid;
  z-index: 1002;
}

.loading-container {
  width: 100vw;
  height: 100vh;
  background-color: #0D244B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-user-select: none;
}
</style>
