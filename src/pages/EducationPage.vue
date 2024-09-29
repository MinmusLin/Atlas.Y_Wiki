<template>
  <TextContent title='EDUCATION'
               :title-list="['Overview', 'Course Design Overview', 'Project Expansion and Future Plans']">
    <h1 id='Overview'>Overview</h1>
    <p>Due to the challenges we faced in collecting initial questionnaires, we realized that public awareness of
      synthetic biology is relatively limited, which highlighted the importance of educational outreach.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/education1-1.webp' alt='Education1'>
    <p>Recognizing this, we launched a half year-long public awareness campaign aimed at enhancing public understanding
      of synthetic biology and subcellular localization through educational and interactive approaches. With the support
      of Juzhen Education and Baijiangjun Culture Media, we covered <span class='bold'>6</span> schools in
      <span class='bold'>Shanghai</span> and <span class='bold'>multiple remote rural areas</span> over one semester. In
      Shanghai, <span class='bold'>1,520</span> students participated in <span class='bold'>870</span> hours of lessons,
      with <span class='bold'>47</span> volunteers and teachers involved.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/education2-1.webp' alt='Education2'>
    <p>Moreover, to ensure educational equity, we extended our synthetic biology education efforts to rural areas,
      covering an area of 2,665.732 square kilometers, involving a total of 2,825 children. We designed interactive
      games for the curriculum, such as "Gene Magician and Recipes," "Bio Repairmen," and "Molecular Postman," to boost
      student engagement and understanding.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/education3-1.webp' alt='Education3'>
    <p>As part of the project's expansion and future plans, we will continue to promote synthetic biology education and
      aim to broaden our reach, helping more students access this cutting-edge science.</p>

    <h1 id='Course Design Overview'>Course Design Overview</h1>
    <h3>Synthetic Biology</h3>
    <div class='synthetic-biology-container'>
      <div class='image-grid'>
        <img v-for='(img, index) in SyntheticBiologyImages'
             :src='img.src'
             :alt='img.alt'
             @mouseover='displaySyntheticBiologyContent(index)' :key='index'/>
      </div>
      <div class='text-content1'>
        <p v-html='selectedSyntheticBiologyContent'/>
      </div>
    </div>
    <h3>Subcellular Localization</h3>
    <div class='subcellular-localization-container'>
      <div class='image-grid'>
        <img v-for='(img, index) in SubcellularLocalizationImages'
             :src='img.src'
             :alt='img.alt'
             @mouseover='displaySubcellularLocalizationContent(index)' :key='index'/>
      </div>
      <div class='text-content2'>
        <p v-html='selectedSubcellularLocalizationContent'/>
      </div>
    </div>

    <h1 id='Project Expansion and Future Plans'>Project Expansion and Future Plans</h1>
    <p>With the successful implementation of this project in both Shanghai and rural areas, we have observed the
      positive impact of synthetic biology and subcellular localization education on students. Engaging 1,520 students
      in Shanghai and 2,825 children in rural regions, we have achieved extensive educational outreach. Moving forward,
      we plan to expand the project further, bringing scientific education to more regions and developing a broader
      range of curriculum content tailored to different age groups.</p>
    <h3>Future Plans</h3>
    <ol>
      <li><span class='bold'>Expanding Coverage</span></li>
      <!--suppress HtmlUnknownTag-->
      <ul>
        <li>We aim to promote the education of synthetic biology and subcellular localization in more urban and rural
          areas, especially extending to remote regions with limited educational resources.
        </li>
        <li>Strengthen international exchange and cooperation to introduce the education model of synthetic biology to
          other countries, particularly along the Belt and Road Initiative.
        </li>
      </ul>
      <li><span class='bold'>Enhancing Curriculum Diversity</span></li>
      <!--suppress HtmlUnknownTag-->
      <ul>
        <li>Develop customized educational programs suitable for different age groups and knowledge levels. We plan to
          introduce courses for elementary, middle, and high school students, covering content from basic to advanced
          biological concepts.
        </li>
        <li>Integrate the latest educational technologies by developing interactive learning platforms, incorporating
          virtual labs and gamified learning to help students grasp scientific concepts more vividly.
        </li>
      </ul>
      <li><span class='bold'>Strengthening Teaching Capacity and Educational Partnerships</span></li>
      <!--suppress HtmlUnknownTag-->
      <ul>
        <li>Expand collaboration with educational institutions and enterprises to train more teachers and volunteers
          with scientific outreach skills, thereby increasing the capacity for science education.
        </li>
        <li>Partner with universities and research institutes to integrate the latest biological science discoveries
          into the curriculum, ensuring that the educational content remains cutting-edge and comprehensive.
        </li>
      </ul>
      <li><span class='bold'>Social Impact and Sustainable Development</span></li>
      <!--suppress HtmlUnknownTag-->
      <ul>
        <li>Continue to promote educational equity by combining online and offline approaches to deliver science
          education to more remote regions and a larger number of students.
        </li>
        <li>Explore combining synthetic biology education with topics such as environmental protection and biodiversity
          within the framework of sustainable development, raising students' awareness and sense of responsibility for
          global health and environmental challenges.
        </li>
      </ul>
    </ol>
    <p>Through these expansion efforts and future plans, we hope to further advance the development of science
      education, cultivating a new generation of young talents who are passionate about biological sciences and equipped
      to tackle complex global challenges.</p>
  </TextContent>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import TextContent from '@/components/TextContent.vue'

const SyntheticBiologyImages = [
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education4-1.webp', alt: 'ProgrammingLife'},
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education5-1.webp', alt: 'BuildingBlocks'},
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education6-1.webp', alt: 'CustomBioStore'},
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education7-1.webp', alt: 'GeneticWizards'},
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education8-1.webp', alt: 'BiologicalRepairman'}
]

const SyntheticBiologyContentTexts = [
  `<h3 style='margin-top: -6px'>Programming Life: Introduction to DNA as the Code of Life</h3>
   <p style='margin: 10px 0'>This section introduces the concept of DNA as the fundamental code that controls all life.
   Just like a computer program, DNA contains instructions that tell cells how to function. Kids will learn how
   scientists can "reprogram" these instructions to modify or create new living things.</p>
   <p><span style='font-weight: bold'>Feedback:</span> Clear and relatable to modern digital-savvy learners, linking DNA
   to computer code helps simplify complex biological concepts.</p>`,

  `<h3 style='margin-top: -6px'>Building Blocks of Life: Basics of Gene Assembly</h3>
   <p style='margin: 10px 0'>Students will explore how genes are like building blocks that scientists can combine in
   various ways to create new functions in organisms. This section dives into the foundational process of gene assembly,
   where combining genes is like building with Lego blocks.</p>
   <p><span style='font-weight: bold'>Feedback:</span> The analogy with building blocks provides a concrete visual aid
   for young minds, making the concept of gene assembly much more accessible.</p>`,

  `<h3 style='margin-top: -6px'>Custom Bio Store: Designing Customized Organisms</h3>
   <p style='margin: 10px 0'>In this "store," learners will get to "shop" for biological parts and assemble their own
   organisms. This segment will emphasize how synthetic biology allows for designing specific traits in living beings,
   just like customizing a toy or gadget.</p>
   <p><span style='font-weight: bold'>Feedback:</span> Making it interactive and playful, this concept appeals to
   children's imagination, providing a hands-on experience to understand synthetic biology's applications.</p>`,

  `<h3 style='margin-top: -6px'>Genetic Wizards and Recipes: Exploring Genetic Modifications</h3>
   <p style='margin: 10px 0'>This fun segment turns learners into "Genetic Wizards", exploring how scientists mix
   different "ingredients" (genes) to create magical outcomes, like glowing plants or bacteria that eat oil spills.
   Students will learn about the magical world of genetic modifications through creative play.</p>
   <p><span style='font-weight: bold'>Feedback:</span> The use of magic-themed language adds an element of wonder and
   discovery, which is engaging for young audiences. It makes the scientific process feel exciting and adventurous.</p>`,

  `<h3 style='margin-top: -6px'>Biological Repairman: Using Synthetic Biology for Fixing Problems</h3>
   <p style='margin: 10px 0'>Here, learners discover how synthetic biology can be used to repair or improve organisms.
   Whether it's fixing genetic defects or enhancing natural abilities, the "Biological Repairman" is a metaphor for
   using synthetic biology to address biological issues.</p>
   <p><span style='font-weight: bold'>Feedback:</span> Framing scientists as repairmen helps students see the practical
   and problem-solving side of synthetic biology, grounding the concept in real-world applications.</p>`
]

const selectedSyntheticBiologyContent = ref(SyntheticBiologyContentTexts[0])

const displaySyntheticBiologyContent = (index: number) => {
  selectedSyntheticBiologyContent.value = SyntheticBiologyContentTexts[index]
}

const SubcellularLocalizationImages = [
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education9-1.webp', alt: 'ProgrammingLife'},
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education10-1.webp', alt: 'BuildingBlocks'},
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education11-1.webp', alt: 'CustomBioStore'},
  {src: 'https://static.igem.wiki/teams/5503/accompanying-images/education12-1.webp', alt: 'GeneticWizards'}
]

const SubcellularLocalizationContentTexts = [
  `<h3 style='margin-top: -6px'>Molecular Postman: The Process of Protein Delivery</h3>
   <p style='margin: 10px 0'>In this section, students will learn how proteins are delivered to the right places in the
   cell, just like a postman delivering packages to the correct addresses. Proper protein delivery is crucial for the
   cell to function properly.</p>
   <p><span style='font-weight: bold'>Feedback:</span> The postman analogy is simple, visual, and engaging, making the
   complex topic of protein targeting more relatable for children.</p>`,

  `<h3 style='margin-top: -6px'>Cellular Transportation System: The Internal Transport System of Cells</h3>
   <p style='margin: 10px 0'>Cells have an intricate transportation system that moves molecules, proteins, and other
   materials to different parts of the cell. This section explores how the cell's highways, like conveyor belts, help
   with the smooth transportation of cargo within the cell.</p>
   <p><span style='font-weight: bold'>Feedback:</span> The comparison to a transportation network makes this process
   tangible, offering children an easy-to-grasp way to understand cellular dynamics.</p>`,

  `<h3 style='margin-top: -6px'>Molecular Adventurer: Exploring Cellular Pathways</h3>
   <p style='margin: 10px 0'>This section presents proteins as adventurers navigating the pathways of the cell. They
   explore different routes to reach their destination, overcoming obstacles to complete their mission. Students will
   learn about the challenges and importance of protein pathways.</p>
   <p><span style='font-weight: bold'>Feedback:</span> Framing proteins as adventurers is fun and exciting, appealing
   to children's curiosity and sense of exploration while teaching cellular processes.</p>`,

  `<h3 style='margin-top: -6px'>Searching for the Secret Base: Discovering Organelles and Their Functions</h3>
   <p style='margin: 10px 0'>Students will go on a scavenger hunt inside the cell to discover "secret bases" – the
   organelles. Each organelle has a special function, like the nucleus being the control center. This playful concept
   helps children understand the different roles of cellular components.</p>
   <p><span style='font-weight: bold'>Feedback:</span> The secret base theme creates an engaging and exploratory
   environment for learning, turning cell biology into a fun quest for discovery.</p>`
]

const selectedSubcellularLocalizationContent = ref(SubcellularLocalizationContentTexts[0])

const displaySubcellularLocalizationContent = (index: number) => {
  selectedSubcellularLocalizationContent.value = SubcellularLocalizationContentTexts[index]
}
</script>

<style scoped>
@import '@/styles/style.css';

.image-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.image-grid img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  cursor: pointer;
  border: 0 solid;
  border-radius: 5px;
  box-shadow: 0 0 0 0;
  display: block;
  max-width: 100%;
  transition: transform 0.3s, filter 0.3s;
}

.image-grid img:hover {
  filter: brightness(120%);
}

.text-content1 {
  background-color: #EEF3FE;
  padding: 20px;
  border-radius: 20px;
  height: 300px;
  font-size: 20px;
  margin-bottom: 25px;
}

.text-content2 {
  background-color: #EEF3FE;
  padding: 20px;
  border-radius: 20px;
  height: 240px;
  font-size: 20px;
  margin-bottom: 25px;
}

.text-content h3 {
  margin-bottom: 20px;
}

.text-content p {
  color: #5D6164;
  line-height: 2;
}
</style>
