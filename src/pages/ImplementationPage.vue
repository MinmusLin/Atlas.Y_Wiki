<template>
  <TextContent title='IMPLEMENTATION'
               :title-list="['Product Introduction', 'How to Use', 'Proposed End Users']">
    <h1 id='Product Introduction'>Product Introduction</h1>
    <p>Atlas.Y aims to assist users in designing the subcellular localization of proteins in yeast. The software
      primarily focuses on the <span class='bold'>Basic version</span>, providing users with functionalities for
      localizing fusion proteins. Additionally, Atlas.Y offers <span class='bold'>several auxiliary algorithms</span> to
      enhance the overall user experience.</p>
    <blockquote>
      <span class='bold'>Additional Auxiliary Algorithms</span>
      <ul>
        <li>Site-Specific CAD Scoring System</li>
        <li>Protein Localization Prediction System</li>
        <li>Optimized Protein Evolution Localization System</li>
        <li>TemporalDynamic Localization Design System</li>
      </ul>
    </blockquote>

    <h1 id='How to Use'>How to Use</h1>
    <p>Upon entering the homepage, you can switch between the Basic and Dynamic versions using the left menu bar. You
      can also access the Store, Documentation, About, and Support sections for a deeper understanding of Atlas.Y and to
      provide feedback.</p>
    <p>In the workspace, you can click "START" to create a new query or select a historical entry to quickly restore
      previous searches.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation1-1.webp' alt='Implementation1'>
    <p>After clicking "START", you can upload the <span class='bold'>.fasta</span> and <span class='bold'>.pdb</span>
      files of the protein you want to edit for localization. Next, you can select your desired target localization on
      the page; if you have questions about localization abbreviations, you can refer to the demonstration animation in
      the left legend. Finally, you can choose the properties of the linker you want (for guidance on selecting the
      appropriate linker, please refer to the <a href='http://162.62.213.36/user-guide' target='_blank'>user guide</a>).
    </p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation2-1.webp' alt='Implementation2'>
    <p>After initiating the query, the software will generate and match localization fusion proteins for the user,
      displaying them based on stability scores. Users can select specific entries according to their preferences.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation3-1.webp' alt='Implementation3'>
    <p>On the details page of a specific entry, users can view detailed information about the original protein sequence,
      signal sequence, linker sequence, and fusion protein sequence. The left side of the page will display the 3D
      structure of the fusion protein, allowing users to drag and rotate it for viewing. Afterwards, users can click the
      buttons at the bottom of the page to proceed to the next analysis step (functional analysis, stability analysis,
      sequence optimization).</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation4-1.webp' alt='Implementation4'>
    <p>Free version users can access an overall functional analysis for free. The software will return a total CAD-score
      and provide feedback on functional results. Additionally, if users are interested in specific sites of the protein
      (such as the active site of an enzyme), they can opt for the advanced version of the software, which includes
      <span class='bold'>Site-Specific CAD Scoring System</span>.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation5-1.webp' alt='Implementation5'>
    <p>In the Site-Specific CAD Scoring System, users can view the functional scores of their selected core sites. Users
      have two methods for selecting a site: <span class='bold'>1. Enter the site number; 2. Click to select the site on
      the visual map on the left.</span> After selecting the corresponding site, the software will return the CAD A
      Score and CAD S Score for that site. The <span class='bold'>CAD A Score</span> is more suitable for understanding
      the overall structural stability and global adjustments of the protein, while the <span class='bold'>CAD S Score
      </span> focuses more on local interactions in specific functional regions (such as active sites), making it more
      relevant for users interested in specific sites.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation6-1.webp' alt='Implementation6'>
    <p>In the stability scoring feature, users can view the overall stability score of the fusion protein, as well as
      the contribution of specific forces to the protein's stability.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation7-1.webp' alt='Implementation7'>
    <p>To improve the success rate of fusion protein localization, users can opt for the sequence optimization feature
      to enhance localization capabilities. The software will calculate and recommend variant proteins, generating
      multiple options for users to choose from. After selecting a variant, users will be able to view the protein
      sequence along with its corresponding functional and stability scores.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation8-1.webp' alt='Implementation8'>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation9-1.webp' alt='Implementation9'>
    <p>In addition, users can switch to the <span class='bold'>dynamic version</span> in the menu bar. In the
      <span class='bold'>Temporal Dynamic Localization Design System</span>, users can select pre-defined optogenetic
      conditions, supplemented with matching requirements consistent with the basic version. The software will then
      generate multiple matches for the user, with the preliminary steps being the same as in the basic version.
      Finally, the system will output a design report tailored to the user's needs, providing detailed information on
      the recommended optogenetic pair and the complete sequence information of each component.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation10-1.webp' alt='Implementation10'>
    <p>For further information on how to use Atlas.Y, please refer to the <span class='bold'>User Guide</span> below. It
      provides detailed instructions on website pages, user journey, all core features, from signal peptide selection to
      advanced localization design systems, as well as support and feedback channels to ensure a smooth user experience.
    </p>
    <iframe src='https://static.igem.wiki/teams/5503/userguide.pdf#view=FitH'
            style='border: none'
            width='905px'
            height='905px'/>

    <h1 id='Proposed End Users'>Proposed End Users</h1>
    <ul>
      <li><span class='bold'>Business Individual</span>: This group consists of individual researchers, freelancers,
        small startups, and consulting firms. They typically seek affordable tools and services to support specific
        projects or small-scale business activities.
      </li>
      <li><span class='bold'>Academic Users</span>: Includes universities, research institutions, researchers, and
        laboratories. These users focus on high-quality research tools and often require long-term capabilities for data
        processing and algorithm optimization.
      </li>
      <li><span class='bold'>Corporate / Enterprise Users</span>: Encompassing mid-sized and large companies, as well as
        multinational corporations, these users have more complex demands and larger budgets, often needing customized
        solutions with advanced features.
      </li>
    </ul>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/implementation11-1.webp' alt='Implementation11'>
    <p style='text-align: center'>(See
      <a href='https://2024.igem.wiki/tongji-software/entrepreneurship' target='_blank' style='cursor: pointer'>
      Entrepreneurship</a> for more detailed information of users' profiles)</p>
  </TextContent>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'
import TextContent from '@/components/TextContent.vue'

const router = useRouter()
</script>

<style scoped>
@import '@/styles/style.css';

img {
  width: 700px;
}
</style>
