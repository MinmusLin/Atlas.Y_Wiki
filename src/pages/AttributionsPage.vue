<template>
  <TextContent title='ATTRIBUTIONS' :title-list='[]'>
    <p>
      Below is the content from <a href='https://teams.igem.org/wiki/5503/attributions' target='_blank'>
      https://teams.igem.org/wiki/5503/attributions</a>.
    </p>
    <!-- LEAVE THE IFRAME CODE BELOW AS IT IS, THE ATTRIBUTION FORM OF YOUR TEAM -->
    <!-- WILL BE DISPLAYED ON THIS PAGE. DO NOT REMOVE IT, OTHERWISE YOU RISK OF -->
    <!-- NOT MEETING BRONZE MEDAL CRITERION #2 -->
    <iframe id='igem-attribution-form'
            style='width: 100%; border: none; margin-bottom: -23px; margin-top: 17px'
            src='https://teams.igem.org/wiki/5503/attributions'/>
  </TextContent>
</template>

<script setup lang='ts'>
import {onMounted} from 'vue'
import TextContent from '@/components/TextContent.vue'

onMounted(() => {
  // LEAVE THE IFRAME CODE BELOW AS IT IS, THE ATTRIBUTION FORM OF YOUR TEAM
  // WILL BE DISPLAYED ON THIS PAGE. DO NOT REMOVE IT, OTHERWISE YOU RISK OF
  // NOT MEETING BRONZE MEDAL CRITERION #2
  window.addEventListener('message', function (e) {
    const {type, data} = JSON.parse(e.data)
    if (type == 'igem-attribution-form') {
      const element = document.getElementById('igem-attribution-form')
      element.style.height = data + 'px'
    }
  })
})
</script>

<style scoped>
@import '@/styles/style.css';
</style>
