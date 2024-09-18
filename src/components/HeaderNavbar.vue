<template>
  <el-menu :default-active='activeIndex' class='header-navbar' mode='horizontal' :ellipsis='false'>
    <el-container ref='tourRef1' class='logo-title' @click="router.push('/')">
      <img :src='`${ossBaseUrl}LogosAndIcons/PetJoyIcon.png`' style='height: 45px; margin-left: 10px' alt='PetJoyIcon'>
      <h1 style='white-space: nowrap'>宠悦 PetJoy</h1>
    </el-container>

    <el-menu-item ref='tourRef2' index='1' class='navbar-item' @click="router.push('/pet-community')">
      {{ t('HeaderNavbar.PetCommunity') }}
    </el-menu-item>
    <el-menu-item ref='tourRef3' index='2' class='navbar-item' @click="router.push('/pet-news')">
      {{ t('HeaderNavbar.PetNews') }}
    </el-menu-item>
    <el-menu-item ref='tourRef4' index='3' class='navbar-item' @click="router.push('/pet-adoption')">
      {{ t('HeaderNavbar.PetAdoption') }}
    </el-menu-item>
    <el-menu-item ref='tourRef5' index='4' class='navbar-item' @click="router.push('/pet-encyclopedia')">
      {{ t('HeaderNavbar.PetEncyclopedia') }}
    </el-menu-item>
    <el-menu-item ref='tourRef6' index='5' class='navbar-item' @click="router.push('/pet-care')">
      {{ t('HeaderNavbar.PetCare') }}
    </el-menu-item>
    <el-menu-item ref='tourRef7' index='6' class='navbar-item' @click="router.push('/pet-ai')">
      {{ t('HeaderNavbar.PetAI') }}
    </el-menu-item>

    <div class='flex-grow'/>

    <el-popover :width='350' popper-style='box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 15px'>
      <template #reference>
        <el-icon ref='tourRef8' color='#4888F6' :size='24' style='margin-right: 10px; margin-bottom: 2px'>
          <Sunny/>
        </el-icon>
      </template>
      <template #default>
        <WeatherForecast/>
      </template>
    </el-popover>

    <el-dropdown ref='tourRef9' size='large'>
      <p v-html='languageIconSvg' style='outline: none'/>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="toggleLanguage('zh')" :disabled="locale == 'zh'">简体中文</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('en')" :disabled="locale == 'en'">English</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('es')" :disabled="locale == 'es'">Español</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('ru')" :disabled="locale == 'ru'">Русский</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('pt')" :disabled="locale == 'pt'">Português</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('ja')" :disabled="locale == 'ja'">日本語</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('de')" :disabled="locale == 'de'">Deutsch</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('ko')" :disabled="locale == 'ko'">한국어</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('fr')" :disabled="locale == 'fr'">Français</el-dropdown-item>
          <el-dropdown-item @click="toggleLanguage('it')" :disabled="locale == 'it'">Italiano</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-menu>
</template>

<script setup lang='ts'>
import {onMounted, ref, watch, onUnmounted, computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'

const activeIndex = ref('0')
const router = useRouter()
const languageIconSvg = atob('PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjAgMTgiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O2ZpbGwtcnVsZTpldmVub2RkfSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjkxIDcuMmgtMS44MkwxMCAxOGgxLjgybDEtMi43aDQuMzJsMSAyLjdIMjB6bS0yLjM5IDYuM0wxNSA5LjZsMS40OCAzLjl6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEwLjc5IDExLjc3TDguNDggOS41MWgwYTE1LjYyIDE1LjYyIDAgMCAwIDMuNC01LjkxaDIuNjdWMS44SDguMThWMEg2LjM2djEuOEgwdjEuNzloMTAuMTVhMTQuMDYgMTQuMDYgMCAwIDEtMi44OCA0LjgyIDE0LjU1IDE0LjU1IDAgMCAxLTIuMS0zSDMuMzVhMTYgMTYgMCAwIDAgMi43MSA0LjFMMS40NCAxNGwxLjI5IDEuMyA0LjU0LTQuNSAyLjgzIDIuOHoiLz4mI3hhOzwvc3ZnPg==')
const storedValue = localStorage.getItem('currentUserId')
const storedUserId = storedValue ? parseInt(storedValue) : 0
const currentUserId = ref(isNaN(storedUserId) ? 0 : storedUserId)




const toggleLanguage = (lang: string) => {
  localStorage.setItem('defaultLanguage', lang)
  window.location.reload()
}
</script>

<style scoped>
.header-navbar {
  margin-top: 5px;
  align-items: center;
  height: 60px;
  min-width: 1200px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: auto;
}

.logo-title {
  max-width: 210px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.logo-title:hover {
  transform: scale(1.05);
  color: var(--el-color-primary);
}

h1 {
  font-size: 24px;
  margin: 10px 10px;
}

.navbar-item {
  font-size: 16px;
}

.flex-grow {
  flex-grow: 1;
}

.avatar {
  margin-right: 10px;
  outline: none;
}

.mode-switch {
  margin-left: 10px;
  margin-right: 10px;
}

.icon-reverse {
  filter: invert(100%);
}

.experience-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4px;
}

.experience-text {
  font-size: 12px;
  color: var(--el-color-info-light-3);
  text-align: center;
  padding: 0 10px;
  margin-top: 10px;
}

.dropdown-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.dropdown-item-icon {
  margin-right: 0;
}

.dropdown-item-avatar {
  width: 120px;
  height: 120px;
  margin-top: 10px;
}

.avatar-container {
  cursor: pointer;
  border-radius: 50%;
  overflow: visible;
  position: relative;
}

.dropdown-item-avatar {
  transition: filter 0.3s ease;
}

.avatar-container:hover .dropdown-item-avatar {
  filter: brightness(75%);
}

.edit-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: lightgray;
  opacity: 0;
  font-size: 30px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.avatar-container:hover .edit-icon {
  display: block;
  opacity: 1;
}

.check-icon {
  position: absolute;
  top: 6%;
  right: 15px;
  transform: translateY(-50%);
}

.disable-dropdown {
  pointer-events: none;
  opacity: 0.5;
}
</style>
