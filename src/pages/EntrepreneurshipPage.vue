<!--suppress HtmlUnknownTag-->
<template>
  <TextContent title='ENTREPRENEURSHIP'
               :title-list="['Overview', 'Business Model Canvas', 'Market', 'Profit Model Design', 'Competitor Analysis and Product Pricing', 'Financial Planning', 'Future Development', 'Business Plan']">
    <h1 id='Overview'>Overview</h1>
    <p>In the Entrepreneurship section, we once again chose the <span class='bold'>EPIC model (Elicit, Prototype,
      Iterate, Consolidate)</span> as the overall framework for the project. Starting from background guidance, initial
      business design and testing, through repeated iterations and improvements, we ultimately aim for integration and
      implementation, with expectations for future development.</p>
    <div class='epic'>
      <img src='https://static.igem.wiki/teams/5503/design-materials/greyline.webp' class='grey-line' alt='GreyLine'>
      <div class='circle circle1'
           :class='{ active: activeCircle == 0 }'
           @mouseover='showText(0)'
           @mouseleave='hideText'>
        Elicit
      </div>
      <div class='circle-1 circle1-1'
           :class='{ active: activeCircle == 0 }'
           @mouseover='showText(0)'
           @mouseleave='hideText'>
        01
      </div>
      <div class='circle circle2'
           :class='{ active: activeCircle == 1 }'
           @mouseover='showText(1)'
           @mouseleave='hideText'>
        Prototype
      </div>
      <div class='circle-1 circle2-1'
           :class='{ active: activeCircle == 1 }'
           @mouseover='showText(1)'
           @mouseleave='hideText'>
        02
      </div>
      <div class='circle circle3'
           :class='{ active: activeCircle == 2 }'
           @mouseover='showText(2)'
           @mouseleave='hideText'>
        Iterate
      </div>
      <div class='circle-1 circle3-1'
           :class='{ active: activeCircle == 2 }'
           @mouseover='showText(2)'
           @mouseleave='hideText'>
        03
      </div>
      <div class='circle circle4'
           :class='{ active: activeCircle == 3 }'
           @mouseover='showText(3)'
           @mouseleave='hideText'>
        Consolidate
      </div>
      <div class='circle-1 circle4-1'
           :class='{ active: activeCircle == 3 }'
           @mouseover='showText(3)'
           @mouseleave='hideText'>
        04
      </div>
      <transition name='fade'>
        <div v-if='activeBox == 0' class='text-box text-box-right-top' v-html='textContents[0]'/>
      </transition>
      <transition name='fade'>
        <div v-if='activeBox == 1' class='text-box text-box-left-top' v-html='textContents[1]'/>
      </transition>
      <transition name='fade'>
        <div v-if='activeBox == 2' class='text-box text-box-right-bottom' v-html='textContents[2]'/>
      </transition>
      <transition name='fade'>
        <div v-if='activeBox == 3' class='text-box text-box-left-bottom' v-html='textContents[3]'/>
      </transition>
    </div>
    <ul>
      <li><span class='bold'>Elicit</span>: We first identified the key issues and challenges in the current market,
        explored the advantages of our product, and aligned them with market demands.
      </li>
      <li><span class='bold'>Prototype</span>: After clarifying the background and key points of business design, we
        developed a revenue model and pricing strategy.
      </li>
      <li><span class='bold'>Iterate</span>: After completing the initial business design, we further refined it based
        on business calculations.
      </li>
      <li><span class='bold'>Consolidate</span>: After continuous iteration and optimization, we integrated the existing
        content and explored future expansion and application directions.
      </li>
    </ul>

    <h1 id='Business Model Canvas'>Business Model Canvas</h1>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship1-3.webp' alt='Entrepreneurship1'>

    <h1 id='Market'>Market</h1>
    <h2>Target User Profile</h2>
    <div class='container'>
      <div class='user-image' @mouseleave='onMouseLeave'>
        <TransitionGroup name='list'>
          <img v-for='(img, index) in images'
               :key='img.alt'
               :src='img.src'
               :alt='img.alt'
               @mouseover='swapAndShowText(index)'
               :class="{ 'image-with-textbox': index == 0 && showTextBox }"/>
        </TransitionGroup>
        <Transition name='appear'>
          <div v-if='showTextBox && currentText' class='text-container'>
            <div class='text-content'>
              <!--suppress TypeScriptUnresolvedReference-->
              <p class='text-title'>{{ currentText.title1 }}</p>
              <ul class='custom-list'>
                <!--suppress TypeScriptUnresolvedReference-->
                <li v-for='(item, index) in currentText.ul1' :key='index' v-html='item'/>
              </ul>
              <!--suppress TypeScriptUnresolvedReference-->
              <p class='text-title2'>{{ currentText.title2 }}</p>
              <ul class='custom-list'>
                <!--suppress TypeScriptUnresolvedReference-->
                <li v-for='(item, index) in currentText.ul2' :key='index' v-html='item'/>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
      <div class='bottom-text-box' :class="{'center-text-box': canSwap}">
        <Transition name='mask'>
          <div v-if='showBottomTextMask' class='bottom-text-mask'/>
        </Transition>
        <p v-for='(item, index) in bottomText'
           :key='index'
           v-html='item'
           :class="{'center-text': canSwap}"/>
      </div>
    </div>
    <h2>Timing of Demand</h2>
    <h4>Project Planning and Experimental Design Phase</h4>
    <p>During the planning and design phase of a research project, researchers need to determine the subcellular
      localization of enzymes to optimize yeast metabolic pathways. Therefore, they require molecular tagging design
      tools in the early stages.</p>
    <h4>Experimental Optimization and Result Analysis Phase</h4>
    <p>During the analysis of experimental results, if metabolic pathways or protein localization do not perform as
      expected, researchers will use the tool to redesign the subcellular localization in yeast for optimization.</p>
    <h4>Commercial Production Phase</h4>
    <p>In biopharmaceutical or industrial fermentation processes, companies optimize production processes before scaling
      up. At this stage, it is crucial to ensure that the subcellular localization of key enzymes is optimal.</p>
    <h2>Business Model Exchange and Learning</h2>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship5-1.webp'
         alt='Entrepreneurship5'
         style='width: 700px'>
    <p class='tip' style='text-align: center'>Yanyin Technology is a high-tech company focused on providing digital
      platforms for the biopharmaceutical field, offering comprehensive digital solutions related to genomics,
      proteomics, and synthetic biology. The company is dedicated to enhancing the efficiency and accuracy of
      biopharmaceutical research through advanced algorithms, artificial intelligence, and big data processing, helping
      research institutions and enterprises achieve breakthrough progress in digital transformation. In this interview
      regarding business models, we conducted an in-depth discussion on the technical feasibility, market demand,
      application prospects, revenue model, and promotion strategies for Atlas.Y. Based on our project situation, we
      developed a corresponding commercialization plan.
    </p>
    <h5>Table. Interview Transcripts with Yanyin</h5>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship6-1.webp'
         class='img-table'
         alt='Entrepreneurship6'>
    <p>Through the interview, we further validated the <span class='bold'>market demand</span> and <span class='bold'>
      technical feasibility</span> of the Atlas.Y software, and <span class='bold'>adjusted design measures</span> based
      on the business advice received. Moving forward, we will continue to deepen our presence in the enterprise user
      market, enhance product features, and ensure the project's sustainable development through flexible profit models
      and marketing strategies.</p>

    <h1 id='Profit Model Design'>Profit Model Design</h1>
    <h2>Membership-based Profitability</h2>
    <p>During the market analysis and assessment of Atlas.Y, we gained a deep understanding of the needs and
      expectations of users at various levels, particularly the impact of the SHEEL framework on different users.</p>
    <p>Based on this research, we developed a flexible and attractive membership system that will better meet the
      diverse needs of users, enhance user engagement, and create lasting value for the company.</p>
    <blockquote>
      <span class='bold'>SHEEL</span> typically refers to the five core dimensions involved in technical projects:
      <span class='bold'>Social, Health, Environmental, Ethical, and Legal considerations</span>. Each dimension is
      closely related to the project's social responsibility, health impact, environmental sustainability, ethical
      compliance, and legal risks during technical development and application.
    </blockquote>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship7-2.webp'
         class='img-table'
         alt='Entrepreneurship7'>
    <h2>Algorithm Store</h2>
    <p>The algorithms offered in the <span class='bold'>algorithm store</span> can be purchased on demand by users to
      meet specific or infrequent research needs. Such in-app purchases provide flexibility for users while generating
      an additional source of income for the software.</p>
    <h4>Product List</h4>
    <ol>
      <li><span class='bold'>Site-Specific CAD Scoring System</span></li>
      <p>The CAD scoring algorithm provides a quantitative evaluation of the structural similarity between a protein's
        active site and a reference model. This algorithm assesses the accuracy and physical realism of a protein model
        by calculating the differences in residue-residue contact areas. By selecting specific sites for the protein,
        users can obtain CAD scores for these locations, enabling precise evaluation of the structural fidelity and
        potential functionality of the site.</p>
      <li><span class='bold'>Temporal Dynamic Localization Design System</span></li>
      <p>The Temporal Dynamic Localization Design System utilizes light-sensitive components and localization tags to
        achieve time-controlled regulation of protein localization. This system can precisely manipulate the positioning
        of proteins within cells or other environments, aiding in the study of protein behavior, interactions, and
        functions over time.</p>
      <li><span class='bold'>Optimized Protein Evolution Localization System</span></li>
      <p>The Optimized Protein Evolution Localization System uses computational algorithms to assist in protein
        evolution. Based on the user's selection of a specific organelle, the system evolves the user's fusion protein
        to be suitable for localization within that organelle. This system is a powerful tool in the field of protein
        engineering, aiding in the design of proteins with enhanced localization capabilities and functionality tailored
        to specific cellular environments.</p>
      <li><span class='bold'>Protein Localization Prediction System</span></li>
      <p>The Protein Localization Prediction System analyzes protein sequences and structural features using advanced
        algorithms to predict protein localization within cells. This system helps optimize research workflows, supports
        the design of novel proteins, enhances experimental efficiency, and improves protein design for specific
        cellular applications.</p>
    </ol>
    <h4>Subscription</h4>
    <p>To cater to different user needs and encourage frequent use, we have designed algorithm packages that provide
      both cost savings and flexibility in usage. By offering bundled packages, users who need regular access to
      multiple algorithms can benefit from reduced costs, compared to purchasing each algorithm separately. This
      strategy targets researchers who require high-frequency use of specific tools, allowing them to save while
      maintaining access to essential functionalities. Furthermore, the packages are structured to offer a variety of
      options—ranging from basic tools to advanced combinations—thereby appealing to both individual users and research
      teams with varying usage levels. For instance, frequent users of tools like the Site-Specific CAD Scoring System
      can purchase a multi-use package to reduce costs over time. Additionally, users who need access to all available
      algorithms can benefit from the "all-in-one" package, further enhancing flexibility and encouraging long-term
      commitment through longer validity periods.</p>
    <h2>Advertising Revenue</h2>
    <p>In our free software version, we will embed advertisements related to the biotechnology field, allowing users to
      click on ads based on their interests to learn more. This approach not only provides users with valuable content
      relevant to their research but also generates additional income for us. We will adopt the following revenue
      models:</p>
    <ul>
      <li><span class='bold'>Advertising Display Revenue</span>: We will earn revenue based on the number of ad
        impressions (i.e., cost per thousand impressions, CPM). Ads will appear in non-intrusive areas of the software
        to ensure they do not disrupt the user experience while increasing ad visibility.
      </li>
      <li><span class='bold'>Click-Through Revenue Sharing</span>: When users click on ads and visit the advertisers'
        content, we will share revenue with advertisers based on the number of clicks (cost per click, CPC). This model
        enhances ad interactivity while providing continuous revenue growth for the platform.
      </li>
    </ul>
    <p>This advertising revenue strategy will help us generate income from our free user base and offer advertisers an
      efficient channel to directly reach relevant researchers, research teams, and other target user groups.</p>
    <h2>Academic Discounts</h2>
    <h4>Purpose and Alignment with Human Practices</h4>
    <p>The <span class='bold'>academic discount</span> initiative aims to make advanced bioinformatics tools accessible
      to researchers and educational institutions that may face budget constraints. By offering significant discounts,
      the Atlas.Y platform not only promotes research but also aligns with core values of <span class='bold'>social
      equity</span> and <span class='bold'>inclusivity</span>. Providing affordable access to cutting-edge technologies
      helps academic users advance their work in life sciences, public health, and environmental studies, thereby
      contributing to the common good.</p>
    <p>This initiative supports the <span class='bold'>Integrated Human Practices</span> philosophy by ensuring that
      knowledge and technology are not limited to commercial entities but are accessible to educational and research
      institutions that work for the betterment of society. By enabling more research on issues such as sustainability,
      global health, and environmental protection, the Atlas.Y platform contributes to long-term societal benefits.</p>

    <h4>Academic Discount and Technology Transfer</h4>
    <p>The <span class='bold'>academic discount</span> is structured to provide up to <span class='bold'>50% off</span>
      for educational institutions, ensuring that financial limitations do not impede scientific progress. By offering
      different pricing tiers (Basic, Professional, and Enterprise), the platform caters to both small and large
      research groups, allowing them to access essential tools at discounted rates.</p>
    <ul>
      <li><span class='bold'>Human Practices Impact</span>: By lowering the cost barrier, academic users are empowered
        to conduct more research on <span class='bold'>socially relevant issues</span> like climate change, public
        health, and biotechnological advancements, which have far-reaching benefits for society.
      </li>
      <li><span class='bold'>Technology Transfer</span>: In addition to discounts, Atlas.Y promotes the
        <span class='bold'>transfer of technology</span> from research institutions to industry. By facilitating
        partnerships between academic researchers and commercial entities, Atlas.Y enables the commercialization of
        breakthrough innovations that emerge from academic research. This model fosters collaboration, ensuring that
        socially beneficial technologies, such as sustainable agricultural methods or medical innovations, reach broader
        markets.
      </li>
      <li><span class='bold'>Ethical Considerations</span>: Technology transfer agreements emphasize <span class='bold'>
        fair licensing practices</span>, ensuring that original researchers are credited and compensated for their work.
        Additionally, non-exclusive licensing for educational purposes ensures that these innovations remain accessible
        for public benefit, while exclusive licenses allow for targeted commercial applications.
      </li>
    </ul>
    <h4>Social Care and Sustainability</h4>
    <p>By offering academic discounts and focusing on technology transfer, the Atlas.Y platform embodies a commitment to
      <span class='bold'>social responsibility</span>. This approach ensures that advancements in technology are not
      just commercialized but are also shared with the broader academic community, which often drives research for
      societal improvement.</p>
    <ul>
      <li><span class='bold'>Sustainability and Social Impact</span>: Discounts enable researchers to contribute to
        sustainability initiatives, fostering projects that aim to reduce environmental impact. Atlas.Y helps bridge the
        gap between <span class='bold'>academic research</span> and <span class='bold'>real-world applications</span>,
        empowering researchers to bring innovative, sustainable solutions to life.
      </li>
    </ul>
    <h4>Measurable Impact</h4>
    <ul>
      <li><span class='bold'>Long-term Societal Benefits</span>: Supporting research through affordable tools
        accelerates <span class='bold'>scientific discoveries</span> that can address societal challenges such as
        disease prevention, environmental protection, and resource management.
      </li>
      <li><span class='bold'>Broad Access</span>: More institutions, especially those in <span class='bold'>developing
        regions</span>, will have the opportunity to participate in global scientific advancements, ensuring more
        inclusive progress.
      </li>
    </ul>

    <h1 id='Competitor Analysis and Product Pricing'>Competitor Analysis and Product Pricing</h1>
    <h2>Market Bioinformatics Tool Price</h2>
    <h5>Table. Bioinformatics Tools Market Price</h5>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship8-1.webp'
         class='img-table'
         alt='Entrepreneurship8'>
    <p>Subscription models are commonly used by users who frequently access tools, covering functionalities from
      sequence analysis to experimental management, making them suitable for academic research and commercial users.
      Pay-per-use models offer greater flexibility and are ideal for users who need occasional access to advanced
      features. For large research institutions and companies, enterprise subscription models provide advanced
      functionalities and team collaboration tools, with higher pricing, meeting the needs of data security and
      high-performance computing.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship9-1.webp'
         alt='Entrepreneurship9'
         style='width: 700px'>
    <p>This chart presents the pricing ranges of key bioinformatics tools, covering subscription models, pay-per-use
      options, and enterprise-level subscription plans. The price ranges span from €49 (e.g., Geneious basic
      subscription) to €500 (e.g., Schrödinger Enterprise edition). Different colors distinguish the products, visually
      demonstrating their market positioning and pricing strategy variations. This information serves as a valuable
      reference for formulating competitive pricing strategies and lays the groundwork for capturing market share.</p>
    <h2>SWOT Analysis</h2>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship10-2.webp'
         class='img-table'
         alt='Entrepreneurship10'>
    <h2>Atlas.Y Pricing</h2>
    <h4>Overview</h4>
    <h5>Table. Atlas.Y Pricing</h5>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship11-1.webp'
         class='img-table'
         alt='Entrepreneurship11'>
    <h4>Pricing Strategy</h4>
    <p>The chart illustrates a comparison between individual purchase prices and bundled package prices for algorithm
      tools.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship12-1.webp'
         alt='Entrepreneurship12'>
    <p class='tip'>The left chart lists the <strong>individual prices for four tools</strong>: Protein Localization
      Prediction System (around €10), Optimized Protein Evolution Localization System (around €20), Temporal Dynamic
      Localization Design System (around €15), and Site-Specific CAD Scoring System (around €7).
    </p>
    <p class='tip'>The right chart shows the <strong>prices for five different packages</strong>, including the "Common
      Combination" (€15), "Advanced Functionality Combination" (€20), "Multiple Uses Package" (€35), "All-in-One Package
      (1 use of each)" (€40), and "All-in-One Package (5 uses of each)" (€150). These packages offer significant
      discounts compared to individual purchases, with validity periods ranging from 30 to 365 days.
      <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship13-1.webp'
           alt='Entrepreneurship13'>
    </p>
    <p class='tip'>This image compares the pricing ranges for various bioinformatics tools used by both individual users
      and enterprise users. Alongside these well-known platforms, our product stands out with a Professional Membership
      priced at just €30 per month for individual users, offering unlimited access to advanced algorithm tools. This is
      ideal for researchers who need frequent and flexible usage. For enterprise users, our Enterprise Membership starts
      at €100 per month, providing not only the same powerful tools but also enhanced team management features and
      top-tier data security, catering to larger research institutions and biotech companies.Unlike Schrödinger,
      Benchling, and Geneious, which have monthly subscriptions ranging from €50 to €200 for individual users and up to
      €500 for enterprise users, our platform offers competitive pricing with a robust set of features tailored to
      different user needs, making it a highly attractive option for both small labs and large teams.
    </p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship14-1.webp'
         alt='Entrepreneurship14'
         style='width: 700px'>
    <p class='tip'>This image shows a bar chart <strong>comparing the pricing plans for Professional and Enterprise
      memberships</strong>.The Enterprise Annual plan costs approximately €1000, offering a 10-15% discount for annual
      payments.The Enterprise Monthly plan is priced at around €100 per month with no discount for monthly payments.The
      Professional Annual plan costs €300, saving users the cost of two months compared to monthly payments.The
      Professional Monthly plan is priced at €30 per month with no discount for monthly payments.The chart highlights
      the <strong>potential savings of opting for annual subscriptions over monthly ones</strong>.
    </p>

    <h1 id='Financial Planning'>Financial Planning</h1>
    <h2>Market Trend Forecast</h2>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship15-1.webp'
         alt='Entrepreneurship15'
         style='width: 700px'>
    <p>The biotechnology tools market is expected to steadily grow from approximately €150 billion in 2023 to nearly
      €200 billion by 2025, reflecting <span class='bold'>increasing demand</span>. Our chart further breaks down growth
      trends across different market segments: <span class='bold'>subscription models (individual and enterprise) and
      pay-per-use models (individual and enterprise)</span>. While all segments are growing, the enterprise subscription
      and pay-per-use models are expanding faster and hold larger market shares, with continued growth expected.
      Although individual subscriptions have a significant market share, their growth is more stable. Overall, the
      market shows strong growth potential, particularly in enterprise subscriptions and pay-per-use models.</p>
    <h2>Market Size Forecast</h2>
    <p>Given the niche nature of our software, the global target user base is relatively limited. We focus on
      researchers and companies engaged in <span class='bold'>yeast metabolic engineering, protein production, and
      biopharmaceuticals</span> worldwide.</p>
    <p>Estimated potential user base:</p>
    <ul>
      <li>Research institutions, universities, and laboratories: 10,000-30,000 potential researchers.</li>
      <li>Biotechnology and synthetic biology companies: 5,000-10,000 researchers.</li>
      <li>Biopharmaceutical companies: 2,000-5,000 users, mainly from R&D and production teams.</li>
    </ul>
    <p>Considering our highly specialized product targeting a specific field, a <span class='bold'>1% conversion rate
      </span> seems reasonable, particularly in the early market stages. This means, assuming 20,000-40,000 potential
      users, the projected number of actual paying users could be 200-400.</p>
    <h2>Revenue Forecast</h2>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship16-1.webp'
         alt='Entrepreneurship16'
         style='width: 700px'>
    <ul>
      <li><span class='bold'>Professional Subscription (€30/month)</span>: Assuming 60% of paying users choose the
        professional version, the annual revenue would be approximately:
      </li>
      <ul>
        <li>200-400 users × €25 × 12 months = €72,000-€144,000/year.</li>
        <li>Most users opt for this subscription, providing a stable revenue source, making it a significant portion of
          the total income.
        </li>
      </ul>
      <li><span class='bold'>Enterprise Subscription (€100/month)</span>: Assuming 40% of paying users choose the
        enterprise version, the annual revenue would be approximately:
      </li>
      <ul>
        <li>100-200 users × €125 × 12 months = €120,000-€240,000/year.</li>
        <li>This is the primary revenue source, indicating that enterprise customers are willing to pay more for premium
          features and services.
        </li>
      </ul>
      <li><span class='bold'>Pay-Per-Use (€15/use)</span>: Assuming 30% of users opt for the pay-per-use model, with an
        average of 5 uses per user per year, the annual revenue would be approximately:
      </li>
      <ul>
        <li>60-120 users × €15 × 5 uses = €4,500-€9,000/year.</li>
        <li>While limited in usage, it provides additional income, particularly for occasional users, helping to
          increase the overall customer base.
        </li>
      </ul>
      <li><span class='bold'>Advertising Revenue</span>: Minimum ad revenue is estimated at €5,000, with a maximum of
        €15,000. This accounts for a small proportion of total revenue but serves as a useful supplement to
        non-user-paid income streams.
      </li>
    </ul>
    <p>The projected annual revenue is between <span class='bold'>€201,500 and €408,000</span>, with <span class='bold'>
      enterprise subscriptions</span> being the main revenue driver. Professional subscriptions also provide a
      relatively stable cash flow, while pay-per-use and advertising revenues, though smaller in proportion, add
      flexibility and diversity to the overall income.</p>
    <h2>Cost Estimation</h2>
    <p><span class='bold'>The total annual cost for the first year</span> is estimated to range between
      <span class='bold'>¥595,000 and ¥1,219,000 (€76,000 to €156,000)</span>.</p>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship17-1.webp'
         alt='Entrepreneurship17'
         style='width: 700px'>
    <p>Detailed cost analysis is as follows:</p>
    <h5>Table. Detailed cost analysis</h5>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship18-1.webp'
         class='img-table'
         alt='Entrepreneurship18'>
    <h2>Break-even Analysis</h2>
    <p>We estimated the annual revenue from the global market in euros, with a projected range of <span class='bold'>
      €201,500 to €408,000</span>. Considering the company operates in China, costs are calculated in RMB, with a total
      annual cost range of <span class='bold'>€76,000 to €156,000 (converted to euros)</span>. The revenue vs. cost
      comparison chart illustrates the company's financial structure, showing that even in the most conservative
      scenario, revenues exceed costs, demonstrating profitability. We also expect the first year's costs to be the
      highest in recent years.</p>
    <h3>Break-even Analysis</h3>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship19-1.webp'
         alt='Entrepreneurship19'
         style='width: 700px'>
    <ul>
      <li><span class='bold'>Minimum Revenue vs. Minimum Cost</span>: Minimum revenue is €201,500, and minimum cost is
        €76,000.
      </li>
      <ul>
        <li>Profit: €201,500 - €76,000 = <span class='bold'>€125,500</span></li>
        <li>With minimum costs, the company can achieve a profit of €125,500.</li>
      </ul>
      <li><span class='bold'>Maximum Revenue vs. Maximum Cost</span>: Maximum revenue is €408,000, and maximum cost is
        €156,000.
      </li>
      <ul>
        <li>Profit: €408,000 - €156,000 = <span class='bold'>€252,000</span></li>
        <li>Under the highest revenue and cost conditions, the company can achieve a profit of €252,000.</li>
      </ul>
      <li><span class='bold'>Maximum Profit</span>: Maximum revenue of €408,000 and minimum cost of €76,000 result in
        the highest profit: €408,000 − €76,000 = <span class='bold'>€332,000</span></li>
      <ul>
        <li>Under this scenario, the company's maximum profit would be €332,000, with a profit margin of 22.6%.</li>
      </ul>
      <li><span class='bold'>Minimum Profit</span>: Minimum revenue of €201,500 and maximum cost of €156,000 result in a
        minimum profit: €201,500 − €156,000 = <span class='bold'>€45,500</span></li>
      <ul>
        <li>Even in the case of minimum revenue and maximum costs, the company would still achieve a profit of €45,500,
          with a profit margin of 81.4%.
        </li>
      </ul>
    </ul>
    <p>Given the current revenue and cost structure, the company is already profitable, and with increased revenue and
      cost optimization, profit margins will further expand.</p>
    <h3>LTV to CAC</h3>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship20-1.webp'
         alt='Entrepreneurship20'
         style='width: 700px'>
    <h4>Customer Acquisition Cost (CAC)</h4>
    <p>Assumptions:</p>
    <ul>
      <li>Total Sales and Marketing Expenses: 80,000 RMB</li>
      <li>New Customers: 300</li>
    </ul>
    <p>CAC Formula:</p>
    <p>CAC = Total Sales and Marketing Expenses / New Customers = 80,000 / 300 = 266.67 RMB</p>
    <p>To convert to Euros:</p>
    <p>CAC = 266.67 RMB / 7.8 = 34.19 EUR</p>
    <p>The Customer Acquisition Cost (CAC) is €34.19.</p>
    <p>This represents the amount you spend on average to acquire one customer.</p>
    <h4>Customer Lifetime Value (LTV)</h4>
    <p>Assumptions:</p>
    <ul>
      <li>Average Annual Revenue per Customer: 500 RMB</li>
      <li>Customer Lifetime: 3 years</li>
      <li>Annual Maintenance Cost: 100 RMB</li>
    </ul>
    <p>LTV Formula:</p>
    <p>LTV = (Average Annual Revenue × Customer Lifetime) - Maintenance Cost</p>
    <p>Convert the revenue and cost to Euros:</p>
    <p>LTV = (500 RMB / 7.8 × 3) - 100 RMB / 7.8 = (64.10 EUR × 3) - 12.82 EUR = 192.30 EUR - 12.82 EUR = 179.48
      EUR</p>
    <p>The Customer Lifetime Value (LTV) is €179.48.</p>
    <p>This represents the total revenue generated from a customer over their lifetime minus the maintenance cost.</p>
    <h4>LTV to CAC Ratio</h4>
    <p>The LTV/CAC ratio is an important metric that helps determine the efficiency of customer acquisition:</p>
    <p>LTV/CAC = LTV / CAC = 179.48 / 34.19 = 5.25</p>
    <ul>
      <li>A LTV/CAC ratio of 5.25 indicates that for every €1 spent on acquiring a customer, the business generates
        €5.25 in customer lifetime value.
      </li>
      <li>Ideal Ratio: Generally, an LTV/CAC ratio above 3 is considered healthy and shows strong profitability. In
        this case, the ratio of 5.25 suggests a highly efficient acquisition strategy and strong long-term
        profitability from each customer.
      </li>
    </ul>
    <p>Given the strong LTV/CAC ratio, the company can consider scaling its marketing and sales efforts to acquire
      more customers, as the cost of acquisition is significantly lower than the value each customer brings over their
      lifetime.</p>

    <h1 id='Future Development'>Future Development</h1>
    <h2>Accelerator</h2>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship21-1.webp'
         alt='Entrepreneurship21'
         style='width: 700px'>
    <div class='scroll-container'>
      <div class='scroll-text-container'>
        <p>For a startup, support from an <span class='bold'>accelerator</span> is crucial, and we are fortunate to have
          received strong backing from <span class='bold'>Tongji University Entrepreneurship Valley</span>. As a
          world-renowned university, Tongji University offers our project a wealth of resources and a broad platform.
          Entrepreneurship Valley not only provides us with office space and entrepreneurial training, but also connects
          us with potential investors, corporate clients, and technical experts through its extensive alumni network and
          cooperative resources. This support has not only accelerated our project progress, but has also enabled us to
          engage in deep discussions with industry leaders at an early stage, gaining critical market and technical
          feedback.</p>
        <p>As one of China's leading university incubators, Tongji University Entrepreneurship Valley has
          <span class='bold'>a comprehensive acceleration service system</span>, offering full support to our project,
          from business model optimization, fundraising guidance, to marketing strategies. Particularly in the early
          stages of financing planning, business model validation, and market strategy formulation, the expert team at
          Entrepreneurship Valley has provided valuable advice, helping us identify our market position and clarify our
          development path in a highly competitive environment.</p>
        <p>With the support of Tongji Entrepreneurship Valley, we are able to efficiently access market information and
          quickly connect with policy support and industry resources. For instance, through connections with government
          bodies and industry associations, we can prioritize participation in various innovation and cooperation
          projects within the biotechnology sector. This has not only accelerated our commercialization process but has
          also enhanced our influence in the bioinformatics industry.</p>
        <p>In August 2024, we officially joined the Tongji University Entrepreneurship Valley incubation base. With the
          support of Tongji Entrepreneurship Valley, we are more confident that the Atlas.Y project will achieve
          significant breakthroughs in the biotechnology field and gradually reach global markets. Entrepreneurship
          Valley has not only provided us with resources and networks, but also revealed broader opportunities for
          future development. Through this accelerator platform, we will continue to innovate and drive the project
          towards higher levels of commercial success and social impact.</p>
      </div>
    </div>
    <h2>Strategies for Sustained Revenue Growth</h2>
    <h4>Membership Upgrade Strategy:</h4>
    <p>Encourage users to transition from free or pay-per-use models to subscription plans by offering incentives. For
      example, users can receive discounts for upgrading, or access to additional services like premium features,
      priority support, or exclusive content. A tiered subscription model can also motivate users to upgrade by
      highlighting the benefits of higher-tier plans, such as increased usage limits or faster processing times.</p>
    <h4>Value-Added Services:</h4>
    <p>Introduce extra paid services or premium features to boost revenue. This could include offering advanced data
      analysis tools, personalized reports, or customization options tailored to specific customer needs. Technical
      support could be offered as a subscription service, or users could pay for specific consultations or expert
      advice. These add-ons will create new income streams while improving customer satisfaction.</p>
    <h4>Cross-Selling and Bundling:</h4>
    <p>Develop bundle deals that combine your primary bioinformatics tools with complementary products, such as related
      databases or third-party software. Offering discounted packages for multiple tools or features can incentivize
      users to purchase more, increasing overall revenue. Cross-selling within your existing user base is an effective
      way to promote upgrades or additional products.</p>
    <h2>Marketing Strategy</h2>
    <h3>Brand Promotion in the Scientific Community</h3>
    <ul>
      <li><span class='bold'>Collaboration with Research Institutions:</span></li>
      <p>Promote the product through partnerships with renowned global research institutions, universities, and
        laboratories. Sponsoring academic conferences, workshops, or webinars in related fields can increase the
        product's visibility in the biotechnology community.</p>
      <li><span class='bold'>Case Studies and Academic Papers:</span></li>
      <p>Publish successful case studies and academic papers demonstrating the software's real-world applications, such
        as optimizing yeast metabolic pathways. This not only enhances brand credibility but also attracts high-end
        clients.</p>
    </ul>
    <h3>Online and Offline Promotion</h3>
    <li><span class='bold'>Targeted Advertising:</span></li>
    <p>Run targeted ads on platforms like Google Ads, LinkedIn, and ResearchGate, focusing on researchers and companies
      in the fields of metabolic engineering and biopharmaceuticals.</p>
    <li><span class='bold'>Video Content Creation:</span></li>
    <p>Collaborate with well-known Bilibili content creators in the biotech space to produce software demos, feature
      walkthroughs, and tutorials, enhancing the product's appeal and usability through visual content.</p>
    <li><span class='bold'>Online and Offline Academic Lectures and Training:</span></li>
    <p>Hold regular online training sessions on optimizing subcellular localization using the software, attracting
      potential users and increasing conversion rates. Participate in global events and academic conferences related to
      synthetic biology and biopharmaceuticals to showcase the latest features and directly engage with target
      customers.</p>
    <li><span class='bold'>Collaborating with Key Opinion Leaders (KOLs):</span></li>
    <p>Work with influential scholars and researchers to endorse the product through social media or conference
      presentations, leveraging their authority to expand market penetration.</p>
    <h3>Free Trial Program</h3>
    <li><span class='bold'>Limited-Time Free Use:</span></li>
    <p>Offer a one-month free trial, allowing potential customers to use the software in real projects and experience
      its advantages in optimizing yeast enzyme localization, encouraging conversions to paid users.</p>
    <li><span class='bold'>Premium Feature Previews:</span></li>
    <p>Allow free users to preview some premium features (e.g., automatic optimization in signal peptide design) to
      demonstrate their value and encourage upgrades to subscription plans.</p>
    <h3>Academic Discounts</h3>
    <li><span class='bold'>Special Offers for Researchers:</span></li>
    <p>Provide academic discounts or subscription packages for researchers at universities and institutions, attracting
      customers from the academic community. Offer differentiated pricing for professional and enterprise subscriptions
      to cater to various needs.</p>
    <li><span class='bold'>Bundled Sales:</span></li>
    <p>Partner with other bioinformatics tools or databases to offer subscription bundles, providing discounts for
      multiple tool or service combinations, thereby increasing overall purchase intent.</p>
    <h2>Stage Forecast</h2>
    <p>Assuming that the number of customers and market share will gradually increase, while also considering that the
      costs are higher in the first year and will decrease over time, and the revenue will gradually grow. We made the
      following assumptions for the projection:</p>
    <ul>
      <li><span class='bold'>Customer growth</span>: Assuming an annual growth rate of 10%-15%, starting from the first
        year with 200-400 paying users, and gradually increasing.
      </li>
      <li><span class='bold'>Cost reduction</span>: Due to the initial investment in hardware and infrastructure, the
        costs will be higher in the first year but will gradually decrease in the following years.
      </li>
      <li><span class='bold'>Revenue growth</span>: As the number of customers increases, it is expected that revenue
        will achieve significant growth over 3, 5, and 10 years.
      </li>
    </ul>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship22-1.webp'
         alt='Entrepreneurship22'
         style='width: 700px'>
    <p>Here is the 3-year, 5-year, and 10-year projection for revenue, cost, and profit, considering both minimum and
      maximum scenarios. The chart illustrates the steady growth in revenue, gradual reduction in costs, and subsequent
      increase in profits over time.</p>
    <h2>Risk Consideration and Avoidance</h2>
    <img src='https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship23-1.webp' class='img-table'
         alt='Entrepreneurship23'>
    <h2>Future</h2>
    <p>The Atlas.Y software we have developed is a molecular tag design tool for optimizing subcellular localization of
      yeast enzymes, and it has already demonstrated immense potential in the fields of biotechnology and synthetic
      biology. Looking ahead, Atlas.Y will not only become an essential tool for researchers but also propel global
      biomanufacturing technology towards a more efficient and precise future.</p>
    <p>As the biopharmaceutical and synthetic biology markets continue to thrive, the commercial value of Atlas.Y will
      keep rising. There is a strong demand from enterprise users for precise and efficient bioinformatics tools. With
      its self-developed optimization algorithms and databases, Atlas.Y can offer seamless solutions across
      biopharmaceuticals, gene editing, and fermentation engineering. In the future, we plan to expand Atlas.Y's
      application scenarios, serving not only academic institutions and corporate laboratories but also the entire
      biopharmaceutical production chain, from drug development to industrial manufacturing, where Atlas.Y could play a
      critical role.</p>
    <p>We envision that through customized services and big data integration, Atlas.Y will become a leader in the global
      bioinformatics market, offering more value-added services to enterprise users. This will create diverse revenue
      streams, such as data services, integrated experimental workflows, and modular solutions. Building on
      collaborations with industry leaders like GenScript, Atlas.Y will continuously evolve to become a vital part of
      the platform ecosystem, gaining broader market share through ongoing optimization and innovation.</p>
    <p>From a societal perspective, the commercialization of Atlas.Y not only drives innovation in the bioinformatics
      field but also has far-reaching positive impacts. Against the backdrop of the rise of synthetic biology and
      personalized medicine, Atlas.Y can help improve drug development efficiency and shorten the biopharmaceutical
      cycle, thereby accelerating the development and application of new drugs. This will greatly enhance the
      accessibility of medical resources, enabling more patients worldwide to benefit from advanced treatments and
      ultimately contributing to improved global health outcomes.</p>
    <p>Additionally, with the increasing focus on sustainable development worldwide, Atlas.Y can play a role in areas
      such as biofuels and green chemistry, by precisely optimizing biosynthetic pathways, reducing energy consumption,
      and minimizing the use of chemical reagents, thus promoting the widespread adoption of environmentally friendly
      production methods. We believe that Atlas.Y is not just a software tool; it will become a driving force for the
      future green economy and the biotechnology revolution.</p>
    <p>We are confident that Atlas.Y will become an indispensable digital tool in the global biotechnology field,
      helping more companies and research institutions achieve digital transformation in biotechnology, and advancing
      the development of global biopharmaceuticals and the green economy.</p>

    <h1 id='Business Plan'>Business Plan</h1>
    <p>To provide a comprehensive understanding of the practical applications and sustainability of our project, we have
      developed a detailed business plan. This section outlines our strategic vision for turning our innovative ideas
      into a viable solution, covering key aspects such as market analysis, revenue models, commercialization
      strategies, and long-term goals. By integrating scientific innovation with business foresight, we aim to ensure
      that our project not only contributes to the advancement of synthetic biology but also meets real-world demands
      effectively.</p>
    <iframe src='https://static.igem.wiki/teams/5503/businessplan.pdf#view=FitH'
            style='border: none'
            width='905px'
            height='905px'/>
  </TextContent>
</template>

<script setup lang='ts'>
import {ref, reactive, watch, nextTick} from 'vue'
import TextContent from '@/components/TextContent.vue'

interface ImageText {
  title1: string
  ul1: string[]
  title2: string
  ul2: string[]
  bottomText: string[]
}

interface Image {
  src: string
  alt: string
  text: ImageText
}

const textContents = ref<string[]>([
  '<h3 style="margin-bottom: 10px; margin-left: -18px">Elicit</h3>' +
  '<ul><li>2024.4</li>' +
  '<ul><li style="margin-left: 17px">Conducted surveys and extracted three user profiles to identify pain points and expectations</li>' +
  '<li style="margin-left: 17px">Identified the timing of user needs</li>' +
  '<li style="margin-left: 17px">Extracted three target user profiles</li>' +
  '<li style="margin-left: 17px">Identified the timing of demand</li></ul>' +
  '<li>2024.7</li>' +
  '<ul><li style="margin-left: 17px">Collected market prices of competing products</li>' +
  '<li style="margin-left: 17px">Conducted SWOT analysis</li></ul>' +
  '<li>2024.8.10</li>' +
  '<ul><li style="margin-left: 17px">Consulted Yanyin Technology</li>' +
  '<li style="margin-left: 17px">Extracted 6 keys of design strategies</li></ul>',

  '<h3 style="margin-bottom: 10px; margin-left: -18px">Prototype</h3>' +
  '<ul><li>2024.8</li>' +
  '<ul><li style="margin-left: 17px">Designed a membership-based model, generating revenue from an algorithm store, package deals, and ads</li>' +
  '<li style="margin-left: 17px">Established academic discounts, assessing their social impacts</li>' +
  '<li style="margin-left: 17px">Set pricing for individual and enterprise memberships</li>' +
  '<li style="margin-left: 17px">Determined the unit and package combination prices for the algorithm store</li></ul>' +
  '<li>2024.9</li>' +
  '<ul><li style="margin-left: 17px">Created a business model canvas</li></ul>',

  '<h3 style="margin-bottom: 10px; margin-left: -18px">Iterate</h3>' +
  '<ul><li>2024.8 - 2024.9</li>' +
  '<ul><li style="margin-left: 17px">Predicted market trends and adjusted pricing and revenue systems</li>' +
  '<li style="margin-left: 17px">Forecasted revenue, estimated costs and analyzed profit and loss</li>' +
  '<li style="margin-left: 17px">Calculated CAC-to-LTV ratio</li>' +
  '<li style="margin-left: 17px">Outlined future direction and performed financial planning</li></ul>' +
  '<li>2024.9</li>' +
  '<ul><li style="margin-left: 17px">Conducted PESTEL analysis to assess risks at various levels and develop risk mitigation strategies</li></ul>',

  '<h3 style="margin-bottom: 10px; margin-left: -18px">Consolidate</h3>' +
  '<ul><li>2024.9.14</li>' +
  '<ul><li style="margin-left: 17px">Sought accelerators and joined Tongji University\'s Innovation Valley</li></ul>' +
  '<li>2024.9</li>' +
  '<ul><li style="margin-left: 17px">Made reasonable phase forecasts and expectations</li>' +
  '<li style="margin-left: 17px">Developed four major marketing strategies</li>' +
  '<li style="margin-left: 17px">Established a strategy for sustained revenue growth</li></ul>' +
  '<li>2024.10</li>' +
  '<ul><li style="margin-left: 17px">Envisioned the future</li></ul>'
])

const initialImages: Image[] = [
  {
    src: 'https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship2-1.webp',
    alt: 'YAO',
    text: {
      title1: 'User Persona: Business Individuals',
      ul1: [
        '<strong>Interests</strong>: Emerging technologies such as synthetic biology, enzyme optimization, and protein localization. They are highly interested in cost control and improving production efficiency.',
        '<strong>Typical Scenarios</strong>: They are currently developing or optimizing biotechnology products, utilizing enzyme localization technologies to enhance product output and quality. They need to solve real-world issues related to production efficiency, cost management, and resource management.',
        '<strong>Behavior</strong>: They frequently seek innovative solutions that can improve production efficiency and reduce costs. They stay actively informed about cutting-edge technologies and use software tools to design and optimize molecular tags to enhance production precision.'
      ],
      title2: 'User Insights: Business Individuals',
      ul2: [
        '<strong>Pain Points</strong>: The difficulty in selecting molecular tags (70.5%) complicates the production process. Stability issues during production impact product quality and yield (66.91%).',
        '<strong>Existing Solutions</strong>: They currently use basic molecular tags and localization tools but are often dissatisfied due to the complexity of the operation or inconsistent results.',
        '<strong>Emotional Expectations</strong>: They desire tools that are simple and intuitive yet highly flexible, significantly reducing complexity and uncertainty in the production process.',
        '<strong>Functional Expectations</strong>: They expect tools to provide more efficient molecular tag selection solutions while reducing the chances of human error. They also need tools that automate more processes to optimize production, enhance efficiency, and reduce costs.'
      ],
      bottomText: [
        '<strong>User Characteristics</strong>: Includes individual researchers, freelancers, small startups, and consulting companies. These users typically look for cost-effective tools and services to support specific projects or small-scale business operations.',
        '<strong>Demand</strong>: High demand for one-time algorithm purchases, usually opting for basic or professional membership.',
        '<strong>User Scale</strong>: Since the number of individual users is large and widely distributed, this user group is expected to account for a significant portion of the total user base. Market research shows that the number of freelancers and small businesses is steadily increasing, especially with the growing adoption of digital tools.',
        '<strong>Estimated Scale</strong>: Likely to account for <strong>40-50%</strong> of the total user base.'
      ]
    }
  },
  {
    src: 'https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship3-1.webp',
    alt: 'YUAN',
    text: {
      title1: 'User Persona: Business Individuals',
      ul1: [
        '<strong>Research Focus</strong>: Subcellular resolution studies, enzyme localization mechanisms, and the interactions between proteins and organelles.',
        '<strong>Typical Scenario</strong>: Conducting yeast subcellular localization experiments in the lab, aiming to observe protein localization patterns using molecular tag technology (84.17%).',
        '<strong>Research Needs</strong>: Requires precise control of yeast protein subcellular localization for in-depth studies and to obtain higher resolution data.<br> Seeks computer-aided tools to simplify the molecular tag design process and improve research accuracy (95.68%).'
      ],
      title2: 'User Insights: Business Individuals',
      ul2: [
        '<strong>Pain Points</strong>: Difficulty in selecting molecular tags, which affects the efficiency of experiments and the precision of research (70.5%)..<br> Yeast stability issues introduce uncertainty into the experimental process, impacting repeatability and data reliability (66.91%).',
        '<strong>Existing Solutions</strong>: Basic molecular tag selection and localization tools are being used, but they lack flexibility and struggle to meet the demands of complex research.',
        '<strong>Emotional Expectations</strong>: Hopes that software tools will be intuitive and easy to use, reducing stress and allowing them to focus more on the research itself.<br> Aims to advance biomedical and synthetic biology research by improving subcellular localization techniques, contributing to societal health and technological progress.',
        '<strong>Functional Expectations</strong>: Seeks high-precision tools to assist in molecular tag design and optimization, enhancing the accuracy and repeatability of research.<br> Desires flexible simulation and experiment design support from the tools, enabling further exploration of possibilities in academic research.'
      ],
      bottomText: [
        '<strong>User Characteristics</strong>: Universities, research institutions, researchers, and laboratories. Academic users prioritize high-quality research tools and often require long-term data processing and algorithm optimization features.',
        '<strong>Demand</strong>: They are more likely to choose professional or enterprise memberships, especially when handling large-scale data analysis or collaboration. They may also require flexible academic pricing.',
        '<strong>User Scale</strong>: The number of academic institutions and researchers is substantial, and fields like synthetic biology, data analysis, and algorithm optimization have increasing demands for such tools.',
        '<strong>Estimated Scale</strong>: Likely to account for <strong>20-30%</strong> of the total user base.'
      ]
    }
  },
  {
    src: 'https://static.igem.wiki/teams/5503/accompanying-images/entrepreneurship4-1.webp',
    alt: 'Juzhen',
    text: {
      title1: 'User Persona: Business Individuals',
      ul1: [
        '<strong>Enterprise Field and Scale</strong>: Fields include industrial production and biomedicine (87.05%). A typical enterprise may have dozens to hundreds of employees, focusing on increasing yield and production efficiency through enzyme optimization technologies.',
        '<strong>Typical Scenario</strong>: In large-scale biomanufacturing, enterprises need to optimize the subcellular localization of enzymes through molecular tag technology to ensure efficient production.',
        '<strong>Production Actions</strong>: They rely on yeast and molecular tagging systems for enzyme production, optimizing localization to improve enzyme efficiency and increase the yield of target products (64.75%).'
      ],
      title2: 'User Insights: Business Individuals',
      ul2: [
        '<strong>Pain Points</strong>: High technical difficulty in large-scale applications (56.83%), particularly with challenges in precise localization and stability.<br> High production costs, primarily due to inaccurate localization and mispositioned enzymes causing resource waste (54.68%).',
        '<strong>Existing Solutions</strong>: The currently used technologies are insufficient to meet the demands of large-scale industrial production, still requiring manual regulation and constant adjustments to ensure stability.',
        '<strong>Social Expectations</strong>: They hope to drive the green transformation of industrial production through technological innovation, reducing environmental pollution and enhancing the company\'s sense of social responsibility.',
        '<strong>Economic Expectations</strong>: They expect to further improve production efficiency and reduce costs through precise enzyme localization technologies, maximizing economic benefits.'
      ],
      bottomText: [
        '<strong>User Characteristics</strong>: Mid-sized and large companies, multinational corporations with more complex needs and larger budgets, requiring customized solutions and advanced features.',
        '<strong>Demand</strong>: Enterprise membership, which includes advanced algorithms, batch processing, big data analytics, and team collaboration tools. Corporate clients place high importance on data privacy, compliance, and security.',
        '<strong>User Scale</strong>: While the number of enterprise users is smaller, each client tends to contribute significantly more revenue. Enterprise users often depend on high-end subscription services.',
        '<strong>Estimated Scale</strong>: Likely to account for <strong>20-30%</strong> of the total user base, but contribute a large proportion of revenue.'
      ]
    }
  }
]

const activeCircle = ref<number | null>(-1)
const activeBox = ref<number | null>(null)
const showTextBox = ref(false)
const currentText = ref<ImageText | null>(null)
const bottomText = ref<string[]>(['<strong>Userprofile</strong><br>———————————————————————————<br>User profile will be presented here.<br>Mouse over the corresponding image to view the details.'])
const showBottomTextMask = ref(false)
const images = reactive([...initialImages])
let canSwap = ref(true)

const showText = (index: number) => {
  activeBox.value = index
  activeCircle.value = index
}

const hideText = () => {
  activeBox.value = null
  activeCircle.value = null
}

function swapAndShowText(index: number) {
  if (!canSwap.value) return
  const targetImg = images.splice(index, 1)[0]
  images.unshift(targetImg)
  currentText.value = targetImg.text
  bottomText.value = targetImg.text.bottomText
  showTextBox.value = true
  canSwap.value = false
}

watch(bottomText, () => {
  showBottomTextMask.value = true
  nextTick(() => {
    showBottomTextMask.value = false
  })
})

function onMouseLeave() {
  resetText()
  canSwap.value = true
}

function resetText() {
  images.splice(0, images.length)
  images.push(...initialImages)
  currentText.value = null
  showTextBox.value = false
  bottomText.value = ['<strong>Userprofile</strong><br>———————————————————————————<br>User profile will be presented here.<br>Mouse over the corresponding image to view the details.']
}
</script>

<!--suppress CssUnusedSymbol-->
<style scoped>
@import '@/styles/style.css';

.epic {
  position: relative;
}

.epic .grey-line {
  border: none;
  border-radius: 0;
  box-shadow: none;
  display: block;
  margin: 20px auto 26px;
  width: 240px;
  height: auto;
}

.circle {
  position: absolute;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  user-select: none;
  transition: background-color 0.3s;
  cursor: pointer;
}

.circle-1 {
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  user-select: none;
  transition: background-color 0.3s;
  cursor: pointer;
}

.circle1 {
  background-color: #AACAF9;
  color: black;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
}

.circle1-1 {
  background-color: #AACAF9;
  top: 73px;
  left: 571px;
}

.circle2 {
  background-color: #FFE269;
  top: 190px;
  left: 50%;
  transform: translateX(-50%);
}

.circle2-1 {
  background-color: #FFE269;
  top: 235px;
  left: 304px;
}

.circle3 {
  background-color: #FFB5A8;
  top: 355px;
  left: 50%;
  transform: translateX(-50%);
}

.circle3-1 {
  background-color: #FFB5A8;
  top: 400px;
  left: 571px;
}

.circle4 {
  background-color: #84C8B1;
  top: 518px;
  left: 50%;
  transform: translateX(-50%);
}

.circle4-1 {
  background-color: #84C8B1;
  top: 563px;
  left: 304px;
}

.circle1.active {
  background-color: rgba(170, 202, 249, 0.4);
}

.circle2.active {
  background-color: rgba(255, 226, 105, 0.4);
}

.circle3.active {
  background-color: rgba(255, 181, 168, 0.4);
}

.circle4.active {
  background-color: rgba(132, 200, 177, 0.4);
}

.circle1-1.active {
  background-color: rgba(170, 202, 249, 0.4);
}

.circle2-1.active {
  background-color: rgba(255, 226, 105, 0.4);
}

.circle3-1.active {
  background-color: rgba(255, 181, 168, 0.4);
}

.circle4-1.active {
  background-color: rgba(132, 200, 177, 0.4);
}

.text-box {
  position: absolute;
  box-shadow: 0 4px 12px rgb(176, 208, 255);
  border-radius: 10px;
  padding: 20px 40px;
  background-color: white;
  font-family: 'Inter', sans-serif;
}

.text-box-right-top {
  top: 0;
  right: 0;
  width: 270px;
  height: 630px;
}

.text-box-left-top {
  top: 0;
  left: 0;
  width: 270px;
  height: 606px;
}

.text-box-right-bottom {
  bottom: 0;
  right: 0;
  width: 270px;
  height: 582px;
}

.text-box-left-bottom {
  bottom: 0;
  left: 0;
  width: 270px;
  height: 462px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.user-image {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: relative;
}

.user-image img {
  border: none;
  border-radius: 0;
  box-shadow: none;
  display: block;
  margin: 0;
  width: auto;
  height: 480px;
}

.image-with-textbox {
  position: relative;
}

.text-container {
  position: absolute;
  top: 0;
  left: 306px;
  width: 610px;
  height: 480px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.text-content {
  max-height: 90%;
  padding: 5px;
  overflow-y: auto;
  width: 100%;
  text-align: left;
  font-family: 'Inter', sans-serif;
}

.text-title {
  font-size: 26px !important;
  font-weight: bold;
  color: #9FCAE2;
  margin-bottom: 10px;
}

.text-title2 {
  font-size: 26px !important;
  font-weight: bold;
  color: #9FCAE2;
  margin-bottom: 10px;
}

.custom-list {
  list-style-type: disc;
  margin: 0;
  padding: 0 20px;
  font-size: 16px;
  color: #4191C6;
}

.custom-list li {
  margin-bottom: 5px;
}

.center-text {
  text-align: center;
  font-size: 25px !important;
  line-height: 2 !important;
  font-family: 'Inter', sans-serif;
}

.center-text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bottom-text-box {
  width: 100%;
  color: black;
  padding: 10px;
  text-align: left;
  margin-top: 10px;
  height: 380px;
  position: relative;
  font-family: 'Inter', sans-serif;
}

.bottom-text-mask {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #FEFCF0;
  z-index: 999;
  box-shadow: 0 -40px 20px #FEFCF0;
}

.list-move, .list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from, .list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}

.appear-enter-active, .appear-leave-active {
  transition: all 0.5s ease-out;
}

.appear-enter-from, .appear-leave-to {
  opacity: 0;
}

.mask-enter-active, .mask-leave-active {
  transition: all 0.5s ease-out;
}

.mask-leave-to {
  height: 0;
}

img.img-table {
  border: none;
  border-radius: 0;
  box-shadow: none;
}

img {
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

h5 {
  margin-top: 30px;
}

.scroll-container {
  border-radius: 10px;
  border: 4px #FFCA31 solid;
  background-color: #FFF7C8;
  height: 250px;
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-text-container {
  padding: 0 30px;
  max-height: 90%;
  overflow-y: auto;
}

.scroll-text-container p {
  font-size: 16px;
  line-height: 1.7;
}

.scroll-text-container span {
  font-size: 16px;
  line-height: 1.7;
}

.scroll-text-container::-webkit-scrollbar {
  background: #FFF7C8;
  width: 8px;
  border-radius: 4px;
}

.scroll-text-container::-webkit-scrollbar-thumb {
  background: #FFE26A;
  border-radius: 4px;
}

.text-content::-webkit-scrollbar {
  width: 8px;
}

.text-content::-webkit-scrollbar-track {
  background: transparent;
}

.text-content::-webkit-scrollbar-thumb {
  background: #AAC7F9;
  border-radius: 4px;
}
</style>
