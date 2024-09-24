<template>
  <TextContent title='PROMOTION VIDEO'
               :title-list="['Title1', 'Title2', 'Title3']">
    <h1 id='Title1'>Title1</h1>
    <p>text</p>
    <h2>Title1.1</h2>
    <p>text</p>
    <h3>Title1.1.1</h3>
    <p>text</p>
    <h4>Title1.1.1.1</h4>
    <p>text</p>
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
    <img src='https://static.igem.wiki/teams/5503/design-materials/metabolicengineering.webp'
         alt='ExampleImage'
         width='500'/>
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

    <iframe style='border: none'
            title='Tongji-Software: Atlas.Y: An Advanced Targeting and Localization Assistance Syst... (2024) - Project Promotion [English]'
            width='912'
            height='513'
            src='https://video.igem.org/videos/embed/bd8a4fa2-aef2-4e08-b860-7c6eeeb8bd1a'
            :allowfullscreen='true'
            sandbox='allow-same-origin allow-scripts allow-popups allow-forms'/>
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
