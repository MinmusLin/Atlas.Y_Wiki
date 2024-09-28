<template>
  <TextContent title='ROSTER' :title-list='[]'>
    <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
      and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
    <div class='team-name'>Algorithm Development</div>
    <div class='member-card'>
      <MemberCard
        photo="design-materials/DrugProduction.webp"
        name="Shurui Ning"
        role="Leader"
        bio="By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
      and the thinking behind our decisions, and access a wealth of background information and resource support."
      />

      <MemberCard
        photo="design-materials/DrugProduction.webp"
        name="Shurui Ning"
        role="Leader"
        bio="By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
      and the thinking behind our decisions, and access a wealth of background information and resource support."
      />

      <MemberCard
        photo="design-materials/DrugProduction.webp"
        name="Shurui Ning"
        role="Leader"
        bio="By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
      and the thinking behind our decisions, and access a wealth of background information and resource support."
      />

      <MemberCard
        photo="design-materials/DrugProduction.webp"
        name="Shurui Ning"
        role="Leader"
        bio="By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
      and the thinking behind our decisions, and access a wealth of background information and resource support."
      />

      <MemberCard
        photo="design-materials/DrugProduction.webp"
        name="Shurui Ning"
        role="Leader"
        bio="By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
      and the thinking behind our decisions, and access a wealth of background information and resource support."
      />
    </div>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
import MemberCard from '@/components/MemberCard.vue'
</script>

<style scoped>
@import '@/styles/style.css';

.team-name {
  text-align: center;
  margin: 50px auto;
  font-family: 'Futura Md BT Medium', sans-serif;
  font-size: 32px;
  color: #16396E;
  display: block;
}

.member-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  margin: 0 auto;
}

.member-card > * {
  flex: 1 1 calc(33.333% - 80px);
  max-width: calc(33.333% - 80px);
}
</style>
