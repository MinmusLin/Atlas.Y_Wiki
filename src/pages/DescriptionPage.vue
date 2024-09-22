<template>
  <TextContent title='DESCRIPTION'
               :title-list="['Description']">
    <h1 id='Description'>Description</h1>
    <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
      and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
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
