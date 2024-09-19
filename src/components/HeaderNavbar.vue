<template>
  <header class='header-navbar'>
    <nav class='nav-items'>
      <img src='/Logos/DefaultLogo.png' alt='DefaultLogo' class='logo' @click="router.push('/')">
      <div v-for='item in navItems'
           :key='item.title'
           class='nav-item'
           @mouseover='showDropdown(item)'
           @mouseleave='hideDropdown(item)'>
        <button class='nav-title' @click='goToPage(item.url)'>
          {{ item.title }}
          <v-icon v-if='item.subItems' :class=" {'rotated': item.isOpen} " class='dropdown-arrow'>
            mdi-chevron-down
          </v-icon>
        </button>
        <transition name='fade'>
          <ul v-show='item.subItems && item.isOpen' class='dropdown-menu'>
            <li v-for='(subItem, index) in item.subItems'
                :key='index'
                class='dropdown-item'
                @click='goToPage(item.subUrls[index])'>
              {{ subItem }}
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script setup lang='ts'>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
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
    subItems: ['Integrated Human Practices', 'Entrepreneurship', 'Education', 'Promotion Video'],
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

const showDropdown = (item: any) => item.isOpen = true

const hideDropdown = (item: any) => item.isOpen = false

const handleScroll = () => {
  const header = document.querySelector('.header-navbar') as HTMLElement
  header.style.transform = `translateX(${-window.scrollX}px)`
}

function goToPage(url?: string) {
  if (url) {
    router.push(url)
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))

onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
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
}

.dropdown-item:hover {
  color: #FFCA31;
  transition: color 0.3s ease;
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

/* noinspection CssUnusedSymbol */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

/* noinspection CssUnusedSymbol */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* noinspection CssUnusedSymbol */
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
