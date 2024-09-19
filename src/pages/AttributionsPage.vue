<template>
  <TextContent image-src='https://th.bing.com/th/id/OIP.tmvIu57hTRpXhPRWkBDDEQHaEK?rs=1&pid=ImgDetMain'
               :title-list="['Attributions']">
    <h1 id='Attributions'>Attributions</h1>
    <p>
      Below is the content from <a href='https://teams.igem.org/wiki/5503/attributions' target='_blank'>
      https://teams.igem.org/wiki/5503/attributions</a>.
    </p>
    <iframe style='width: 100%; border: none; height: 250px'
            src='https://teams.igem.org/wiki/5503/attributions'/>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
</script>

<style scoped>
@import '@/assets/styles/text.css';
@import '@/assets/styles/anchor.css';
@import '@/assets/styles/layout.css';
</style>
