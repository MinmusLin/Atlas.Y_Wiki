<template>
  <div class='content-area'>
    <img src='https://static.igem.wiki/teams/5503/design-materials/toprightcircle.webp'
         alt='TopRightCircle'
         class='top-right-image'/>
    <img src='https://static.igem.wiki/teams/5503/design-materials/bottomleftcircle.webp'
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
    <div class='background-image-container'>
      <img v-for='(img, index) in backgroundImages'
           :src='img'
           :key='index'
           alt='BackgroundImage'
           :class="'background-style-' + index % 6">
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
const navRef = ref<HTMLElement | null>(null)
const navHeight = ref(0)
const backgroundImages = ref([])

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({top: y, behavior: 'smooth'})
  }
}

onMounted(async () => {
  const images = [
    'https://static.igem.wiki/teams/5503/design-materials/yellowbackgroundprotein.webp',
    'https://static.igem.wiki/teams/5503/design-materials/greenbackgroundprotein.webp',
    'https://static.igem.wiki/teams/5503/design-materials/bluebackgroundprotein.webp'
  ]
  let addedHeight = 0
  const availableHeight = document.body.scrollHeight
  let index = 0
  const loadNextImage = () => {
    const img = new Image()
    const src = images[index % images.length]
    img.src = src
    img.onload = () => {
      if (addedHeight + img.height <= availableHeight) {
        addedHeight += 400
        backgroundImages.value.push(src)
        index++
        loadNextImage()
      }
    }
  }
  loadNextImage()
})

onMounted(() => {
  if (navRef.value) {
    navHeight.value = (navRef.value as HTMLElement).offsetHeight
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
