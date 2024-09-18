<template>
  <div class='content-area'>
    <img src='/DesignMaterials/TopRightCircle.png' alt='TopRightCircle' class='top-right-image'/>
    <img src='/DesignMaterials/BottomLeftCircle.png' alt='BottomLeftCircle' class='bottom-left-image'/>
    <div class='title-box-container'>
      <TitleBox imageSrc='https://th.bing.com/th/id/OIP.tmvIu57hTRpXhPRWkBDDEQHaEK?rs=1&pid=ImgDetMain'/>
    </div>
    <nav>
      <a :class="{ active: activeAnchor == '#title1.1' }" @click.prevent="scrollToSection('title1.1')">Title 1.1</a>
      <a :class="{ active: activeAnchor == '#title1.2' }" @click.prevent="scrollToSection('title1.2')">Title 1.2</a>
    </nav>
    <div class='text-area'>
      <h1 id='title1.1'>Title1.1</h1>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <h1 id='title1.2'>Title1.2</h1>
      <h2>Title2</h2>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <h3>Title3</h3>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <h4>Title4</h4>
      <p>By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p class='bold'>By visiting the WIKI, you can gain insight into the entire development process, explore our
        technical details and the thinking behind our decisions, and access a wealth of background information and
        resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p class='strikethrough'>By visiting the WIKI, you can gain insight into the entire development process, explore
        our technical details and the thinking behind our decisions, and access a wealth of background information and
        resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p class='italic'>By visiting the WIKI, you can gain insight into the entire development process, explore our
        technical details and the thinking behind our decisions, and access a wealth of background information and
        resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <p class='underline'>By visiting the WIKI, you can gain insight into the entire development process, explore our
        technical details and the thinking behind our decisions, and access a wealth of background information and
        resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.
        By visiting the WIKI, you can gain insight into the entire development process, explore our technical details
        and the thinking behind our decisions, and access a wealth of background information and resource support.</p>
      <ul>
        <li>By visiting the WIKI, you can gain insight into the entire development process,</li>
        <li>explore our technical details and the thinking behind our decisions,</li>
        <li>and access a wealth of background information and resource support.</li>
      </ul>
      <ol>
        <li>By visiting the WIKI, you can gain insight into the entire development process,</li>
        <li>explore our technical details and the thinking behind our decisions,</li>
        <li>and access a wealth of background information and resource support.</li>
      </ol>
      <p>
        C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
      </p>
      <p>
        C<sup>8</sup>H<sup>10</sup>N<sup>4</sup>O<sup>2</sup>
      </p>
      <img src='https://th.bing.com/th/id/OIP.tmvIu57hTRpXhPRWkBDDEQHaEK?rs=1&pid=ImgDetMain' alt='ExampleImage'
           width='400'/>
      <h5>Example Image</h5>
      <table>
        <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
        <tr>
          <td>Row 3, Cell 1</td>
          <td>Row 3, Cell 2</td>
          <td>Row 3, Cell 3</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted, onUnmounted} from 'vue'
import TitleBox from '@/components/TitleBox.vue'

const activeAnchor = ref<string | null>(null)

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({behavior: 'smooth'})
  }
}

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
    rootMargin: '0px 0px -80% 0px',
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
