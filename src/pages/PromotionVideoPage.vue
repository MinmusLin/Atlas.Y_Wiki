<template>
  <TextContent title='Promotion Video' :title-list='[]'>
    <iframe style='border: none; margin-top: 15px; margin-bottom: 20px'
            title='Tongji-Software: Atlas.Y: An Advanced Targeting and Localization Assistance Syst... (2024) - Project Promotion [English]'
            width='1202'
            height='676'
            src='https://video.igem.org/videos/embed/bd8a4fa2-aef2-4e08-b860-7c6eeeb8bd1a'
            :allowfullscreen='true'
            sandbox='allow-same-origin allow-scripts allow-popups allow-forms'/>
    <p style='margin-bottom: 15px'>Below are screenshots from <a href='https://video.igem.org/w/ppveuehoduZSbWimGE2jSW' target='_blank'>our promotion video</a>.</p>
    <p class='english-text'>In a bustling city, we rely on navigation systems to ensure smooth journeys.</p>
    <p class='chinese-text'>在繁忙的城市中，我们依赖导航系统确保每一次出行的顺畅。</p>
    <p class='english-text'>Similarly, in the world of cells, yeast function like a complex city.</p>
    <p class='chinese-text'>同样，在细胞的世界里，酵母菌像一座复杂的城市。</p>
    <p class='english-text'>As a core of bio-manufacturing, yeast can efficiently produce varieties of bioproducts such as fuels and medicines, discovering the key to efficient production becomes increasingly significant.</p>
    <p class='chinese-text'>作为生物制造的核心，酵母菌能够高效生产出燃料、药物等各种生物产品。探索高效生产的秘方变得尤为重要。</p>
    <img src='https://static.igem.wiki/teams/5503/design-materials/screenshot1.webp' alt='Screenshot1' style='margin-bottom: 38px'>
    <p class='english-text'>However, without proper guidance, proteins are like commuters lost in a city. They don't know how to reach their most efficient working positions. Metabolic pathways may become chaotic, with bioproducts accumulating and interfering with each other, leading to a decline in production efficiency.</p>
    <p class='chinese-text'>然而，没有导航的蛋白质就像迷失在城市中的车辆。它们无法到达最高效的工作位置，代谢途径可能会变得混乱，副产物积累，通路之间的副产物相互干扰，最终导致生产效率下降。</p>
    <img src='https://static.igem.wiki/teams/5503/design-materials/screenshot2.webp' alt='Screenshot2' style='margin-bottom: 38px'>
    <p class='english-text'>To address this issue, we have developed Atlas.Y, a brand new molecular tagging design software. It customizes a delicate navigation system for each protein, ensuring that they can precisely reach their target compartments, thereby making metabolic activities more efficient.</p>
    <p class='chinese-text'>为了解决这个问题，我们开发了一款全新的分子标签设计软件——Atlas.Y。它为每一个蛋白质量身定制专属的导航系统，确保它们能够精准到达目标区室，让代谢活动更加高效。</p>
    <p class='english-text'>The platform selects proper localization tags and linkers based on users' requirements and calculates functional and stability scores for all fusion protein combinations, providing users with the best recommendation.</p>
    <p class='chinese-text'>平台根据用户需求选择合适的定位分子标签和 linker，并计算所有融合蛋白组合的功能评分和稳定性评分，给予用户最佳的组合推荐。</p>
    <img src='https://static.igem.wiki/teams/5503/design-materials/screenshot3.webp' alt='Screenshot3' style='margin-bottom: 38px'>
    <p class='english-text'>Additionally, the platform offers directed evolution and dynamic localization design.</p>
    <p class='chinese-text'>此外，平台还提供融合蛋白定向进化功能和动态定位设计。</p>
    <p class='english-text'>We obtained hundreds of localization tags and thousands of linkers by literature method and segmentation method. After generating fusion proteins, we evaluate their function and stability using a combination of large-language models, CAD scoring, and the Rosetta method.</p>
    <p class='chinese-text'>我们通过文献方法与切割方法获得百条定位标签序列，千条 linker 序列。生成融合蛋白后，结合使用蛋白质大语言模型，CAD 评分和 Rosetta 方法评估融合蛋白的功能及稳定性。</p>
    <img src='https://static.igem.wiki/teams/5503/design-materials/screenshot5.webp' alt='Screenshot5' style='margin-bottom: 38px'>
    <p class='english-text'>Additionally, we utilize an advanced large model to generate variants, aiming to further enhance their functionality.</p>
    <p class='chinese-text'>此外，我们生成变体蛋白并通过大模型评估蛋白稳定性，以期加强蛋白功能。</p>
    <p class='english-text'>We also offer users dynamic localization options, integrating photosensitive elements to achieve precise spatiotemporal control.</p>
    <p class='chinese-text'>我们还向用户提供了动态定位方案，结合使用光敏元件，用户可以实现更精密的时空调控。</p>
    <img src='https://static.igem.wiki/teams/5503/design-materials/screenshot4.webp' alt='Screenshot4' style='margin-bottom: 38px'>
    <p class='english-text'>Atlas.Y ensures every protein stays on course within the "city", providing an effective tour for synthetic biology, bio-manufacturing, and scientific research.</p>
    <p class='chinese-text'>Atlas.Y 让每一个蛋白在城市中不会迷路，为合成生物学和生物制造领域提供了有效的工具，为未来的科学研究提供新的工具和方法。</p>
    <img src='https://static.igem.wiki/teams/5503/design-materials/screenshot6.webp' alt='Screenshot6' style='margin-bottom: 38px'>
    <img src='https://static.igem.wiki/teams/5503/design-materials/screenshot7.webp' alt='Screenshot7' style='margin-bottom: 38px'>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
</script>

<style scoped>
@import '@/styles/style.css';

.english-text {
  padding-top: 10px;
}

.chinese-text {
  padding-bottom: 10px;
}

img {
  width: 900px;
}
</style>
