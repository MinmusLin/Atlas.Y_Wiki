<template>
  <TextContent title='MODEL'
               :title-list="['Structure Prediction Model', 'Function Assessment——CAD-score Model',
               'Stability Assessment——Pyrosetta', 'Subcellular Localization Prediction Model',
               'Protein Directed Evolution Model', 'References']">
    <h1 id='Structure Prediction Model'>Structure Prediction Model</h1>
    <p>In our project, a protein structure prediction model is essential for accurately generating fusion proteins' pdb
      files for subsequent stability and functional evaluations. After comparing various options, we selected
      <span class='bold'>ESMFold</span> for its exceptional speed, moderate computational resource requirements, and
      ability to handle large sequences without MSAs. These advantages make ESMFold the most efficient choice for our
      workflow, ensuring fast and reliable structural predictions.</p>
    <h5>Table 1. Comparison of Protein Structure Prediction Tools</h5>
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
    <p>ESMFold is a protein structure prediction model built on the ESM-2 language model.<sup>[1]</sup> It leverages
      evolutionary information encoded within protein sequences and simplifies some of the complex processes in existing
      structure prediction models . ESMFold comprises two main modules: a folding module and a structure module. The
      folding module processes sequence features extracted from the language model using multi-head self-attention and
      other transformations. These features are then passed to the structure module, which applies invariant point
      attention mechanisms to predict 3D atomic coordinates of proteins. Unlike AlphaFold, ESMFold does <span
        class='bold'>
      not rely on multiple sequence alignments (MSAs),</span> which significantly speeds up its prediction process,
      making it faster without sacrificing accuracy, especially for shorter sequences.</p>

    <p>The <span class='bold'>training data</span> comes from two main sources: <span class='bold'>experimentally
      verified protein structures</span> from databases like PDB, and <span class='bold'>structural predictions</span>
      from models like AlphaFold2, which include pLDDT confidence scores. This combination of real experimental data and
      high-quality predictions helps the model maintain both speed and accuracy. Additionally, ESMFold is open-access,
      with its model and code available through <a href='https://github.com/facebookresearch/esm' target='_blank'>
        Meta AI’s GitHub repository</a>, providing easy access for researchers and developers to integrate and expand
      upon.</p>

    <p>While configuring ESMFold, we adjusted <span class='bold'>CUDA, PyTorch,</span> and other dependencies to ensure
      optimal performance and compatibility with our servers, achieving seamless integration with our computational
      environment.</p>

    <h1 id='Function Assessment——CAD-score Model'>Function Assessment——CAD-score Model</h1>
    <p>When designing fusion proteins that can localize to specific subcellular sites for users, one critical concern is
      <span class='bold'>minimizing</span> disruption and alteration to the native protein's function. This is essential
      to ensure that the intended function of the protein remains intact. Therefore, it is necessary to introduce a
      model that can evaluate the <span class='bold'>functional differences between the native protein and the fusion
      protein</span> after adding the localization signal. After extensive literature review, we have decided to use the
      <span class='bold'>CAD-score</span> as the metric to assess.</p>

    <p>The CAD (Contact Area Difference) score is based on the <span class='bold'>contact area</span> between protein
      residues and assesses the differences between the predicted model and the reference structure at both local and
      global levels.<sup>[2]</sup> The model operates on the following <span class='bold'>key assumptions:</span></p>

    <ol>
      <li>The contact area of a protein reflects the <span class='bold'>interactions</span> between residues and the
        overall <span class='bold'>three-dimensional structure</span>. Minimal changes in the contact area indicate
        that critical interactions and structural conformations have not undergone significant alterations.
      </li>
      <li>A protein's function often relies on its specific <span class='bold'>three-dimensional</span> conformation
        and <span class='bold'>interaction</span> network. If the three-dimensional structures of the protein before and
        after fusion remain similar, it can be inferred that their <span class='bold'>functional states</span> have not
        undergone major changes.
      </li>
    </ol>

    <p>To assess protein function using the CAD score, we have developed a comprehensive scoring model, which involves
      the following steps:</p>

    <h4>Sequence Alignment</h4>
    <p>Since the protein sequences before and after fusion differ in length, proper alignment is necessary to ensure
      correct residue correspondence between the predicted structure and the reference structure, avoiding misalignment.
      To achieve this, we use the <span class='bold'>PairwiseAligner</span> tool from <span
        class='bold'>Biopython</span>
      for global sequence alignment. This step is critical for accurately evaluating the contact area difference between
      the two structures and prevents calculation errors due to mismatched residue positions.</p>

    <h4>Contact Area Calculation</h4>
    <p><span class='bold'>The Voronoi diagram</span><sup>[3]</sup> is a mathematical method that divides space into
      multiple cells, with each cell corresponding to an atom in the structure, representing the spatial region
      occupied by that atom. We input the coordinates of all atoms in the protein structure to generate the Voronoi
      diagram.</p>
    <p>After generating the Voronoi diagram, we use the convex hull algorithm to compute the contact area of each
      residue. The <span class='bold'>convex hull algorithm</span> determines the smallest convex polygon that
      contains the Voronoi region, thus defining the contact area for each residue.</p>

    <h4>Contact Area Difference Calculation</h4>
    <p>Once the contact areas for the residues in both the predicted and reference structures have been obtained, the
      differences between them can be calculated. </p>
    <p>For each residue in the predicted model (denoted as i), we identify the corresponding residue in the reference
      structure (denoted as j) and compute the contact area difference between this pair of residues. Let the contact
      area of the residue in the predicted structure be T(i,j) and in the reference structure be M(i,j). The difference
      is expressed as:</p>
    <p>If a residue is missing in either the predicted model or the reference structure, or if no corresponding residue
      can be found due to sequence gaps, the contact area for that residue is set to <span class='bold'>zero</span>.
      This ensures that the scoring method can handle structural deficiencies.</p>
    <p>To prevent individual residue pairs with large contact area differences from disproportionately affecting the
      overall score, the CAD score is <span class='bold'>normalized</span>. We limit the maximum difference by computing
      the "bounded contact area difference" using the following formula:</p>

    <h4>Global CAD Score Calculation</h4>
    <p>The global CAD score is used to evaluate the overall structural integrity of the protein model. It measures the
      overall similarity between the predicted structure and the reference structure by calculating the contact area
      differences for all residue pairs. The formula for this calculation is:</p>
    <p>G represents the set of all residue pairs. A CAD-score close to <span class='bold'>1</span> indicates high
      <span class='bold'>similarity</span> between the predicted model and the reference structure, suggesting that the
      protein's structure and functionality have been well preserved after fusion. A CAD-score close to <span class='bold'>
      0</span> indicates significant <span class='bold'>differences</span> between the predicted model and the reference
      structure, implying that the fusion may result in a loss of protein function or structural integrity.</p>

    <h4>Local CAD Score Calculation</h4>
    <p>In addition to the global score, the CAD-score model also allows users to perform detailed evaluations of <span class='bold'>specific regions</span> of the protein. Local scoring helps to identify the accuracy of specific structural regions, particularly around functional domains or active sites. The local CAD score can be further subdivided into:</p>
    <ul>
      <li><span class='bold'>AA Score (All Atoms):</span> This score calculates the contact area difference between all
        atoms of a designated central residue and all surrounding atoms. It reflects changes in the overall environment
        and interactions of the central residue with other parts of the protein.
      </li>
      <li><span class='bold'>AS Score (Atom-Sidechain):</span> This score calculates the contact area difference between
        all atoms of the central residue and the side chains of surrounding residues. The AS score is used to assess
        interactions between residue side chains, which are crucial for protein function, especially around <span class='bold'>
        active sites.</span>
      </li>
    </ul>

    <h1 id='Stability Assessment——Pyrosetta'>Stability Assessment——Pyrosetta</h1>
    <p>In our project, we leverage <span class='bold'>PyRosetta</span>, a Python-based interface for the powerful
      Rosetta software suite, to calculate the <span class='bold'>stability</span> of fusion proteins. Stability is a
      critical factor in protein design, as it directly impacts the protein's structural integrity and functional
      performance.</p>
    <p>After designing the fusion protein, we use predictive modeling to generate its <span class='bold'>three-dimensional
      structure</span>. This step helps us understand the spatial arrangement of the native protein and the introduced
      localization signal within the fusion protein.</p>
    <p>Next, we use PyRosetta's scoring functions to evaluate the stability of the fusion protein. These scoring
      functions take multiple factors into account, including van der Waals forces, electrostatic interactions, and
      hydrogen bonds, to compute the overall energy of the fusion protein. In this context, a <span class='bold'>lower
      </span> energy score indicates a more <span class='bold'>stable</span> structure, suggesting that the fusion
      protein possesses better structural integrity, functional efficiency, and longer lifespan.</p>
    <p>By integrating PyRosetta into our model, we are able to provide users with reliable stability assessments,
      ensuring that the designed fusion proteins not only localize correctly but also maintain their structural
      stability.</p>

    <h5>Table 2. Rosetta Score Table Diagram</h5>
    <table>
      <thead>
      <tr>
        <th style='width: 165px'>Item</th>
        <th style='width: 165px'>Score Value</th>
        <th style='width: 300px'>Explanation</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Total Score</td>
        <td>-254.71</td>
        <td>Overall stability score</td>
      </tr>
      <tr>
        <td>fa_atr</td>
        <td>-2525.13</td>
        <td>Favorable atomic attraction</td>
      </tr>
      <tr>
        <td>fa_rep</td>
        <td>341.19</td>
        <td>Unfavorable atomic repulsion</td>
      </tr>
      <tr>
        <td>fa_sol</td>
        <td>1588.87</td>
        <td>Solvation energy</td>
      </tr>
      <tr>
        <td>fa_intra_rep</td>
        <td>4.18</td>
        <td>Intra-residue repulsion</td>
      </tr>
      <tr>
        <td>fa_intra_sol_xover4</td>
        <td>86.31</td>
        <td>Intra-residue solvation energy</td>
      </tr>
      <tr>
        <td>lk_ball_wtd</td>
        <td>-67.29</td>
        <td>Weighted Lennard-Jones potential</td>
      </tr>
      <tr>
        <td>fa_elec</td>
        <td>-585.4</td>
        <td>Electrostatic interactions</td>
      </tr>
      <tr>
        <td>pro_close</td>
        <td>72.07</td>
        <td>Proline closure energy</td>
      </tr>
      <tr>
        <td>hbond_sr_bb</td>
        <td>72.07</td>
        <td>Short-range backbone-backbone hydrogen bonding</td>
      </tr>
      <tr>
        <td>hbond_sr_bb</td>
        <td>-221.58</td>
        <td>Short-range backbone-backbone hydrogen bonding</td>
      </tr>
      <tr>
        <td>hbond_lr_bb</td>
        <td>-13.17</td>
        <td>Long-range backbone-backbone hydrogen bonding</td>
      </tr>
      <tr>
        <td>hbond_bb_sc</td>
        <td>-52.51</td>
        <td>Backbone-sidechain hydrogen bonding</td>
      </tr>
      <tr>
        <td>hbond_sc</td>
        <td>-33.23</td>
        <td>Sidechain-sidechain hydrogen bonding</td>
      </tr>
      <tr>
        <td>dslf_fa13</td>
        <td>0</td>
        <td>Disulfide bonds energy</td>
      </tr>
      <tr>
        <td>omega</td>
        <td>97.13</td>
        <td>Omega dihedral angle energy</td>
      </tr>
      <tr>
        <td>fa_dun</td>
        <td>899.52</td>
        <td>Dunbrack rotamer library energy</td>
      </tr>
      <tr>
        <td>p_aa_pp</td>
        <td>-39.28</td>
        <td>Probability of amino acid pairs in phi/psi angles</td>
      </tr>
      <tr>
        <td>yhh_planarity</td>
        <td>0</td>
        <td>Aromatic ring planarity energy</td>
      </tr>
      <tr>
        <td>ref</td>
        <td>147.9</td>
        <td>Reference energy</td>
      </tr>
      <tr>
        <td>rama_prepro</td>
        <td>45.72</td>
        <td>Ramachandran plot energy for pre-proline residues</td>
      </tr>
      </tbody>
    </table>

    <h1 id='Subcellular Localization Prediction Model'>Subcellular Localization Prediction Model</h1>

    <h1 id='Protein Directed Evolution Model'>Protein Directed Evolution Model</h1>

    <h1 id='References'>References</h1>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
</script>

<style scoped>
@import '@/styles/style.css';
</style>
