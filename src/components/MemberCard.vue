<template>
  <div class='profile-card'>
    <div class='image-container'>
      <img :src='props.photo' alt='ProfilePhoto' class='profile-photo'/>
      <div class='overlay'>
        <p class='bio'>{{ props.bio }}</p>
      </div>
    </div>
    <div class='profile-details'>
      <h2>{{ props.name }}</h2>
      <p class='role'>{{ props.role }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {defineProps} from 'vue'

const props = defineProps<{
  photo: string
  name: string
  role: string
  bio: string
}>()
</script>

<style scoped>
.profile-card {
  width: 300px;
  height: 400px;
  padding: 10px;
  border-radius: 10px;
  background-color: #AACAF9;
  text-align: center;
  border: 1px solid #AACAF9;
  transition: box-shadow 0.2s ease;
}

.profile-card:hover {
  box-shadow: 12px 18px 0 0 #7AA8F3;
}

.profile-card:hover .overlay {
  opacity: 1;
}

.image-container {
  position: relative;
  width: 100%;
  height: 78.3%;
}

.profile-photo {
  width: 299px;
  height: 299px;
  object-fit: cover;
  background-color: #FED549;
  border-radius: 10px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 299px;
  height: 299px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  overflow: hidden;
}

.bio {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #16396e;
  text-align: left;
  max-height: 250px;
  overflow: auto;
  padding: 5px 20px;
}

.profile-details {
  margin-top: 10px;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #16396e;
  margin: 5px 0;
}

.role {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #16396e;
}

.bio::-webkit-scrollbar {
  background-color: transparent;
}

.bio::-webkit-scrollbar-thumb {
  background-color: #5182f8;
}

.bio::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
