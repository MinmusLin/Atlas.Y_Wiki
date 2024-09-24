<template>
  <TextContent title='CONTRIBUTION'
               :title-list="['Data Collaboration', 'Open Access to Software', 'For Synthetic Biology', 'For iGEM Community', 'Reference']">
    <h1 id='Data Collaboration'>Data Collaboration</h1>
    <p>Our iGEM project involves the development of two key databases: the Signal Database and the Linker Database.</p>
    <ol>
      <li><span class='bold'>Signal Database</span>: This database plays a critical role in understanding protein
        localization and transport. It focuses on the extraction and classification of signal peptides from eukaryotic
        proteins. These peptides are derived from the dataset used in the <span class='bold'>DeepLoc 2.1</span> deep
        learning model developed by Marius Thrane Ødum et al.<sup>[1]</sup> They are essential for determining the
        subcellular localization of proteins. To ensure their relevance to our project, we have carefully filtered and
        categorized these peptides, assigning identification numbers for easier querying.
      </li>
      <li><span class='bold'>Linker Database</span>: This database is designed to connect target proteins with signal
        peptides. It integrates classical linkers identified through <span class='bold'>extensive literature review
        </span>, which are classified based on their rigidity and flexibility to meet various experimental needs.
        Additionally, we include natural linkers derived from peptide sequences remaining after the removal of conserved
        regions and signal peptides from complete proteins. These efforts significantly enhance the database's
        applicability in synthetic biology. Currently, the database contains a total of 1,067 linkers, making it one of
        the larger datasets among similar databases.
      </li>
    </ol>
    <p>In terms of data collaboration, we are committed to ensuring that both databases are robust and reliable for
      widespread application in synthetic biology. By providing openly accessible and well-documented datasets, we
      facilitate data sharing and enhance reproducibility. Our efforts contribute to advancing the scientific
      community's understanding of protein localization and synthetic design, fostering collaborative research and
      innovation.</p>

    <h1 id='Open Access to Software'>Open Access to Software</h1>
    <p>Our project Atlas.Y integrates advanced computational models and databases to offer a comprehensive protein
      design tool. We developed a database of hundreds of localization tags and thousands of linkers through literature
      research and sequence segmentation. The software generates fusion proteins with localization ability using protein
      language models for structural prediction, alongside CAD scoring and Rosetta methods to evaluate their function
      and stability. Additionally, Atlas.Y includes a variant generation module to optimize protein stability and
      localization, along with a dynamic localization module incorporating photosensitive elements for precise
      spatiotemporal control of protein behavior.</p>
    <p>The open-source nature of Atlas.Y allows the synthetic biology community to freely access these tools and
      databases, including the Signal Peptide Database and Linker Database. By providing this resource, we aim to enable
      researchers and future iGEM teams to easily customize localization systems, perform directed evolution, and design
      dynamic localization strategies with precision. The accessibility of these tools encourages greater collaboration,
      enhances reproducibility, and accelerates advancements in protein design and synthetic biology.</p>
    <p>Researchers can access Atlas.Y and our open databases through this link: [TODO:GitHub仓库链接]. We believe the
      platform will inspire innovation and support future iGEM teams in pushing the boundaries of synthetic biology.</p>

    <h1 id='For Synthetic Biology'>For Synthetic Biology</h1>
    <p>Atlas.Y assists in designing proteins for precise subcellular localization in yeast, providing a powerful tool
      for both basic research and synthetic biology. In the field of synthetic biology, efficient protein localization
      and precise control of metabolic flux are crucial for improving <span class='bold'>biomanufacturing efficiency
      </span>. Through the Atlas.Y platform, researchers can utilize its integrated computational tools and databases to
      overcome the challenges of precise protein localization, thereby driving the design and regulation of more complex
      metabolic reactions. The platform also offers flexible solutions for optimizing subcellular localization and
      dynamic localization control, particularly for applications requiring efficient production in complex
      environments. Whether in basic research or large-scale industrial production, Atlas.Y provides researchers with
      new ideas and capabilities, accelerating the optimization and innovation of biomanufacturing processes.</p>
    <h2>Subcellular Localization Optimization</h2>
    <p>By optimizing subcellular localization, Atlas.Y helps users direct proteins to specific organelles to enhance
      local metabolic efficiency. For instance, in the production of <span class='bold'>high-value chemicals</span> such
      as terpenoids, the precise localization of enzymes to organelles like mitochondria can significantly increase the
      yield of target products while reducing the formation of by-products. This optimization is not only applicable in
      research experiments but also shows great potential in large-scale industrial production, significantly enhancing
      the synthesis of complex compounds like biofuels or pharmaceuticals.</p>
    <h2>Dynamic Localization and Control</h2>
    <p>Atlas.Y offers dynamic localization tools, incorporating photosensitive elements to achieve precise <span
      class='bold'>spatiotemporal</span> control of protein behavior. This feature is particularly important in
      industrial production, allowing researchers to adjust protein function in response to changing environmental
      conditions quickly. For example, during large-scale fermentation, fluctuations in metabolic conditions can affect
      the synthesis efficiency of target products. The dynamic localization feature can respond to these changes in
      real-time, ensuring metabolic flow stability and optimizing output.</p>

    <h1 id='For iGEM Community'>For iGEM Community</h1>
    <p>Our project Atlas.Y offers valuable resources that can assist other iGEM teams in improving their protein design
      and metabolic engineering efforts. By providing <span class='bold'>open access</span> to databases and
      computational tools, we enable teams to achieve more precise results in optimizing protein localization and
      enhancing metabolic pathways. These resources can be easily integrated into existing workflows, helping teams
      overcome technical challenges and accelerate their research.</p>
    <p>Beyond research, we actively contribute to iGEM outreach by organizing <span class='bold'>educational activities
    </span> aimed at younger audiences. Through interactive sessions, games, and hands-on activities, we introduce
      elementary school students to key concepts in synthetic biology, such as cell structures and subcellular
      localization. These efforts not only promote the iGEM initiative but also inspire the next generation to explore
      the exciting world of biotechnology.</p>
    <p>Additionally, we maintain open communication and collaboration with other iGEM teams, including those from
      NENU-China, NEFU-China, SYPHU-China, CJUH-JLU-China, JLU-China, Imperial College, and Westlake University. By
      sharing insights and discussing common challenges, we contribute to a stronger, more connected iGEM community,
      fostering collective growth and innovation.</p>
    <p>Finally, we would like to express our gratitude to Team 2023 Shanghaitech-China and the iGEM community. We
      referred to the <a href='https://2023.igem.wiki/shanghaitech-china' target='_blank'>LAMPS</a> project by the
      Shanghaitech-China team and implemented dynamic line effects on our homepage using the canvas method. Their
      approach provided us with valuable inspiration. We have benefited from the iGEM community, and we hope that our
      Atlas.Y can also contribute to it. We welcome everyone to use our Atlas.Y software.</p>

    <h1 id='Reference'>Reference</h1>
    <ol>
      <li>Ødum MT, Teufel F, Thumuluri V, Almagro Armenteros JJ, Johansen AR, Winther O, Nielsen H. DeepLoc 2.1:
        multi-label membrane protein type prediction using protein language models. Nucleic Acids Res. 2024 Jul
        5;52(W1):W215-W220.
      </li>
    </ol>
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
