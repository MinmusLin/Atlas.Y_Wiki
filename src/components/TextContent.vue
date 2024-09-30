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
    <nav ref='navRef' v-if='titleList.length!=0'>
      <a v-for='title in titleList' :key='title'
         :class='{ active: activeAnchor == `#${title}` }'
         @click.prevent='scrollToSection(title)'>{{ title }}</a>
    </nav>
    <div class='text-area'
         :style="{ marginTop: (titleList.length == 0 ? -20 : -navHeight-40) + 'px', transform: `translateX(${titleList.length == 0 ? 0 : -149 }px)`, width: titleList.length == 0 ? '1340px' : '1043px' }">
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
const backgroundImages = ref<string[]>([])

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
        addedHeight += 600
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
    // noinspection TypeScriptUnresolvedReference
    navHeight.value = navRef.value?.offsetHeight
  }
})

onMounted(() => {
  const headings = document.querySelectorAll('h1')
  let currentActiveIndex = -1
  // @ts-ignore
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = Array.from(headings).indexOf(<HTMLHeadingElement>entry.target)
      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        activeAnchor.value = `#${entry.target.id}`
        currentActiveIndex = index
      } else if (entry.intersectionRatio <= 0.1 && entry.boundingClientRect.top > 0 && currentActiveIndex > 0) {
        activeAnchor.value = `#${headings[currentActiveIndex - 1].id}`
        currentActiveIndex = currentActiveIndex - 1
      }
    })
  }, {
    root: null,
    rootMargin: '0px 0px -30% 0px',
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
