<template>
  <div class="background-container">
    <img src="/DesignMaterials/Background1.png" alt="Background1" class="background">
    <img src="/DesignMaterials/Background2.png" alt="Background2" class="background">

    <img src="/DesignMaterials/Title.png" alt="Title" class="title">
    <!-- Page1 -->
    <img src="/DesignMaterials/MotileCell1.png" alt="MotileCell1" class="motile-cell1">
    <img src="/DesignMaterials/MotileCell2.png" alt="MotileCell2" class="motile-cell2">
    <img src="/DesignMaterials/MotileCell3.png" alt="MotileCell3" class="motile-cell3">
    <img src="/DesignMaterials/MotileCell4.png" alt="MotileCell4" class="motile-cell4">
    <img src="/DesignMaterials/MotileCell5.png" alt="MotileCell5" class="motile-cell5">
    <img src="/DesignMaterials/MotileCell7.png" alt="MotileCell7" class="motile-cell7">
    <img src="/DesignMaterials/MotileCell6.png" alt="MotileCell6" class="motile-cell6">

    <img src="/DesignMaterials/WorldMap.png" alt="WorldMap" class="world-map">
    <img src="/DesignMaterials/Anaximander.png" alt="Anaximander" class="Anaximander">
    <img src="/DesignMaterials/Eratosthenes.png" alt="Eratosthenes" class="Eratosthenes">
    <img src="/DesignMaterials/Newton.png" alt="Newton" class="Newton">
    <img src="/DesignMaterials/Planet1.png" alt="Planet1" class="planet1">
    <img src="/DesignMaterials/Planet2.png" alt="Planet2" class="planet2">
    <img src="/DesignMaterials/Planet3.png" alt="Planet2" class="planet3">
    <div class="promot4">
      Humanity has never stopped exploring the <span class="highlight">Macrocosm</span>
    </div>
    <img src="/DesignMaterials/LeftCloud.png" alt="LeftCloud" class="left-cloud">
    <img src="/DesignMaterials/RightCloud.png " alt="RightCloud" class="right-cloud">
    <img src="/DesignMaterials/DistantCloud.png" alt="DistantCloud" class="distant-cloud">
    <img src="/DesignMaterials/Clouds.png" alt="Clouds" class="clouds">
    <img src="/DesignMaterials/PlainEarth.png" alt="PlainEarth" class="plain-earth">
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.background-container {
  position: relative;
  display: block;
}

.background {
  width: 100%;
  height: auto;
  display: block;
}

.title {
  position: absolute;
  top: 2%;
  height: auto;
  width: 45%;
  left: 50%; /* 将图片左边缘定位到父容器的50%处 */
  transform: translateX(-50%); /* 使用 translateX(-50%) 将图片的中心对齐到50%的位置 */
  z-index:1000;
}

.motile-cell1 {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 15%;
}

.motile-cell2 {
  position: absolute;
  top: 0;
  left: 23%;
  height: auto;
  width: 10%;
}

.motile-cell3 {
  position: absolute;
  top: 0;
  right: 0;
  height: auto;
  width: 38%;
}

.motile-cell4 {
  position: absolute;
  top: 3%;
  left: 0;
  height: auto;
  width: 8%;
}

.motile-cell5 {
  position: absolute;
  top: 4.5%;
  left: 25%;
  height: auto;
  width: 8%;
}

.motile-cell6 {
  position: absolute;
  top: 3.3%;
  right: 9%;
  height: auto;
  width: 28%;
}

.motile-cell7 {
  position: absolute;
  top: 2.9%;
  right: 18%;
  height: auto;
  width: 5%;
}

.world-map{
  position: absolute;
  top: 8.5%;
  left: 0;
  height: auto;
  width: 35%;
}

.Anaximander {
  position: absolute;
  top: 9.4%;
  left: 0;
  height: auto;
  width: 13.5%;
}

.Eratosthenes{
  position: absolute;
  top: 12.8%;
  left: 33%;
  height: auto;
  width: 13.5%;
}

.Newton{
  position: absolute;
  top: 15.4%;
  right: 0;
  height: auto;
  width: 13.5%;
}

.planet1{
  position: absolute;
  top: 16.6%;
  left: 0;
  height: auto;
  width: 17%;
}

.planet2{
  position: absolute;
  top: 15.8%;
  right: 42%;
  height: auto;
  width: 10%;
}

.planet3{
  position: absolute;
  top: 19.5%;
  left: 30%;
  height: auto;
  width: 8%;
}

.promot4{
  position: absolute;
  top: 20.2%;
  left: 50%; /* 将图片左边缘定位到父容器的50%处 */
  transform: translateX(-45%); /* 使用 translateX(-50%) 将图片的中心对齐到50%的位置 */
  width:1378px;
  height: auto;
  font-family: 'Futura Md BT', sans-serif;
  font-size:50px;
  font-weight:700;
  color:white;
}

.highlight {
  color: #FDE162; /* 黄色, 你可以根据需要调整颜色 */
}

.left-cloud{

}

.right-cloud{

}

.distant-cloud{

}

.clouds{

}

.plain-earth{

}
</style>
