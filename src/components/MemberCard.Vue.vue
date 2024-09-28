<template>
  <div class='profile-card'>
    <div class='image-container'>
      <img :src='photo' alt='Profile photo' class='profile-photo' />
      <div class='overlay'>
        <p class='bio'>{{ bio }}</p>
      </div>
    </div>
    <div class='profile-details'>
      <h2>{{ name }}</h2>
      <p class='role'>{{ role }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
interface Props {
  photo: string
  name: string
  role: string
  bio?: string
}

defineProps<Props>()
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
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
  font-size: 18px;
  color: #16396e;
}
</style>

