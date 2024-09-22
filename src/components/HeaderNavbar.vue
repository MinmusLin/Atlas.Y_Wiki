<template>
  <header :class="['header-navbar', isHomePage ? 'homepage' : '']">
    <nav class='nav-items'>
      <img src='/DesignMaterials/DefaultLogo.webp' alt='DefaultLogo' class='logo' @click="router.push('/')">
      <div v-for='item in navItems'
           :key='item.title'
           class='nav-item'
           @mouseover='showDropdown(item)'
           @mouseleave='hideDropdown(item)'>
        <!--suppress JSIncompatibleTypesComparison-->
        <button class='nav-title'
                @click='item.url ? goToPage(item.url) : undefined'
                :class="['nav-title', isHomePage ? 'homepage' : '', { 'hover-effect': hoveredItem == item.title, 'active-effect': isActive(item), 'scrolled': isScrolled }]">
          {{ item.title }}
          <!--suppress JSIncompatibleTypesComparison-->
          <v-icon v-if='item.subItems'
                  :class=" {'rotated': item.isOpen, 'hover-effect': hoveredItem == item.title, 'active-effect': isActive(item) }"
                  class='dropdown-arrow'>
            mdi-chevron-down
          </v-icon>
        </button>
        <transition name='fade'>
          <ul v-show='item.subItems && item.isOpen' class='dropdown-menu'>
            <li v-for='(subItem, index) in item.subItems'
                :key='index'
                class='dropdown-item'
                @click='item.subUrls ? goToPage(item.subUrls[index]) : undefined'>
              {{ subItem }}
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script setup lang='ts'>
import {ref, onMounted, onBeforeUnmount, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const hoveredItem = ref(null)
const isHomePage = ref(route.path == '/')
const isScrolled = ref(false)
const navItems = ref([
  {
    title: 'HOME',
    url: '/',
    subItems: null,
    subUrls: null,
    isOpen: false
  },
  {
    title: 'PROJECT',
    url: null,
    subItems: ['Description', 'Design', 'Engineering', 'Implementation', 'Proof of Concept', 'Notebook'],
    subUrls: ['/description', '/design', '/engineering', '/implementation', '/proof-of-concept', '/notebook'],
    isOpen: false
  },
  {
    title: 'SOFTWARE',
    url: null,
    subItems: ['Contribution', 'Web Application'],
    subUrls: ['/contribution', '/web-application'],
    isOpen: false
  },
  {
    title: 'MODEL',
    url: '/model',
    subItems: null,
    subUrls: null,
    isOpen: false
  },
  {
    title: 'HUMAN PRACTICES',
    url: null,
    subItems: ['Integrated HP', 'Entrepreneurship', 'Education', 'Promotion Video'],
    subUrls: ['/human-practices', '/entrepreneurship', '/education', '/promotion-video'],
    isOpen: false
  },
  {
    title: 'SAFETY',
    url: '/safety',
    subItems: null,
    subUrls: null,
    isOpen: false
  },
  {
    title: 'TEAM',
    url: null,
    subItems: ['Roster', 'Attributions'],
    subUrls: ['/team', '/attributions'],
    isOpen: false
  }
])

const showDropdown = (item: any) => {
  item.isOpen = true
  hoveredItem.value = item.title
}

const hideDropdown = (item: any) => {
  item.isOpen = false
  hoveredItem.value = null
}

const updateNavbarStyle = () => {
  isHomePage.value = route.path == '/'
}

const isActive = (item: any) => {
  return route.path == item.url || (item.subUrls && item.subUrls.includes(route.path))
}

const handleScroll = () => {
  const header = document.querySelector('.header-navbar') as HTMLElement
  header.style.transform = `translateX(${-window.scrollX}px)`
  const scrollPosition = window.scrollY
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight
  isScrolled.value = scrollPosition > pageHeight * 0.26
}

function goToPage(url: string) {
  router.push(url)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateNavbarStyle()
  watch(() => route.path, updateNavbarStyle)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1440px;
  background-color: white;
  height: 80px;
  border-bottom: 4px #5182F8 solid;
  -webkit-user-select: none;
  z-index: 1000;
}

.header-navbar.homepage {
  background-color: transparent;
  backdrop-filter: blur(10px);
  border-bottom: 4px transparent solid;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-items {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo {
  margin-right: auto;
  width: 140px;
  margin-left: 36px;
  cursor: pointer;
}

.nav-item {
  position: relative;
  margin-right: 40px;
}

.nav-title {
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #2F3235;
  font-family: 'Futura Md BT', serif;
  transition: color 0.5s ease;
}

.nav-title.homepage {
  color: white;
}

.nav-title.homepage.scrolled {
  color: #2F3235;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}

.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  list-style-type: none;
  background-color: white;
  border-radius: 10px;
  border: 4px #7AA8F3 solid;
  box-shadow: 8px 12px 0 0 #7AA8F3;
  padding: 13px 30px 12px;
  right: 0;
  top: 33px;
  z-index: 1000;
}

.dropdown-item {
  cursor: pointer;
  color: #2F3235;
  font-size: 20px;
  line-height: 38px;
  font-family: 'Inter', serif;
  font-weight: 600;
  white-space: nowrap;
  width: auto;
  transition: color 0.3s ease;
}

.dropdown-item:hover {
  color: #FFCA31;
}

.dropdown-item::after {
  content: '';
  position: absolute;
  width: 0;
  left: 0;
  transform: translateY(33px) translateX(25px);
  height: 4px;
  background-color: #FFCA31;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.dropdown-item:hover::after {
  width: calc(100% - 50px);
}

.hover-effect {
  color: #7AA8F3;
}

.hover-effect.homepage {
  color: #7AA8F3;
}

.hover-effect.homepage.scrolled {
  color: #7AA8F3;
}

.active-effect {
  color: #5182F8;
}

.active-effect.homepage {
  color: #5182F8;
}

.active-effect.homepage.scrolled {
  color: #5182F8;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
