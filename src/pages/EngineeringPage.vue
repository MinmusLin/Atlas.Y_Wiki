<template>
  <TextContent title='ENGINEERING'
               :title-list="['CYCLE I', 'CYCLE II', 'CYCLE III', 'CYCLE IV', 'CYCLE V']">
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/engineering1-1.webp'
         alt='Engineering1'
         style='width: 700px; margin-bottom: 50px'>
    <h1 id='CYCLE I'>CYCLE I</h1>
    <h3>Design</h3>
    <p>At the beginning of the project, our goal was to <span class='bold'>find effective linkers</span> for fusion
      proteins, planning to consult existing databases to obtain relevant information for building a linker library
      suitable for our needs.</p>
    <h3>Build</h3>
    <p>After extensive reading and screening of literature, we systematically explored various relevant fields and
      ultimately found <span class='bold'>The IBIVU LinkerDataBase</span>. This database provides a variety of linker
      characteristics and applications, serving as the foundation for our initial linker selection. Throughout this
      process, we not only relied on the information from the database but also <span class='bold'>integrated classic
      cases and experimental data</span> from the literature, identifying several effective linkers used in practical
      experiments, which laid a solid foundation for future research.</p>
    <h3>Test</h3>
    <p>During our research with the database, we discovered that its data was not updated in a timely manner, lacking
      the latest research results and relevant information. This hindered our ability to obtain current linker designs
      and optimization strategies, potentially causing us to miss more efficient or specific linkers. Furthermore, the
      field of biotechnology is rapidly advancing, with new experimental methods and data continuously emerging; relying
      on outdated information could affect our experimental results and the performance of the final product, thereby
      limiting innovation and success.</p>
    <h3>Learn</h3>
    <p>Based on these findings, we decided to change our approach and sought inspiration from previous iGEM projects.
      Ultimately, we found effective strategies in the <span class='bold'>2021 iGEM project from SYSU-Software</span>,
      cutting new linkers from our signal peptide dataset. The self-cutting of linkers not only proved to be highly
      operational but also maintained greater relevance and compatibility with our project, as both the signal peptides
      and linkers originated from the same dataset.</p>

    <h1 id='CYCLE II'>CYCLE II</h1>
    <h3>Design</h3>
    <p>At this stage, we aimed to deploy <span class='bold'>a protein structure prediction tool</span> to convert the
      fusion protein sequences into PDB files for subsequent functionality and stability evaluations. We initially chose
      AlphaFold2, as it is currently the top-performing model in the protein structure prediction field. AlphaFold2
      gained widespread recognition due to its outstanding performance in competitions like CASP14, especially when
      similar sequences exist in known protein databases, providing extremely high accuracy.</p>
    <h3>Build</h3>
    <p>To deploy AlphaFold, we followed the steps outlined in the official documentation on the
      <a href='https://github.com/deepmind/alphafold' target='_blank'>AlphaFold GitHub repository</a>:</p>
    <ol>
      <li><span class='bold'>Dependency Installation</span>: We first installed the Docker engine on the server and
        added NVIDIA Container Toolkit for GPU acceleration as needed. Next, we navigated to the AlphaFold project
        directory and installed the required Python dependencies.
      </li>
      <li><span class='bold'>Data Download</span>: Using the provided script, we downloaded the necessary genetic
        databases (including UniProt, PDB, etc.) and model parameters, ensuring sufficient storage space for the total
        data size, which is around 2.62TB.
      </li>
      <li><span class='bold'>Docker Image Build</span>: After downloading, we built the AlphaFold Docker image.</li>
      <li><span class='bold'>Running AlphaFold Predictions</span>: With the FASTA format protein sequence file ready, we
        used the Docker container to run AlphaFold predictions, specifying the required model settings and database
        paths.
      </li>
    </ol>
    <h3>Test</h3>
    <p>During our actual tests, we found that while AlphaFold2 delivers high accuracy in structural predictions, its
      inference process was too time-consuming. The main bottleneck was the <span class='bold'>generation of MSA</span>
      (Multiple Sequence Alignment). AlphaFold2 relies on extracting many relevant sequences from databases and
      performing multiple sequence alignments, which is a <span class='bold'>time-consuming</span> process, often taking
      anywhere from minutes to hours, especially for longer sequences. This resulted in longer turnaround times and did
      not meet our needs for fast feedback, ultimately diminishing the user experience.</p>
    <h3>Learn</h3>
    <p>To improve the prediction speed while maintaining reasonable accuracy, we reviewed a wide range of literature and
      searched for alternative models. We eventually chose <span class='bold'>ESMFold</span>, a model that does not rely
      on MSA. ESMFold uses a protein language model to predict structures directly from a single protein sequence,
      significantly speeding up predictions while sacrificing some accuracy. According to Zeming Lin et al. (2023), in
      their timing analysis, "We evaluate the speed of the model by testing sequences of varying length on a single
      NVIDIA V100 GPU. ESMFold makes a prediction on a protein with 384 residues in 14.2 seconds, 6x faster than a
      single AlphaFold2 model." This iteration made us realize that <span class='bold'>balancing prediction accuracy and
      speed</span> is crucial for enhancing user experience, and selecting the right model is essential for achieving
      that balance.
    </p>

    <h1 id='CYCLE III'>CYCLE III</h1>
    <h3>Design</h3>
    <p>In the second iteration, we successfully deployed the ESMFold model, significantly improving prediction speed.
      However, during actual use, we found that each time we performed a protein prediction, the model loading time was
      too long. It took 40-50 seconds to load the model for each FASTA file, significantly degrading the user
      experience. To address this issue, we designed a caching mechanism to reduce the frequency of model loading and
      shorten response times, ensuring fast responses in large-scale application scenarios.</p>
    <h3>Build</h3>
    <p>To address the issue of slow model loading, we introduced a caching mechanism aimed at reducing redundant model
      loads. By storing the model in memory after it is loaded, we can avoid reloading the model file for every request,
      significantly improving response speed. The caching mechanism not only reduces system resource consumption but
      also enhances overall processing efficiency.</p>
    <p>For the API interface, we used the ASP.NET Core framework to provide functionality for handling prediction
      requests. The prediction requests will check the in-memory cache for a pre-loaded model, and if the model does not
      exist, it will be automatically loaded and cached.</p>
    <p>Additionally, we containerized the ASP.NET Core API service using Docker to ensure consistent service operation
      across different environments. With this design, we achieved an efficient and stable model prediction service.</p>
    <h3>Test</h3>
    <p>During testing, we conducted continuous predictions on multiple FASTA files to validate the performance
      improvements brought by the new caching mechanism. The results showed that the model loading time, which
      previously took 40-50 seconds, was reduced to less than 20 seconds through caching, significantly reducing user
      wait times.</p>
    <h3>Learn</h3>
    <p>Through this iteration, we learned that the model's response speed depends not only on the efficiency of the
      prediction itself but also on the <span class='bold'>system architecture</span>. The introduction of a caching
      mechanism significantly reduced the model loading time, greatly enhancing overall system performance.
      Additionally, the integration of ASP.NET Core and Docker provides flexibility and scalability, making the system
      easier to deploy across different server environments. This optimization greatly improved the user experience and
      laid the foundation for future large-scale applications.</p>

    <h1 id='CYCLE IV'>CYCLE IV</h1>
    <h3>Design</h3>
    <p>In earlier iterations, we used the <span class='bold'>CAD-score</span> as the primary metric to evaluate
      functional changes in proteins before and after fusion. This involved calculating the changes in contact areas
      between residues across the entire protein. However, during internal testing, users frequently focused on
      modifying key enzymes and indicated that their main concern was changes in <span class='bold'>specific domains
      </span>, rather than the overall structure. In response, we introduced localized CAD-score calculations, allowing
      users to assess changes in specific regions of the protein. To offer more flexibility, we also enabled users to
      customize the selection of these regions based on their needs.</p>
    <h3>Build</h3>
    <p>We use the <span class='bold'>NGL viewer</span> to visualize the 3D structure of proteins based on PDB files and
      have integrated interactive functionality for users. When a user clicks on a specific residue in the 3D model and
      defines a radius around that residue, our software automatically captures the residue's index and other relevant
      information. It then calculates the local CAD-score for the selected region, helping users make informed
      decisions.</p>
    <h3>Test</h3>
    <p>After several iterations, the platform entered a new round of internal testing. Based on surveys and feedback,
      users found the local CAD-score feature to be both convenient and practical. With just a few clicks through the
      interactive visualization, users can easily access the A-A and A-S scores for key residues, helping them assess
      whether critical performance traits relevant to their research or production have changed.</p>
    <h3>Learn</h3>
    <p>In software development, iterative development is a common approach that aims to optimize a product through
      repeated cycles of development, testing, and refinement, continuously adapting to user needs. In this iteration,
      unlike previous academic research, we focused more on addressing real user experience issues, marking a shift in
      our student mindset. The cycle of <span class='bold'>testing, feedback, adjustment, and re-testing</span> has
      become a core part of our development process, significantly enhancing the software's practicality and
      user-friendliness. We will continue to uphold this iterative mindset in future development.</p>

    <h1 id='CYCLE V'>CYCLE V</h1>
    <h3>Design</h3>
    <p>After achieving the preliminary design of protein subcellular localization, we considered the complex protein
      sorting mechanisms in yeast. The localization of many proteins depends not only on signal sequences but also on
      their folding states and microenvironments. Simply relying on the connection of signal sequences may not ensure
      accurate protein subcellular localization. However, our current algorithms do not take <span class='bold'>spatial
      structural features</span> into account, limiting their applicability in complex environments. Therefore, we are
      considering using directed evolution methods to improve the localization efficiency of fusion proteins.</p>
    <h3>Build</h3>
    <p>We aim to use an algorithm that does not rely on MSA and takes into account the spatial structural
      characteristics of proteins. We chose <span class='bold'>ProtLGN</span>, a model based on graph deep learning that
      focuses on the spatial structure and microenvironment of proteins. We used ProtLGN for zero-shot prediction and
      fine-tuned prediction, hoping to assist users in improving the stability and localization efficiency of their
      fusion proteins.</p>
    <p>We plan to select classic proteins from various organelles as fine-tuning data, hoping that the model can extract
      the spatial characteristics unique to each subcellular localization protein, thereby helping us enhance the
      localization efficiency of fusion proteins.</p>
    <h3>Test</h3>
    <p>The zero-shot predictions made by ProtLGN provide a foundational level of stability for fusion proteins, offering
      users a basic level of assurance for their designs. However, the fine-tuning process requires an extensive and
      well-curated dataset that includes .fasta sequence data, .pdb structural data, and <span class='bold'>DMS</span>
      (Deep Mutational Scanning) data. DMS data is crucial because it uses high-throughput sequencing to score the
      functional properties of all relevant protein mutants, revealing correlations between sequence and function.</p>
    <p>Despite the power of DMS data, conducting subcellular localization-related experiments to generate such data is
      relatively <span class='bold'>rare</span>, and acquiring DMS data for every target organelle protein is
      challenging. Fine-tuning a model across 10 different organelles would be impractical due to resource constraints.
      As a result, we have opted to focus on a few organelles with distinct features for fine-tuning and categorize
      similarly localized organelles together (e.g., different membrane-bound organelles). This approach not only
      reduces the overall workload but also allows us to expand the amount of fine-tuning data in a meaningful way.</p>
    <p>By refining the model in this manner, we aim to strike a balance between specificity and efficiency, ensuring the
      fine-tuned ProtLGN model can offer improved predictions while managing data limitations effectively. This approach
      should result in better localization performance and stability for user-designed fusion proteins across various
      cellular environments.</p>
    <h3>Learn</h3>
    <p>Through this round of the DBTL cycle, we have moved beyond simple signal sequence-based localization, mitigating
      the limitations posed by protein folding and microenvironmental factors to some extent. By integrating spatial
      structural information and leveraging DMS data, we further optimized protein behavior prediction, enhancing the
      stability and functionality of fusion proteins. We also explored the scalability of the solution by grouping
      organelles with similar localization properties, reducing the workload while expanding the scope of fine-tuning.
      This improvement has made our tool more robust and versatile, better meeting the needs of users in various
      research scenarios.</p>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
</script>

<style scoped>
@import '@/styles/style.css';
</style>
