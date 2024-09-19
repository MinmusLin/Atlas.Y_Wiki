<template>
  <div class='content-area'>
    <img src='/DesignMaterials/TopRightCircle.png' alt='TopRightCircle' class='top-right-image'/>
    <img src='/DesignMaterials/BottomLeftCircle.png' alt='BottomLeftCircle' class='bottom-left-image'/>
    <div class='title-box-container'>
      <TitleBox :image-src='imageSrc'/>
    </div>
    <nav ref='navRef'>
      <a v-for='title in titleList' :key='title'
         :class='{ active: activeAnchor == `#${title}` }'
         @click.prevent='scrollToSection(title)'>{{ title }}</a>
    </nav>
    <div class='text-area' :style="{ marginTop: (-navHeight-22) + 'px' }">
      <slot/>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted, onUnmounted, defineProps} from 'vue'
import TitleBox from '@/components/TitleBox.vue'

defineProps<{
  imageSrc: string
  titleList: string[]
}>()

const activeAnchor = ref<string | null>(null)
const navRef = ref(null)
const navHeight = ref(0)

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({top: y, behavior: 'smooth'})
  }
}

onMounted(() => {
  if (navRef.value) {
    navHeight.value = navRef.value.offsetHeight
  }
})

onMounted(() => {
  const headings = document.querySelectorAll('h1')
  // @ts-ignore
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeAnchor.value = `#${entry.target.id}`
      }
    })
  }, {
    root: null,
    rootMargin: '0px 0px -50% 0px',
    threshold: 0.1
  })
  headings.forEach(heading => {
    observer.observe(heading)
  })
  onUnmounted(() => {
    headings.forEach(heading => {
      observer.unobserve(heading)
    })
  })
})
</script>

<style scoped>
@import '@/assets/styles/text.css';
@import '@/assets/styles/anchor.css';
@import '@/assets/styles/layout.css';
</style>
