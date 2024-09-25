<template>
  <TextContent title='MODEL'
               :title-list="['Structure Prediction Model']">
    <h1 id='Structure Prediction Model'>Structure Prediction Model</h1>
    <p>In our project, a protein structure prediction model is essential for accurately generating fusion proteins' pdb
      files for subsequent stability and functional evaluations. After comparing various options, we selected
      <span class='bold'>ESMFold</span> for its exceptional speed, moderate computational resource requirements, and
      ability to handle large sequences without MSAs. These advantages make ESMFold the most efficient choice for our
      workflow, ensuring fast and reliable structural predictions.</p>
    <h5>Table. Comparison of Protein Structure Prediction Tools</h5>
    <table>
      <thead>
      <tr>
        <th style='width: 165px'>Tool</th>
        <th style='width: 165px'>Accuracy</th>
        <th style='width: 165px'>Speed</th>
        <th>Computational Resource Requirement</th>
        <th style='width: 165px'>Local Support</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>AlphaFold</td>
        <td>●●●●●</td>
        <td>●●</td>
        <td>●●●●●</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Uni-Fold</td>
        <td>●●●●</td>
        <td>●●●●</td>
        <td>●●●</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>ColabFold</td>
        <td>●●●●●</td>
        <td>●●●</td>
        <td>●</td>
        <td>No</td>
      </tr>
      <tr>
        <td>ESMFold</td>
        <td>●●●●</td>
        <td>●●●●●</td>
        <td>●●●</td>
        <td>Yes</td>
      </tr>
      </tbody>
    </table>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
</script>

<style scoped>
@import '@/styles/text.css';
@import '@/styles/anchor.css';
@import '@/styles/layout.css';
</style>
