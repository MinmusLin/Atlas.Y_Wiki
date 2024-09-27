<template>
  <TextContent title='ATTRIBUTIONS' :title-list='[]'>
    <iframe id='igem-attribution-form'
            style='width: 100%; border: none; margin-bottom: -23px; margin-top: 7px'
            src='https://teams.igem.org/wiki/5503/attributions'/>
  </TextContent>
</template>

<script setup lang='ts'>
import {onMounted} from 'vue'
import TextContent from '@/components/TextContent.vue'

onMounted(() => {
  window.addEventListener('message', function (e) {
    const {type, data} = JSON.parse(e.data)
    if (type == 'igem-attribution-form') {
      const element = document.getElementById('igem-attribution-form')
      if (element) {
        element.style.height = data + 'px'
      }
    }
  })
})
</script>

<style scoped>
@import '@/styles/style.css';
</style>
