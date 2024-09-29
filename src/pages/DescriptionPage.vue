<template>
  <TextContent title='DESCRIPTION'
               :title-list="['Background', 'Atlas.Y', 'Our Vision', 'References']">
    <h1 id='Background'>Background</h1>
    <p>Over thousands of years of exploration, humanity has gradually shifted its focus from the macroscopic to the
      microscopic. In biology, the goal has always been to unravel life's mysteries, from organisms to cells and
      molecules. In recent years, rapid technological advancements have given new momentum to this vision.
      <span class='bold'>Super-resolution microscopy</span><sup>[1]</sup> has enabled scientists to surpass traditional
      microscope limits and observe intricate cellular details. <span class='bold'>Proteomics</span><sup>[2]</sup> and
      <span class='bold'>bioinformatics tools</span><sup>[3]</sup> offer fresh insights into decoding complex protein
      networks. These advances allow us to explore the <span class='bold'>subcellular world</span> with remarkable
      clarity.</p>
    <p>As research deepens, subcellular studies have come to the forefront, with subcellular localization becoming a key
      focus. Cells are highly organized systems where each molecule resides in specific subcellular regions to perform
      its function.</p>
    <p>If we can precisely control protein trafficking within cells, we unlock the ability to regulate cellular
      functions. This not only helps decode molecular networks but also enables targeted deployment of functional
      modules to different regions, allowing precise control of cell behavior. we could localize proteins to
      mitochondria to boost metabolism or direct enzymes to the endoplasmic reticulum for optimized synthesis. This
      control could create "factories" at various cellular sites, supporting parallel processes. Mastering this
      intracellular logistics could have profound implications not only for <span class='bold'>basic research</span> but
      also for revolutionary advances in <span class='bold'>biomanufacturing, drug delivery, and disease
      treatment</span>.<sup>[4][5]</sup></p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/description1-1.webp' alt='Description1'>
    <p>Targeting proteins to specific subcellular structures is complex, relying on multiple regulatory mechanisms.
      <span class='bold'>Signal sequences</span> and <span class='bold'>signal patches</span> act as "postal addresses"
      recognized by the cell's transport system, guiding proteins through secretion, transport, or membrane fusion to
      structures like the nucleus, mitochondria, endoplasmic reticulum, or lysosomes.<sup>[6]</sup></p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/description2-1.webp' alt='Description2'>
    <h5>Figure. Signal sequence and signal patch</h5>
    <p>Nevertheless, the design and functional execution of signal sequences and patches are far from straightforward.
      The intracellular environment is highly complex, and various signaling pathways and molecular interactions can
      interfere with proper protein transport and localization. Moreover, different subcellular structures have unique
      chemical properties and membrane characteristics. Ensuring that exogenous proteins <span class='bold'>remain
      stable and functional</span> in these diverse environments continues to present significant challenges.</p>

    <h1 id='Atlas.Y'>Atlas.Y</h1>
    <p>Based on these considerations, Tongji-Software has developed <span class='bold'>Atlas.Y: Advanced Targeting and
      Localization Assistance System for Yeast</span>, a specialized tool to assist in the subcellular localization of
      proteins within yeast.</p>
    <p>When users input their requirements into the software, we search our <span class='bold'>signal peptide</span> and
      <span class='bold'>linker</span> databases to find suitable components and engineer their target proteins into
      fusion proteins with specific localization signals.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/description3-1.webp' alt='Description3'>
    <h5>Figure. Atlas.Y: Atlas.Y website homepage</h5>
    <p>For the generated fusion proteins, we have a comprehensive evaluation system. First, we use the <span
      class='bold'>ESM-fold model</span> for 3D structure prediction, which is a lightweight, fast, and highly accurate
      prediction model. Then, we apply the <span class='bold'>Rosetta</span> model to calculate the stability of the
      fusion proteins, using this metric to rank them. Finally, we utilize the <span class='bold'>CAD-score</span> model
      to ensure functional consistency before and after fusion.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/description4-1.webp' alt='Description4'>
    <h5>Figure. Atlas.Y: Protein 3D structure display</h5>
    <p>To validate the localization efficiency of our designed fusion proteins, we use <span class='bold'>DeepLoc
      2.0</span> for assisted prediction. The results show that the majority of the fusion proteins designed using our
      method can efficiently target the desired locations.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/description5-1.webp' alt='Description5'>
    <p>Once successfully localized, fusion proteins face another challenge—whether they can remain stable in the new
      subcellular microenvironment. To address this, we employ a <span class='bold'>graph-based deep learning algorithm
      </span> that does not rely on MSA (multiple sequence alignment) for directed protein evolution. Through multiple
      rounds of training and fine-tuning, the model learns features that allow proteins to adapt to specific
      microenvironments.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/description6-1.webp' alt='Description6'>
    <p>Considering the high spatiotemporal resolution required in some research, users may need to dynamically adjust
      the localization of certain proteins. Therefore, we have further developed a dynamic version that utilizes
      <span class='bold'>optogenetics</span> to precisely control protein localization behavior in both
      <span class='bold'>time and space</span>.
    </p>
    <div class='btn-area'>
      <button class='btn' @click="router.push('/web-application')">
        Try
        <img src='https://static.igem.wiki/teams/5503/design-materials/defaultlogo.webp'
             alt='DefaultLogo'
             style='width: 120px; border: none; box-shadow: none; border-radius: 0; transform: translateX(5px)'>
      </button>
    </div>

    <h1 id='Our Vision'>Our Vision</h1>
    <p>In the future, we will continuously focus on <span class='bold'>user experience and feedback</span>, regularly
      collecting and analyzing <span class='bold'>user needs and insights from practical applications</span>. Based on
      this feedback, we will consistently optimize and iteratively improve the algorithm, ensuring that the software
      becomes more precise and efficient in addressing diverse user requirements. Additionally, we will refine the
      software's design and functionality to address specific scenarios and challenges raised by users, enhancing its
      adaptability and flexibility under different experimental conditions.</p>
    <p>We plan to commercialize Atlas.Y (see <a @click="router.push('/entrepreneurship')" style='cursor: pointer'>
      Entrepreneurship</a> for details) and establish a corresponding experimental platform. Atlas.Y will serve as our
      <span class='bold'>initial core product</span>, providing a stable revenue stream by addressing the market demand
      for protein subcellular localization. Building on this foundation, we will gradually expand our business scope,
      developing more innovative biotechnology solutions. Our ultimate goal is to grow the company into
      <span class='bold'>a multifaceted biotechnology enterprise</span> that integrates protein design, directed
      evolution, and experimental solutions. We will offer comprehensive solutions from protein design to directed
      evolution, and further introduce tools and products for experimental use, meeting the diverse needs of both
      research and industrial users. This approach will not only drive technological innovation but also provide
      efficient and convenient resources for laboratories and production, optimizing processes and improving overall
      efficiency.</p>

    <h1 id='References'>References</h1>
    <ol>
      <li>Zhang Y, Schroeder LK, Lessard MD, Kidd P, Chung J, Song Y, Benedetti L, Li Y, Ries J, Grimm JB, Lavis LD, De
        Camilli P, Rothman JE, Baddeley D, Bewersdorf J. Nanoscale subcellular architecture revealed by multicolor
        three-dimensional salvaged fluorescence imaging. Nat Methods. 2020 Feb;17(2):225-231.
      </li>
      <li>Lundberg E, Borner GHH. Spatial proteomics: a powerful discovery tool for cell biology. Nat Rev Mol Cell Biol.
        2019 May;20(5):285-302.
      </li>
      <li>Gillani M, Pollastri G. Protein subcellular localization prediction tools. Comput Struct Biotechnol J. 2024
        Apr 15;23:1796-1807.
      </li>
      <li>Oladimeji O, Akinyelu J, Singh M. Nanomedicines for Subcellular Targeting: The Mitochondrial Perspective. Curr
        Med Chem. 2020;27(33):5480-5509.
      </li>
      <li>Li J, Zou Q, Yuan L. A review from biological mapping to computation-based subcellular localization. Mol Ther
        Nucleic Acids. 2023 Apr 20;32:507-521. doi: 10.1016/j.omtn.2023.04.015. PMID: 37215152; PMCID: PMC10192651.
      </li>
      <li>Stroud RM, Walter P. Signal sequence recognition and protein targeting. Curr Opin Struct Biol. 1999
        Dec;9(6):754-9.
      </li>
    </ol>
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

.btn {
  width: 700px;
  height: 91px;
  padding: 0 254px;
  cursor: pointer;
  font-size: 36px;
  font-family: 'Futura Md Bt Bold', sans-serif;
  border-radius: 20px;
  box-shadow: 3px 5px 0 0 #5182F8;
  border: 4px solid #5182F8;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.1s, transform 0.1s;
  background-color: white;
  color: #5182F8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  box-shadow: none;
  transform: translateY(5px) translateX(3px);
}

.btn-area {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}
</style>
