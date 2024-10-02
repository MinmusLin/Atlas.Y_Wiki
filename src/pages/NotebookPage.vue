<template>
  <TextContent title='NOTEBOOK' :title-list='[]'>
    <v-timeline align='start'
                side='end'
                style='transform: translateX(-14px); margin-top: 53px; margin-bottom: -50px'>
      <v-timeline-item v-for='(item, index) in items' :key='index' dot-color='#2F62D7' class='timeline-item'>
        <div class='cover-line'/>
        <v-card class='card-container'>
          <v-card-title class='card-title'>
            {{ item.title }}
          </v-card-title>
          <v-card-text style='border: 4px #2F62D7 solid; background-color: #F6F9FF; padding: 10px 25px'>
            <p style='font-weight: bold' v-if='item.algorithm.length!=0'>Algorithm:</p>
            <ul>
              <li v-for='e in item.algorithm' style='margin-left: 2px'>{{ e }}</li>
            </ul>
            <p style='font-weight: bold' v-if='item.software.length!=0'>Software:</p>
            <ul>
              <li v-for='e in item.software' style='margin-left: 2px'>{{ e }}</li>
            </ul>
            <p style='font-weight: bold' v-if='item.design.length!=0'>Art Design:</p>
            <ul>
              <li v-for='e in item.design' style='margin-left: 2px'>{{ e }}</li>
            </ul>
            <p style='font-weight: bold' v-if='item.hp.length!=0'>Human Practices:</p>
            <ul>
              <li v-for='e in item.hp' style='margin-left: 2px'>{{ e }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'

const items = [
  {
    title: '24 February 2024',
    algorithm: [],
    software: [],
    design: [],
    hp: [
      'Extensive literature research providing case support for the project topic.'
    ]
  },
  {
    title: '2 March 2024',
    algorithm: [],
    software: [],
    design: [],
    hp: [
      'Evaluated the potential social benefits of the project, including both production and academic aspects.'
    ]
  },
  {
    title: '9 March 2024',
    algorithm: [],
    software: [],
    design: [],
    hp: [
      'Distributed and collected 139 questionnaires from individuals with diverse professional backgrounds (mainly biology-related fields) to assess public awareness of subcellular localization and expectations for related software.'
    ]
  },
  {
    title: '16 March 2024',
    algorithm: [],
    software: [],
    design: [],
    hp: [
      'Planned and began a six-month public education initiative, designing various courses and games.',
      'Conducted comprehensive surveys to extract three typical target user profiles, identifying pain points and expectations. Discovered demand timing among users.'
    ]
  },
  {
    title: '23 March 2024',
    algorithm: [],
    software: [],
    design: [],
    hp: [
      'Leveraged partnerships with Shanghai Juzhen Education Technology Co., Ltd. and Chengdu Baijiangjun Cultural Media Co., Ltd. to promote synthetic biology and subcellular localization concepts in Shanghai and rural areas.'
    ]
  },
  {
    title: '30 March 2024',
    algorithm: [],
    software: [],
    design: [],
    hp: [
      'Consulted with experts in gene editing system optimization and bioinformatics algorithm development, establishing the project framework and gathering algorithm suggestions. Confirmed the feasibility of the algorithms.',
      'Formed a team with members from the School of Life Sciences, School of Software, College of Design and Innovation, and School of Economics and Management, with clear division of labor and each member contributing their expertise.'
    ]
  },
  {
    title: '6 April 2024',
    algorithm: [],
    software: [],
    design: [],
    hp: [
      'Continued consultations with experts in gene editing system optimization and bioinformatics algorithm development, solidifying the project framework and confirming algorithm feasibility.'
    ]
  },
  {
    title: '13 April 2024',
    algorithm: [
      'Conduct a seminar on topic selection and give preliminary consideration to a program in the direction of optogenetics.'
    ],
    software: [],
    design: [],
    hp: [
      'Visited a molecular immunology and signal transduction lab to identify the specific needs for our software in the biology field.',
      'Exchanged insights with past team members from our university to learn team management experiences.'
    ]
  },
  {
    title: '20 April 2024',
    algorithm: [
      'Discussed the feasibility of optogenetics-related topics (this idea was ultimately rejected) and explored the possibility of new topics.',
      'Planned to explore and research protein-directed evolution systems, whole-cell modeling ecosystems, and subcellular localization systems separately.'
    ],
    software: [],
    design: [],
    hp: [ ]
  },
  {
    title: '27 April 2024',
    algorithm: [
      'Discussed the feasibility of evolution systems, whole-cell modeling ecosystems, and subcellular localization systems. Ultimately, evolution systems and whole-cell modeling ecosystems were rejected due to computational limitations and issues with application scenarios.',
      'Decided to deepen the subcellular localization systems plan, conducting extensive background research and project planning.',
      'Communicated with the instructor and PI to finalize the topic.'
    ],
    software: [],
    design: [],
    hp: []
  },
  {
    title: '4 May 2024',
    algorithm: [
      'Conducted an in-depth literature review to compare the performance and applicability of different algorithms. Developed the overall technical framework for the project.',
      'Authored a technical report that provided a detailed comparison of the advantages and disadvantages of various algorithms, supporting the technical choices made for the project.'
    ],
    software: [],
    design: [],
    hp: [
      'Held a seminar with Fudan University and ShanghaiTech University to discuss HP (Human Practices) and EDU (Education) strategies.'
    ]
  },
  {
    title: '18 May 2024',
    algorithm: [
      'Selected models and algorithms that best fit the software\'s functional needs and clarified the project workflows. This included tasks such as building linker and signal peptide databases, predicting subcellular localization of fusion proteins, protein structure prediction algorithms, as well as protein stability and functionality scoring evaluation. Completed the theoretical framework for these algorithms.'
    ],
    software: [],
    design: [],
    hp: []
  },
  {
    title: '1 June 2024',
    algorithm: [
      'Conducted an interview with Professor Wang Chenfei, incorporating feedback to refine the algorithm design.',
      'Organized interview notes and adjusted the project plan to better meet practical application needs.'
    ],
    software: [],
    design: [],
    hp: []
  },
  {
    title: '15 June 2024',
    algorithm: [
      'Collected and organized linker and signal peptide sequence data, performing quality screening on the collected data.',
      'Designed an efficient data table structure for building linker and signal peptide databases.'
    ],
    software: [],
    design: [],
    hp: []
  },
  {
    title: '29 June 2024',
    algorithm: [
      'Assisted in making decisions for the front-end visualization of protein PDB files. Researched existing software and methods for displaying protein PDB files, including PyMOL, Chimera, VMD, etc., and eventually selected the web-based NGL Viewer.'
    ],
    software: [],
    design: [],
    hp: []
  },
  {
    title: '6 July 2024',
    algorithm: [
      'Configured the testing server environment to ensure compatibility among models.',
      'Following extensive learning and discussion within the team, commenced the deployment of various models, including DeepLoc, ESMfold, CAD score, Rosetta, and SCHEMA recombination programs.'
    ],
    software: [
      'Determined the project\'s technical selection, development tools, and programming languages.',
      'Defined the project\'s technology stack.'
    ],
    design: [],
    hp: []
  },
  {
    title: '13 July 2024',
    algorithm: [
      'Completed the deployment of DeepLoc and Rosetta while correcting and optimizing sections of code for CAD score, SCHEMA recombination program, and ESMfold.',
      'Developed code to implement localized CAD scoring calculation and allowed users to choose custom options. Additionally, we created a set of automated testing scripts to swiftly verify the effectiveness of the models.'
    ],
    software: [
      'Determined the project\'s development principles.',
      'Established the coding style and standards for HTML, CSS, TypeScript, and C#.',
      'Defined the Git version control guidelines.'
    ],
    design: [],
    hp: []
  },
  {
    title: '20 July 2024',
    algorithm: [
      'Fully deployed all models, compiled comprehensive technical documentation covering model functions, deployment processes, and user guides to facilitate efficient learning and operation by team members.'
    ],
    software: [
      'Set up the frontend framework for the wiki project.',
      'Set up the frontend and backend framework for the Atlas.Y software project.',
      'Deploy the Atlas.Y server and deploy the CI / CD (Continuous Integration and Continuous Delivery / Deployment) pipeline.'
    ],
    design: [],
    hp: []
  },
  {
    title: '27 July 2024',
    algorithm: [
      'Conducted a comprehensive performance test for all deployed models, analyzing aspects such as accuracy, response time, and memory management.',
      'Developed a next-phase model optimization plan, learning the specific steps to fine-tune evolutionary models.'
    ],
    software: [
      'Developed the Atlas.Y software, specifically including features such as a contact form and a feedback form.'
    ],
    design: [
      'Gained initial understanding of project design.',
      'Interfaced with algorithm and software team members.'
    ],
    hp: [
      'Collected average market prices of competing products.',
      'Used the SWOT (Strengths, Weaknesses, Opportunities, Threats) model for competitive analysis and pricing positioning.'
    ]
  },
  {
    title: '3 August 2024',
    algorithm: [
      'Collected experiment data required for fine-tuning evolutionary models, including .fasta sequence data, .pdb structure data, and DMS (Deep Mutational Scanning) data.',
      'Wrote scripts for data cleaning and preprocessing. Began preliminary model optimization.'
    ],
    software: [
      'Developed the Atlas.Y software, specifically including features such as the algorithm store and membership plans.'
    ],
    design: [
      'Conducted interface design for web application.'
    ],
    hp: []
  },
  {
    title: '10 August 2024',
    algorithm: [],
    software: [
      'Developed the Atlas.Y software, specifically including features such as the user guide and technical resources.',
      'Rent GPU computing resources and complete the deployment.'
    ],
    design: [
      'Conducted interface design for web application.'
    ],
    hp: [
      'Held an exchange meeting with Northwestern Polytechnical University on August 9, discussing team management experiences.',
      'Managed social media accounts on August 10, creating momentum and promoting the Atlas project.',
      'Conducted an in-depth interview with DerYin Technology, extracting six key points and generating design measures.'
    ]
  },
  {
    title: '17 August 2024',
    algorithm: [],
    software: [
      'Developed the Atlas.Y software, specifically including features such as the basic designer.',
      'Deployed and maintained the server.'
    ],
    design: [
      'Completed web application page design.'
    ],
    hp: [
      'Designed a membership-based revenue model, algorithm store, and package-based revenue streams, and proposed advertising revenue strategies.'
    ]
  },
  {
    title: '24 August 2024',
    algorithm: [
      'Designed a detailed computational experiment validation process, which included simulation steps, data collection, and analysis methods.',
      'Conducted several small-scale simulations to ensure the feasibility and accuracy of the processes.'
    ],
    software: [
      'Developed the Atlas.Y software, specifically including features such as the dynamic designer.',
      'Deployed and maintained the server.'
    ],
    design: [
      'Completed the design and planning of the promotional video script.'
    ],
    hp: [
      'Defined academic discount measures and assessed the social benefits of academic discounts.',
      'Set personal and enterprise membership prices.',
      'Set individual prices and package prices for the algorithm store.'
    ]
  },
  {
    title: '31 August 2024',
    algorithm: [
      'Conducted computational experiment validation, using the DeepLoc model for large-scale protein localization predictions.',
      'Visualized analysis of results to evaluate model performance in practical applications.'
    ],
    software: [
      'Developed the Atlas.Y software.',
      'Completed the development of both the basic designer and the dynamic designer parts.',
      'Deployed and maintained the server.'
    ],
    design: [
      'Completed the design and planning of the promotional video script.'
    ],
    hp: [
      'Forecasted market trends and market size, adjusting pricing and revenue strategies accordingly.',
      'Predicted revenue, estimated costs, analyzed profit and loss, calculated customer acquisition costs (CAC), and customer lifetime value (LTV) and its ratio. Envisioned future directions and created financial plans.'
    ]
  },
  {
    title: '7 September 2024',
    algorithm: [
      'Developed and integrated scripts for algorithm automation, meeting the functional calls of all project models.',
      'Conducted multiple tests in different environments to ensure script stability.',
      'Completed interface testing with the software group to ensure seamless system integration.'
    ],
    software: [
      'Completed the basic styling for the wiki.',
      'Optimized the Atlas.Y software.'
    ],
    design: [
      'Completed the production of project promotional video clips.',
      'Conducted wiki design planning.'
    ],
    hp: [
      'Developed a business canvas.',
      'Used PESTEL (Political, Economic, Social, Technological, Environmental, Legal) analysis to assess risks in various areas and formulated risk mitigation measures.'
    ]
  },
  {
    title: '14 September 2024',
    algorithm: [
      'Migrated optimized models to a high-performance computing server and performed large-scale processing tests. Monitored performance metrics such as memory usage and processing time.'
    ],
    software: [
      'Implemented the special effects for the wiki homepage.',
      'Optimized the Atlas.Y software.'
    ],
    design: [
      'Completed wiki home page design.',
      'Completed the design of wiki unified templates for various boards.'
    ],
    hp: [
      'Searched for accelerators and joined Tongji University\'s Venture Valley.',
      'Made reasonable stage predictions and expectations.'
    ]
  },
  {
    title: '21 September 2024',
    algorithm: [
      'Fine-tuned server configurations to improve efficiency, focusing on enhancing computational speed and resource utilization.',
      'Conducted additional testing to validate the improvements made.'
    ],
    software: [
      'Completed the deployment of the wiki content and the related resources.',
      'Optimized the Atlas.Y software.'
    ],
    design: [
      'Completed the wiki animation design.'
    ],
    hp: [
      'Developed four major marketing strategies.',
      'Developed continuous revenue growth strategies.'
    ]
  },
  {
    title: '28 September 2024',
    algorithm: [
      'Assisted in authoring the project\'s wiki documentation, focusing on the introduction of Model sections and the algorithm iteration process.'
    ],
    software: [
      'Optimized the visual effects of the wiki.',
      'Optimized the Atlas.Y software.'
    ],
    design: [
      'Improved the design and production of illustrations for various wiki pages.'
    ],
    hp: [
      'Envisioned the future of brand development.'
    ]
  }
]
</script>

<style scoped>
@import '@/styles/style.css';

.timeline-item {
  position: relative;
}

.cover-line {
  position: absolute;
  top: 0;
  left: 100px;
  width: 2px;
  height: 24px;
  background-color: #FFFCEF;
  z-index: 1;
}

.card-container {
  width: 1000px;
  border-radius: 10px 10px 0 0;
  box-shadow: none;
  transform: translateY(-15px);
  margin-bottom: 30px;
}

.card-title {
  background-color: #2F62D7;
  color: white;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  font-family: 'Futura Md BT Medium', sans-serif;
  font-size: 24px;
  padding-top: 15px;
  padding-left: 28px;
}
</style>
