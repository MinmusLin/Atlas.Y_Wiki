<template>
  <div class='content-area'>
    <img src='https://static.igem.wiki/teams/5503/designmaterials/toprightcircle.webp'
         alt='TopRightCircle'
         class='top-right-image'/>
    <img src='https://static.igem.wiki/teams/5503/designmaterials/bottomleftcircle.webp'
         alt='BottomLeftCircle'
         class='bottom-left-image'/>
    <div class='title-box-container'>
      <TitleBox :title='title'/>
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
  title: string
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
  if (navRef.value && navRef.value instanceof HTMLElement) {
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
@import '@/styles/text.css';
@import '@/styles/anchor.css';
@import '@/styles/layout.css';
</style>
