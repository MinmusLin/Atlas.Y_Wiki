<template>
  <TextContent title='PROOF OF CONCEPT'
               :title-list="['Overview', 'Dry Lab Validation', 'Wet Lab Validation']">
    <h1 id='Overview'>Overview</h1>
    <p>Since the primary task of Atlas.Y is to design fusion proteins with localization functions based on user
      requirements, these fusion proteins lack ground truth labels, making it difficult to validate the model solely
      through dry lab methods. Considering this, we decided to perform initial validation using dry lab methods and
      further validation using wet lab methods. The specific approach is as follows:</p>
    <ul>
      <li><span class='bold'>Dry Lab</span>: Utilize the DeepLoc model to assist in validation. By comparing the
        localization performance of proteins before and after being designed by Atlas.Y, we evaluate whether their
        localization ability to the target organelle has improved, thereby making a preliminary assessment of the
        design's effectiveness.
      </li>
      <li><span class='bold'>Wet Lab</span>: Use EGFP (enhanced green fluorescent protein) as the target protein, input
        it into Atlas.Y for design, and generate a fusion protein that can localize to the nucleus of Pichia pastoris.
        Then, observe the location of the green fluorescence under a laser confocal microscope to further refine the
        experimental validation of the model's predictions.
      </li>
    </ul>

    <h1 id='Dry Lab Validation'>Dry Lab Validation</h1>
    <p>During the validation phase, we randomly selected <span class='bold'>200</span> natural yeast proteins to create
      a diverse simulated dataset, representing potential user inputs. The purpose of random selection was to minimize
      systematic bias, ensuring the selected proteins accurately reflected the variety of proteins users might input.
      Each protein was modified by attaching specific linkers and signal peptides, followed by predictions using
      <span class='bold'>DeepLoc 2.0</span> to assess whether there was a statistically significant improvement in the
      likelihood of localization at the intended target sites.</p>
    <p>Given the complexity introduced by the exhaustive combinatorial analysis of all signal peptides and linkers for
      each protein, we began with a pilot study involving two proteins. The results indicated that variations in model
      predictions due to different linkers were minimal. Based on this finding, we selected two linkers—one rigid and
      one flexible—to significantly reduce the computational load without compromising the integrity of the
      analysis.</p>
    <p>The validation outcomes are summarized as follows:</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/proofofconcept1-1.webp' alt='ProofOfConcept1'>
    <h5>Figure. Multiplying Factor Distribution for Different Subcellular Localization</h5>
    <p>Our findings provide strong evidence that the proposed methodology <span class='bold'>significantly improves
      </span> the likelihood of protein localization to designated target regions. The observed increase in localization
      efficiency, which exceeded expectations, aligns closely with our initial hypothesis. This substantial improvement
      highlights the robustness of our approach in accurately facilitating protein localization and confirms the
      effectiveness of integrating linkers and signal peptides. These results not only validate the theoretical
      foundation of our methodology but also emphasize its broader applicability in protein engineering and related
      fields.</p>
    <p>Initially, we aimed to filter out signal peptides with lower localization efficiency to streamline the database
      and reduce user wait times during model computations. However, after conducting a thorough statistical analysis,
      we discovered that signal peptide performance is <span class='bold'>highly context-dependent</span>. Some peptides
      may exhibit optimal localization efficiency depending on the specific protein. As a result, it would be
      scientifically unjustified to label any signal peptide as universally "inefficient." Therefore, we concluded that
      maintaining a comprehensive signal peptide database is crucial, and we decided against filtering out any signal
      peptides.</p>

    <h1 id='Wet Lab Validation'>Wet Lab Validation</h1>
    <p>We used the classic <span class='bold'>EGFP</span> (enhanced green fluorescent protein) as the target protein and
      designed an <span class='bold'>NLS</span> (nuclear localization sequence) signal peptide and a linker with Atlas.Y
      to enable its localization to the nucleus of Pichia pastoris cells, in order to validate the feasibility of our
      model.</p>
    <p>EGFP is a basic green fluorescent protein that was published in 1996 and is derived from the marine jellyfish
      Aequorea victoria. Pichia pastoris is a type of methylotrophic yeast that can utilize methanol as its sole carbon
      source. The <span class='bold'>pPICZ A</span> vector is one of the most commonly used vectors for expressing and
      secreting recombinant proteins in Pichia pastoris; the Zeocin resistance gene is used for antibiotic selection in
      Pichia pastoris; the AOX1 promoter is used for tightly regulated methanol-induced expression of the relevant
      genes; and the C-terminal peptide tag with polyhistidine (6xHis) is used for the detection and purification of the
      recombinant fusion protein.DAPI is a fluorescent dye that strongly binds to DNA and can pass through intact cell
      membranes, making it commonly used for staining the nuclei of living cells, where it can color the nuclei blue.
    </p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/proofofconcept2-1.webp' alt='ProofOfConcept2'>
    <h5>Figure. EGFP-NLS in pPICZ A</h5>
    <p>We amplified the EGFP gene using PCR and inserted EGFP into the EcoRI and XhoI restriction sites of pPICZ A using
      a double digestion method. The plasmid was linearized with SacI and transferred into X-33 Pichia pastoris,
      inducing expression with methanol. We used DAPI to label the cell nuclei, and then observed the green fluorescence
      of EGFP in the Pichia pastoris strain under a laser confocal microscope to determine the subcellular localization
      of EGFP.Subsequently, the EGFP without NLS will be used as a control group to assess the efficiency of the ATLAS.Y
      design.</p>
    <p>Our plasmid design procedure is as follows:</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/proofofconcept3-1.webp' alt='ProofOfConcept3'>
    <h5>Figure. Plasmid Design Procedure</h5>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
</script>

<style scoped>
@import '@/styles/style.css';

img {
  width: 700px;
}
</style>
