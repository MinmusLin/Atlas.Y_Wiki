<template>
  <TextContent title='MODEL'
               :title-list="['Structure Prediction Model', 'Function Assessment——CAD-score Model', 'Stability Assessment——Pyrosetta', 'Subcellular Localization Prediction Model', 'Protein Directed Evolution Model', 'References']">
    <h1 id='Structure Prediction Model'>Structure Prediction Model</h1>
    <p>In our project, a protein structure prediction model is essential for accurately generating fusion proteins' pdb
      files for subsequent stability and functional evaluations. After comparing various options, we selected
      <span class='bold'>ESMFold</span> for its exceptional speed, moderate computational resource requirements, and
      ability to handle large sequences without <span class='bold'>multiple sequence alignments (MSAs)</span>. These
      advantages make ESMFold the most efficient choice for our workflow, ensuring fast and reliable structural
      predictions.</p>
    <h5>Table. Comparison of protein structure prediction tools</h5>
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
      structure prediction models. ESMFold comprises two main modules: a folding module and a structure module. The
      folding module processes sequence features extracted from the language model using multi-head self-attention and
      other transformations. These features are then passed to the structure module, which applies invariant point
      attention mechanisms to predict 3D atomic coordinates of proteins. Unlike AlphaFold, ESMFold does
      <span class='bold'>not rely on MSAs</span>, which significantly speeds up its prediction process, making it faster
      without sacrificing accuracy, especially for shorter sequences.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/model1-1.webp' alt='Model1'>
    <h5>Figure. ESMFold model architecture</h5>
    <p>The <span class='bold'>training data</span> comes from two main sources: <span class='bold'>experimentally
      verified protein structures</span> from databases like PDB, and <span class='bold'>structural predictions</span>
      from models like AlphaFold2, which include pLDDT confidence scores. This combination of real experimental data and
      high-quality predictions helps the model maintain both speed and accuracy. Additionally, ESMFold is open-access,
      with its model and code available through <a href='https://github.com/facebookresearch/esm' target='_blank'>Meta
        AI's GitHub repository</a>, providing easy access for researchers and developers to integrate and expand upon.
    </p>
    <p>While configuring ESMFold, we adjusted <span class='bold'>CUDA</span>, <span class='bold'>PyTorch</span>, and
      other dependencies to ensure optimal performance and compatibility with our servers, achieving seamless
      integration with our computational environment.</p>

    <h1 id='Function Assessment——CAD-score Model'>Function Assessment——CAD-score Model</h1>
    <p>When designing fusion proteins that can localize to specific subcellular sites for users, one critical concern is
      <span class='bold'>minimizing</span> disruption and alteration to the native protein's function. This is essential
      to ensure that the intended function of the protein remains intact. Therefore, it is necessary to introduce a
      model that can evaluate the <span class='bold'>functional differences between the native protein and the fusion
      protein</span> after adding the localization signal. After extensive literature review, we have decided to use the
      <span class='bold'>CAD-score</span> as the metric to assess.</p>
    <p>The CAD (Contact Area Difference) score is based on the <span class='bold'>contact area</span> between protein
      residues and assesses the differences between the predicted model and the reference structure at both local and
      global levels.<sup>[2]</sup> The model operates on the following <span class='bold'>key assumptions</span>:</p>
    <ol>
      <li>The contact area of a protein reflects the <span class='bold'>interactions</span> between residues and the
        overall <span class='bold'>three-dimensional structure</span>. Minimal changes in the contact area indicate that
        critical interactions and structural conformations have not undergone significant alterations.
      </li>
      <li>A protein's function often relies on its specific <span class='bold'>three-dimensional</span> conformation and
        <span class='bold'>interaction</span> network. If the three-dimensional structures of the protein before and
        after fusion remain similar, it can be inferred that their <span class='bold'>functional states</span> have not
        undergone major changes.
      </li>
    </ol>
    <p>To assess protein function using the CAD score, we have developed a comprehensive scoring model, which involves
      the following steps:</p>
    <h4>Sequence Alignment</h4>
    <p>Since the protein sequences before and after fusion differ in length, proper alignment is necessary to ensure
      correct residue correspondence between the predicted structure and the reference structure, avoiding misalignment.
      To achieve this, we use the <span class='bold'>PairwiseAligner</span> tool from <span class='bold'>Biopython
      </span> for global sequence alignment. This step is critical for accurately evaluating the contact area difference
      between the two structures and prevents calculation errors due to mismatched residue positions.</p>
    <h4>Contact Area Calculation</h4>
    <p><span class='bold'>The Voronoi diagram</span><sup>[3]</sup> is a mathematical method that divides space into
      multiple cells, with each cell corresponding to an atom in the structure, representing the spatial region occupied
      by that atom. We input the coordinates of all atoms in the protein structure to generate the Voronoi diagram.</p>
    <p>After generating the Voronoi diagram, we use the <span class='bold'>convex hull algorithm</span> to compute the
      contact area of each residue. The convex hull algorithm determines the smallest convex polygon that contains the
      Voronoi region, thus defining the contact area for each residue.</p>
    <h4>Contact Area Difference Calculation</h4>
    <p>Once the contact areas for the residues in both the predicted and reference structures have been obtained, the
      differences between them can be calculated.</p>
    <p>For each residue in the predicted model (denoted as <span class='italic'>i</span> ), we identify the
      corresponding residue in the reference structure (denoted as <span class='italic'>j</span> ) and compute the
      contact area difference between this pair of residues. Let the contact area of the residue in the predicted
      structure be <span class='italic'>T(i,j)</span> and in the reference structure be <span class='italic'>
      M(i,j)</span>. The difference is expressed as:</p>
    <LatexRenderer formula='CAD(i,j)=∣T(i,j)−M(i,j)∣'/>
    <p>If a residue is missing in either the predicted model or the reference structure, or if no corresponding residue
      can be found due to sequence gaps, the contact area for that residue is set to <span class='bold'>zero</span>.
      This ensures that the scoring method can handle structural deficiencies.</p>
    <p>To prevent individual residue pairs with large contact area differences from disproportionately affecting the
      overall score, the CAD score is <span class='bold'>normalized</span>. We limit the maximum difference by computing
      the "bounded contact area difference" using the following formula:</p>
    <LatexRenderer formula='CADbounded(i,j)=min(CAD(i,j),T(i,j))'/>
    <h4>Global CAD Score Calculation</h4>
    <p>The global CAD score is used to evaluate the overall structural integrity of the protein model. It measures the
      overall similarity between the predicted structure and the reference structure by calculating the contact area
      differences for all residue pairs. The formula for this calculation is:</p>
    <LatexRenderer formula='CAD\text{-}score = 1 - \frac{\sum_{(i,j) \in G} CAD_{bounded}(i,j)}{\sum_{(i,j) \in G} T(i,j)}'/>
    <p><span class='italic'>G</span> represents the set of all residue pairs. A CAD-score close to <span class='bold'>
      1</span> indicates high <span class='bold'>similarity</span> between the predicted model and the reference
      structure, suggesting that the protein's structure and functionality have been well preserved after fusion. A
      CAD-score close to <span class='bold'>0</span> indicates significant <span class='bold'>differences</span> between
      the predicted model and the reference structure, implying that the fusion may result in a loss of protein function
      or structural integrity.</p>
    <h4>Local CAD Score Calculation</h4>
    <p>In addition to the global score, the CAD-score model also allows users to perform detailed evaluations of
      <span class='bold'>specific regions</span> of the protein. Local scoring helps to identify the accuracy of
      specific structural regions, particularly around functional domains or active sites. The local CAD score can be
      further subdivided into:</p>
    <ul>
      <li><span class='bold'>AA Score (All Atoms)</span>: This score calculates the contact area difference between all
        atoms of a designated central residue and all surrounding atoms. It reflects changes in the overall environment
        and interactions of the central residue with other parts of the protein.
      </li>
      <li><span class='bold'>AS Score (Atom-Sidechain)</span>: This score calculates the contact area difference between
        all atoms of the central residue and the side chains of surrounding residues. The AS score is used to assess
        interactions between residue side chains, which are crucial for protein function, especially around
        <span class='bold'>active sites</span>.
      </li>
    </ul>

    <h1 id='Stability Assessment——Pyrosetta'>Stability Assessment——Pyrosetta</h1>
    <p>In our project, we leverage <span class='bold'>PyRosetta</span>, a Python-based interface for the powerful
      Rosetta software suite, to calculate the <span class='bold'>stability</span> of fusion proteins. Stability is a
      critical factor in protein design, as it directly impacts the protein's structural integrity and functional
      performance.</p>
    <p>After designing the fusion protein, we use predictive modeling to generate its <span class='bold'>
      three-dimensional structure</span>. This step helps us understand the spatial arrangement of the native protein
      and the introduced localization signal within the fusion protein.</p>
    <p>Next, we use PyRosetta's scoring functions to evaluate the stability of the fusion protein. These scoring
      functions take multiple factors into account, including van der Waals forces, electrostatic interactions, and
      hydrogen bonds, to compute the overall energy of the fusion protein. In this context, a <span class='bold'>lower
      </span> energy score indicates a more <span class='bold'>stable</span> structure, suggesting that the fusion
      protein possesses better structural integrity, functional efficiency, and longer lifespan.</p>
    <p>By integrating PyRosetta into our model, we are able to provide users with reliable stability assessments,
      ensuring that the designed fusion proteins not only localize correctly but also maintain their structural
      stability.</p>
    <h5>Table. Rosetta score table diagram</h5>
    <table>
      <thead>
      <tr>
        <th style='width: 240px'>Item</th>
        <th style='width: 180px'>Score Value</th>
        <th>Explanation</th>
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
    <p>In the project, we utilize the pre-trained model from the paper "<span class='bold'>DeepLoc 2.0</span>:
      multi-label subcellular localization prediction using protein language models" by Vineet Thumuluri et al.
      (2022)<sup>[4]</sup> to advance the understanding of protein subcellular localization in yeast. Additionally,
      DeepLoc holds a
      crucial role as a validation tool for the project.</p>
    <p>The approach we employed serves as an excellent reference for others in the field. By combining pre-trained
      models with <span class='bold'>specialized yeast datasets</span>, we provide a robust example of how existing
      models can be adapted and fine-tuned for specific research needs. This methodology offers valuable learning
      opportunities and serves as a potential blueprint for similar projects that aim to integrate advanced modeling
      techniques with domain-specific data.</p>
    <p>Since the primary outcome of Atlas.Y is to generate fusion proteins that meet user localization requirements, and
      there are limited standard datasets available for validating fusion protein localization, it is challenging for us
      to use standard datasets to verify the model's accuracy. Therefore, we decided to adopt both dry lab and wet lab
      validation approaches. Given that DeepLoc has demonstrated its effectiveness in various application scenarios,
      such as accurately predicting the subcellular localization of proteins across different species and experimental
      conditions, as well as its ability to incorporate sequence-based and structural features for high-precision
      predictions, we chose DeepLoc as a supplementary validation tool. By using DeepLoc to assess the probability of a
      user's protein localizing to specific organelles before and after design, we can indirectly validate the
      effectiveness of Atlas.Y.</p>

    <h1 id='Protein Directed Evolution Model'>Protein Directed Evolution Model</h1>
    <p>Due to the complexity of protein sorting mechanisms within yeast cells, introducing <span class='bold'>spatial
      structural features</span> specific to organelle localization based on sequence characteristics can greatly
      enhance the efficiency of successful localization.</p>
    <p>For example, mitochondrial localization relies on specific signal sequences and the folding state of proteins.
      These signal sequences are usually located at the N-terminus of the protein and interact with receptors on the
      outer mitochondrial membrane, guiding the protein into the mitochondria. In addition, transmembrane protein
      complexes on the inner mitochondrial membrane recognize and assist in transporting unfolded precursor proteins to
      the correct subcellular location. By combining sequence and spatial structural information, predicting and
      designing more efficient mitochondrial targeting strategies can significantly improve the precision of protein
      sorting.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/model2-1.webp' alt='Model2'>
    <p>We have decided to construct <span class='bold'>a directed evolution model</span> to enhance protein localization
      efficiency, allowing users to evolve their custom fusion proteins to achieve higher localization performance.</p>
    <p>We have chosen to use a graph deep learning algorithm that does not rely on MSA, utilizing the
      <span class='bold'>ProtLGN</span> pre-trained model developed by the Liang Hong laboratory from SJTU<sup>[5]</sup>
      to embed proteins. Subsequently, we will apply transfer learning, fine-tuning the model using classical
      localization proteins from various organelles, making it possible to enhance the efficiency of specific organelle
      localization.</p>
    <p>In the pre-trained model, proteins are embedded in the form of a graph. Each amino acid is represented as a graph
      node, encompassing 21 biochemical properties (such as amino acid type, solvent-accessible surface area (SASA),
      B-factor, etc.) and 15 geometric attributes as node features. Additionally, the edges between nodes contain 93
      dimensions, representing the distances between amino acids. These features enable the model to learn both the
      sequence and spatial structural characteristics of proteins, allowing it to capture detailed information about the
      microenvironment surrounding each amino acid.</p>
    <p>During training, the model utilizes an equivariant graph neural network self-supervised pre-training framework.
      ProtLGN first conducts self-supervised pre-training on wild-type proteins, with the task being amino acid type
      denoising. Simply put, the model simulates random mutations in nature by injecting noise into the input features
      of wild-type proteins. Subsequently, the model's training task is to restore the most optimal wild-type protein,
      thus performing denoising and achieving self-supervised pre-training.</p>
    <p>To further enhance the subcellular localization performance of proteins, we fine-tuned the ProtLGN pre-trained
      model. We used the sequence files, PDB structures, and DMS mutation data of classic organelle proteins from yeast
      as the dataset for fine-tuning. This process employed a transfer learning strategy, leveraging the pre-learned
      ability of large models to extract protein features, thereby specifically improving the model's performance on the
      targeted task and increasing the prediction accuracy.</p>
    <p>We obtained yeast protein mutation data from the <a href='https://www.protabank.org' target='_blank'>ProtaBank
    </a> and <a href='https://www.mavedb.org' target='_blank'>MaveDB</a> databases, categorizing them by subcellular
      localization to ensure that the model fine-tuning covers as many subcellular locations as supported by the
      software. These mutation data provide crucial reference points for constructing and adjusting the directed
      evolution model. With these precise data, we can more effectively optimize model parameters, making the directed
      evolution of yeast proteins in specific subcellular locations more targeted.</p>
    <p>During data processing, we formatted mutation information into the form of "original amino acid→position→mutant
      amino acid" (e.g., "A23G"). Subsequently, we standardized functional data, such as catalytic efficiency. The
      processed data were ultimately organized into TSV files that meet the input requirements of the ProtLGN model,
      with one column for mutation information and another for fitness scores. Additionally, we obtained FASTA sequences
      from <a href='https://www.yeastgenome.org' target='_blank'>SGD</a> and PDB files from
      <a href='https://www.uniprot.org' target='_blank'>UniProt</a> to satisfy all the data type requirements of the
      model.</p>
    <p>By applying the concept of transfer learning, fine-tuning the ProtLGN pre-trained model with data from classic
      subcellular proteins can enable the model to acquire the ability to "improve the efficiency of protein
      localization to specific subcellular organelles" to a certain extent. This model makes the software's
      functionality and workflow more comprehensive and complete, providing users with a smoother and more convenient
      experience.</p>

    <h1 id='References'>References</h1>
    <ol>
      <li>Lin Z, Akin H, Rao R, Hie B, Zhu Z, Lu W, Smetanin N, Verkuil R, Kabeli O, Shmueli Y, Dos Santos Costa A,
        Fazel-Zarandi M, Sercu T, Candido S, Rives A. (2023) . Evolutionary-scale prediction of atomic-level protein
        structure with a language model.Science379,1123-1130.
      </li>
      <li>Olechnovič, K., Kulberkytė, E., & Venclovas, Č. (2013). CAD-score: A new contact area difference-based
        function for evaluation of protein structural models. Proteins, 81(1), 149-162.
      </li>
      <li>McConkey, B. J., Sobolev, V., & Edelman, M. (2002). Quantification of protein surfaces, volumes, and atom-atom
        contacts using a constrained Voronoi procedure. Bioinformatics, 18(10), 1365-1373.
      </li>
      <li>Thumuluri V, Almagro Armenteros JJ, Johansen AR, Nielsen H, Winther O. DeepLoc 2.0: multi-label subcellular
        localization prediction using protein language models. Nucleic Acids Res. 2022 Jul 5;50(W1):W228-W234.
      </li>
      <li>Zhou B, Zheng L, Wu B, Tan Y, Lv O, Yi K, Fan G, Hong L. Protein Engineering with Lightweight Graph Denoising
        Neural Networks. J Chem Inf Model. 2024 May 13;64(9):3650-3661.
      </li>
    </ol>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
import LatexRenderer from '@/components/LatexRenderer.vue'
</script>

<style scoped>
@import '@/styles/style.css';

img {
  width: 700px;
}
</style>
