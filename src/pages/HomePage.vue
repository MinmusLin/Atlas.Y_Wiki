<template>
  <div class='content-area'>
    <img src='/DesignMaterials/TopRightCircle.png' alt='TopRightCircle' class='top-right-image'/>
    <img src='/DesignMaterials/BottomLeftCircle.png' alt='BottomLeftCircle' class='bottom-left-image'/>
    <div class='title-box-container'>
      <TitleBox imageSrc='https://th.bing.com/th/id/OIP.tmvIu57hTRpXhPRWkBDDEQHaEK?rs=1&pid=ImgDetMain'/>
    </div>
    <nav ref='navRef'>
      <a :class="{ active: activeAnchor == '#Title1' }" @click.prevent="scrollToSection('Title1')">Title1</a>
      <a :class="{ active: activeAnchor == '#Title2' }" @click.prevent="scrollToSection('Title2')">Title2</a>
      <a :class="{ active: activeAnchor == '#Title3' }" @click.prevent="scrollToSection('Title3')">Title3</a>
    </nav>
    <div class='text-area' :style="{ marginTop: (-navHeight-22) + 'px' }">
      <h1 id='Title1'>Title1</h1>
      <p>Text</p>
      <h2>Title1.1</h2>
      <p>Text</p>
      <h3>Title1.1.1</h3>
      <p>Text</p>
      <h4>Title1.1.1.1</h4>
      <p>Text</p>
      <h1 id='Title2'>Title2</h1>
      <p class='bold'>bold text</p>
      <p class='strikethrough'>strikethrough text</p>
      <p class='italic'>italic text</p>
      <p class='underline'>underline text</p>
      <p>Unordered List:</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <p>Ordered List:</p>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
      <p>
        C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
      </p>
      <p>
        C<sup>8</sup>H<sup>10</sup>N<sup>4</sup>O<sup>2</sup>
      </p>
      <h1 id='Title3'>Title3</h1>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <img src='https://th.bing.com/th/id/OIP.tmvIu57hTRpXhPRWkBDDEQHaEK?rs=1&pid=ImgDetMain' alt='ExampleImage'
           width='600'/>
      <h5>Figure 1.1 Example</h5>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <h5>Table 1.1 Example</h5>
      <table>
        <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1-1</td>
          <td>1-2</td>
          <td>1-3</td>
        </tr>
        <tr>
          <td>2-1</td>
          <td>2-2</td>
          <td>2-3</td>
        </tr>
        <tr>
          <td>3-1</td>
          <td>3-2</td>
          <td>3-3</td>
        </tr>
        </tbody>
      </table>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted, onUnmounted} from 'vue'
import TitleBox from '@/components/TitleBox.vue'

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
