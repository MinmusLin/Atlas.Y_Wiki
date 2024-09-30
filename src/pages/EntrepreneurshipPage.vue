<template>
  <TextContent title='ENTREPRENEURSHIP'
               :title-list="['Overview', '1. Business Model Canvas', '2. Market',
               '3. Profit Model Design', '4. Competitor analysis and product pricing', '5. Financial Planning',
               '6. Future Development']">
    <h1 id='Overview'>Overview</h1>
    <p>In the Entrepreneurship section, we once again chose the <span class='bold'>EPIC model (Elicit, Prototype,
      Iterate, Consolidate)</span> as the overall framework for the project. Starting from background guidance,
      initial business design and testing, through repeated iterations and improvements, we ultimately aim for
      integration and implementation, with expectations for future development.</p>

    <div class='EPIC'>
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

      <!-- 文本框显示 -->
      <div v-if='activeBox == 0' class='text-box text-box-right-top' v-html='textContents[0]'></div>
      <div v-if='activeBox == 1' class='text-box text-box-left-top' v-html='textContents[1]'></div>
      <div v-if='activeBox == 2' class='text-box text-box-right-bottom' v-html='textContents[2]'></div>
      <div v-if='activeBox == 3' class='text-box text-box-left-bottom' v-html='textContents[3]'></div>
    </div>

    <ul>
      <li><span class='bold'>Elicit</span>：We first identified the key issues and challenges in the current market,
        explored the advantages of our product, and aligned them with market demands.
      </li>
      <li><span class='bold'>Prototype</span>：After clarifying the background and key points of business design, we
        developed a revenue model and pricing strategy.
      </li>
      <li><span class='bold'>Iterate</span>：After completing the initial business design, we further refined it based on
        business calculations.
      </li>
      <li><span class='bold'>Consolidate</span>：After continuous iteration and optimization, we integrated the existing
        content and explored future expansion and application directions.
      </li>
    </ul>

    <h1 id='1. Business Model Canvas'>1. Business Model Canvas</h1>

    <h1 id='2. Market'>2. Market</h1>

    <h2>Target User Profile</h2>
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
    <p class='tip'>YanIn Technology is a high-tech company focused on providing digital platforms for the biopharmaceutical field,
      offering comprehensive digital solutions related to genomics, proteomics, and synthetic biology. The company is
      dedicated to enhancing the efficiency and accuracy of biopharmaceutical research through advanced algorithms,
      artificial intelligence, and big data processing, helping research institutions and enterprises achieve
      breakthrough progress in digital transformation. In this interview regarding business models, we conducted an
      in-depth discussion on the technical feasibility, market demand, application prospects, revenue model, and
      promotion strategies for Atlas. Based on our project situation, we developed a corresponding commercialization
      plan.
    </p>

    <h5>Table. Interview Transcripts with YanIn</h5>

    <p>Through the interview, we further validated the <span class='bold'>market demand</span> and <span class='bold'>
      technical feasibility</span> of the Atlas software, and <span class='bold'>adjusted design measures</span> based
      on the business advice received. Moving forward, we will continue to deepen our presence in the enterprise user
      market, enhance product features, and ensure the project’s sustainable development through flexible profit models
      and marketing strategies.</p>

    <h1 id='3. Profit Model Design'>3. Profit Model Design</h1>
    <h2>Membership-based Profitability</h2>
    <p>During the market analysis and assessment of Atlas.Y, we gained a deep understanding of the needs and
      expectations of users at various levels, particularly the impact of the SHEEL framework on different users. </p>
    <p>Based on this research, we developed a flexible and attractive membership system that will better meet the
      diverse needs of users, enhance user engagement, and create lasting value for the company.</p>

    <blockquote>
      <span class='bold'>SHEEL</span> typically refers to the five core dimensions involved in technical projects: <span
      class='bold'>Social, Health, Environmental, Ethical, and Legal considerations.</span> Each dimension is closely
      related to the project's social responsibility, health impact, environmental sustainability, ethical compliance,
      and legal risks during technical development and application.
    </blockquote>


    <h2>Algorithm Store</h2>
    <p>The algorithms offered in the <span class='bold'>algorithm store</span> can be purchased on demand by users to
      meet specific or infrequent research needs. Such in-app purchases provide flexibility for users while generating
      an additional source of income for the software.</p>

    <h4>Product List</h4>
    <ol>
      <li><span class=bold>Site-Specific CAD Scoring System</span></li>
      <p>The CAD scoring algorithm provides a quantitative evaluation of the structural similarity between a protein's
        active site and a reference model. This algorithm assesses the accuracy and physical realism of a protein model
        by calculating the differences in residue-residue contact areas. By selecting specific sites for the protein,
        users can obtain CAD scores for these locations, enabling precise evaluation of the structural fidelity and
        potential functionality of the site.</p>

      <li><span class=bold>Temporal Dynamic Localization Design System</span></li>
      <p>The Temporal Dynamic Localization Design System utilizes light-sensitive components and localization tags to
        achieve time-controlled regulation of protein localization. This system can precisely manipulate the positioning
        of proteins within cells or other environments, aiding in the study of protein behavior, interactions, and
        functions over time.</p>

      <li><span class=bold>Optimized Protein Evolution Localization System</span></li>
      <p>The Optimized Protein Evolution Localization System uses computational algorithms to assist in protein
        evolution. Based on the user's selection of a specific organelle, the system evolves the user's fusion protein
        to be suitable for localization within that organelle. This system is a powerful tool in the field of protein
        engineering, aiding in the design of proteins with enhanced localization capabilities and functionality tailored
        to specific cellular environments.</p>

      <li><span class=bold>Protein Localization Prediction System</span></li>
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
      <li><span class=bold>Advertising Display Revenue</span>: We will earn revenue based on the number of ad
        impressions (i.e., cost per thousand impressions, CPM). Ads will appear in non-intrusive areas of the software
        to ensure they do not disrupt the user experience while increasing ad visibility.
      </li>
      <li><span class=bold>Click-Through Revenue Sharing</span>: When users click on ads and visit the advertisers'
        content, we will share revenue with advertisers based on the number of clicks (cost per click, CPC). This model
        enhances ad interactivity while providing continuous revenue growth for the platform.
      </li>
    </ul>
    <p>This advertising revenue strategy will help us generate income from our free user base and offer advertisers an
      efficient channel to directly reach relevant researchers, research teams, and other target user groups.</p>

    <h2>Academic Discounts</h2>
    <h4>Purpose and Alignment with Human Practices</h4>
    <p>The <span class=bold>academic discount</span> initiative aims to make advanced bioinformatics tools accessible to
      researchers and educational institutions that may face budget constraints. By offering significant discounts, the
      Atlas platform not only promotes research but also aligns with core values of <span
        class='bold'>social equity</span> and <span class='bold'>inclusivity</span>. Providing affordable access to
      cutting-edge technologies helps academic users advance their work in life sciences, public health, and
      environmental studies, thereby contributing to the common good.</p>
    <p>This initiative supports the <span class=bold>Integrated Human Practices</span> philosophy by ensuring that
      knowledge and technology are not limited to commercial entities but are accessible to educational and research
      institutions that work for the betterment of society. By enabling more research on issues such as sustainability,
      global health, and environmental protection, the Atlas platform contributes to long-term societal benefits.</p>

    <h4>Academic Discount and Technology Transfer</h4>
    <p>The <span class=bold>academic discount</span> is structured to provide up to <span class=bold>50% off</span> for
      educational institutions, ensuring that financial limitations do not impede scientific progress. By offering
      different pricing tiers (Basic, Professional, and Enterprise), the platform caters to both small and large
      research groups, allowing them to access essential tools at discounted rates.</p>
    <ul>
      <li><span class=bold>Human Practices Impact</span>: By lowering the cost barrier, academic users are empowered to
        conduct more research on <span class=bold>socially relevant issues</span> like climate change, public health,
        and biotechnological advancements, which have far-reaching benefits for society.
      </li>
      <li><span class=bold>Technology Transfer</span>: In addition to discounts, Atlas promotes the <span class=bold>
        transfer of technology</span> from research institutions to industry. By facilitating partnerships between
        academic researchers and commercial entities, Atlas enables the commercialization of breakthrough innovations
        that emerge from academic research. This model fosters collaboration, ensuring that socially beneficial
        technologies, such as sustainable agricultural methods or medical innovations, reach broader markets.
      </li>
      <li><span class=bold>Ethical Considerations</span>: Technology transfer agreements emphasize <span class=bold>fair
        licensing practices</span>, ensuring that original researchers are credited and compensated for their work.
        Additionally, non-exclusive licensing for educational purposes ensures that these innovations remain accessible
        for public benefit, while exclusive licenses allow for targeted commercial applications.
      </li>
    </ul>

    <h4>Social Care and Sustainability</h4>
    <p>By offering academic discounts and focusing on technology transfer, the Atlas platform embodies a commitment to
      <span class=bold>social responsibility</span>. This approach ensures that advancements in technology are not just
      commercialized but are also shared with the broader academic community, which often drives research for societal
      improvement.</p>
    <ul>
      <li><span class=bold>Sustainability and Social Impact</span>: Discounts enable researchers to contribute to
        sustainability initiatives, fostering projects that aim to reduce environmental impact. Atlas helps bridge the
        gap between <span class=bold>academic research</span> and <span class=bold>real-world applications</span>,
        empowering researchers to bring innovative, sustainable solutions to life.
      </li>
    </ul>

    <h4>Measurable Impact</h4>
    <ul>
      <li><span class=bold>Long-term Societal Benefits</span>: Supporting research through affordable tools accelerates
        <span class=bold>scientific discoveries</span> that can address societal challenges such as disease prevention,
        environmental protection, and resource management.</li>
      <li><span class=bold>Broad Access</span>: More institutions, especially those in <span class=bold>developing
        regions</span>, will have the opportunity to participate in global scientific advancements, ensuring more
        inclusive progress.</li>
    </ul>

    <h1 id='4. Competitor analysis and product pricing'>4. Competitor analysis and product pricing</h1>
    <h2>Market Bioinformatics Tool Price</h2>
    <h5>Table. Bioinformatics Tools Market Price</h5>
    <p>Subscription models are commonly used by users who frequently access tools, covering functionalities from
      sequence analysis to experimental management, making them suitable for academic research and commercial users.
      Pay-per-use models offer greater flexibility and are ideal for users who need occasional access to advanced
      features. For large research institutions and companies, enterprise subscription models provide advanced
      functionalities and team collaboration tools, with higher pricing, meeting the needs of data security and
      high-performance computing.</p>
    <p>This chart presents the pricing ranges of key bioinformatics tools, covering subscription models, pay-per-use
      options, and enterprise-level subscription plans. The price ranges span from €49 (e.g., Geneious basic
      subscription) to €500 (e.g., Schrödinger Enterprise edition). Different colors distinguish the products, visually
      demonstrating their market positioning and pricing strategy variations. This information serves as a valuable
      reference for formulating competitive pricing strategies and lays the groundwork for capturing market share.</p>

    <h2>SWOT Analysis</h2>

    <h2>Atlas Pricing</h2>
    <h4>Overview</h4>
    <h5>Table. Atlas Pricing</h5>

    <h4>Pricing Strategy</h4>
    <p>The chart illustrates a comparison between individual purchase prices and bundled package prices for algorithm
      tools. </p>

    <p class='tip'>The left chart lists the individual prices for four tools: Protein Localization Prediction System (around €10),
      Optimized Protein Evolution Localization System (around €20), Temporal Dynamic Localization Design System (around
      €15), and Site-Specific CAD Scoring System (around €7).
    </p>
    <p class='tip'>The right chart shows the prices for five different packages, including the "Common Combination" (€15),
      "Advanced Functionality Combination" (€20), "Multiple Uses Package" (€35), "All-in-One Package (1 use of each)"
      (€40), and "All-in-One Package (5 uses of each)" (€150). These packages offer significant discounts compared to
      individual purchases, with validity periods ranging from 30 to 365 days.
    </p>
    <p class='tip'>This image compares the pricing ranges for various bioinformatics tools used by both individual users and
      enterprise users. Alongside these well-known platforms, our product stands out with a Professional Membership
      priced at just €30 per month for individual users, offering unlimited access to advanced algorithm tools. This is
      ideal for researchers who need frequent and flexible usage. For enterprise users, our Enterprise Membership starts
      at €100 per month, providing not only the same powerful tools but also enhanced team management features and
      top-tier data security, catering to larger research institutions and biotech companies.Unlike Schrödinger,
      Benchling, and Geneious, which have monthly subscriptions ranging from €50 to €200 for individual users and up to
      €500 for enterprise users, our platform offers competitive pricing with a robust set of features tailored to
      different user needs, making it a highly attractive option for both small labs and large teams.
    </p>
    <p class='tip'>This image shows a bar chart <b>comparing the pricing plans for Professional and Enterprise
      memberships</b>.The Enterprise Annual plan costs approximately €1000, offering a 10-15% discount for annual
      payments.The Enterprise Monthly plan is priced at around €100 per month with no discount for monthly payments.The
      Professional Annual plan costs €300, saving users the cost of two months compared to monthly payments.The
      Professional Monthly plan is priced at €30 per month with no discount for monthly payments.The chart highlights
      the <b>potential savings of opting for annual subscriptions over monthly ones</b>.
    </p>

    <h1 id='5. Financial Planning'>5. Financial Planning</h1>
    <h2>Market Trend Forecast</h2>
    <p>The biotechnology tools market is expected to steadily grow from approximately €150 billion in 2023 to nearly
      €200 billion by 2025, reflecting <span class='bold'>increasing demand</span>. Our chart further breaks down growth
      trends across different market segments: <span class='bold'>subscription models (individual and enterprise) and
      pay-per-use models (individual and enterprise)</span>. While all segments are growing, the enterprise subscription
      and pay-per-use models are expanding faster and hold larger market shares, with continued growth expected. Although
      individual subscriptions have a significant market share, their growth is more stable. Overall, the market shows
      strong growth potential, particularly in enterprise subscriptions and pay-per-use models.</p>

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
    <p>Considering our highly specialized product targeting a specific field, a <span class='bold'>1% conversion rate</span>
      seems reasonable, particularly in the early market stages. This means, assuming 20,000-40,000 potential users, the
      projected number of actual paying users could be 200-400.</p>

    <h2>Revenue Forecast</h2>
    <ul>
      <li><span class='bold'>Professional Subscription (€30/month)</span>: Assuming 60% of paying users choose the
        professional version, the annual revenue would be approximately:</li>
      <ul>
        <li>200-400 users × €25 × 12 months = €72,000-€144,000/year.</li>
        <li>Most users opt for this subscription, providing a stable revenue source, making it a significant portion of
          the total income.</li>
      </ul>
      <li><span class='bold'>Enterprise Subscription (€100/month)</span>: Assuming 40% of paying users choose the
        enterprise version, the annual revenue would be approximately:</li>
      <ul>
        <li>100-200 users × €125 × 12 months = €120,000-€240,000/year.</li>
        <li>This is the primary revenue source, indicating that enterprise customers are willing to pay more for premium
          features and services.</li>
      </ul>
      <li><span class='bold'>Pay-Per-Use (€15/use)</span>: Assuming 30% of users opt for the pay-per-use model, with an average of 5 uses per user per year, the annual revenue would be approximately:</li>
      <ul>
        <li>60-120 users × €15 × 5 uses = €4,500-€9,000/year.</li>
        <li>While limited in usage, it provides additional income, particularly for occasional users, helping to
          increase the overall customer base.</li>
      </ul>
      <li><span class='bold'>Advertising Revenue</span>: Minimum ad revenue is estimated at €5,000, with a maximum of
        €15,000. This accounts for a small proportion of total revenue but serves as a useful supplement to
        non-user-paid income streams.</li>
    </ul>
    <p>The projected annual revenue is between <span class='bold'>€201,500 and €408,000</span>, with <span class='bold'>
      enterprise subscriptions</span> being the main revenue driver. Professional subscriptions also provide a relatively
      stable cash flow, while pay-per-use and advertising revenues, though smaller in proportion, add flexibility and
      diversity to the overall income.</p>

    <h2>Cost Estimation</h2>
    <p><span class='bold'>The total annual cost for the first year</span> is estimated to range between <span class='bold'>
      ¥595,000 and ¥1,219,000 (€76,000 to €156,000).</span></p>

    <p>Detailed cost analysis is as follows：</p>
    <h5>Table. Detailed cost analysis</h5>

    <h2>Break-even Analysis</h2>
    <p>We estimated the annual revenue from the global market in euros, with a projected range of <span class='bold'>
      €201,500 to €408,000</span>. Considering the company operates in China, costs are calculated in RMB, with a total
      annual cost range of <span class='bold'>€76,000 to €156,000 (converted to euros).</span> The revenue vs. cost
      comparison chart illustrates the company’s financial structure, showing that even in the most conservative scenario,
      revenues exceed costs, demonstrating profitability. We also expect the first year’s costs to be the highest in
      recent years.</p>

    <h3>Break-even Analysis</h3>
    <ul>
      <li><span class='bold'>Minimum Revenue vs. Minimum Cost</span>: Minimum revenue is €201,500, and minimum cost is
        €76,000.</li>
      <p>Profit: €201,500 - €76,000 = <span class='bold'>€125,500</span></p>
      <p>With minimum costs, the company can achieve a profit of €125,500.</p>

      <li><span class='bold'>Maximum Revenue vs. Maximum Cost</span>: Maximum revenue is €408,000, and maximum cost is
        €156,000.</li>
      <p>Profit: €408,000 - €156,000 = <span class='bold'>€252,000</span></p>
      <p>Under the highest revenue and cost conditions, the company can achieve a profit of €252,000.</p>

      <li><span class='bold'>Maximum Profit</span>: Maximum revenue of €408,000 and minimum cost of €76,000 result in
        the highest profit: €408,000 − €76,000 = <span class='bold'>€332,000</span></li>
      <p>Under this scenario, the company’s maximum profit would be €332,000, with a profit margin of 22.6%.</p>

      <li><span class='bold'>Minimum Profit</span>: Minimum revenue of €201,500 and maximum cost of €156,000 result in a
        minimum profit: €201,500 − €156,000 = <span class='bold'>€45,500</span></li>
      <p>Even in the case of minimum revenue and maximum costs, the company would still achieve a profit of €45,500,
        with a profit margin of 81.4%.</p>
    </ul>
    <p>Given the current revenue and cost structure, the company is already profitable, and with increased revenue and
      cost optimization, profit margins will further expand.</p>

    <h3>LTV to CAC</h3>
    <ol>
      <li>Customer Acquisition Cost (CAC)</li>
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

      <li>Customer Lifetime Value (LTV)</li>
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

      <li>LTV to CAC Ratio</li>
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
    </ol>

    <h1 id='6. Future Development'>6. Future Development</h1>
    <h2>Accelerator</h2>
    <p>For a startup, support from an <span class='bold'>accelerator</span> is crucial, and we are fortunate to have
      received strong backing from <span class='bold'>Tongji University Entrepreneurship Valley</span>. As a
      world-renowned university, Tongji University offers our project a wealth of resources and a broad platform.
      Entrepreneurship Valley not only provides us with office space and entrepreneurial training, but also connects us
      with potential investors, corporate clients, and technical experts through its extensive alumni network and
      cooperative resources. This support has not only accelerated our project progress, but has also enabled us to
      engage in deep discussions with industry leaders at an early stage, gaining critical market and technical
      feedback.</p>
    <p>As one of China’s leading university incubators, Tongji University Entrepreneurship Valley has <span class='bold'>
      a comprehensive acceleration service system</span>, offering full support to our project, from business model
      optimization, fundraising guidance, to marketing strategies. Particularly in the early stages of financing planning,
      business model validation, and market strategy formulation, the expert team at Entrepreneurship Valley has provided
      valuable advice, helping us identify our market position and clarify our development path in a highly competitive
      environment.</p>
    <p>With the support of Tongji Entrepreneurship Valley, we are able to efficiently access market information and
      quickly connect with policy support and industry resources. For instance, through connections with government
      bodies and industry associations, we can prioritize participation in various innovation and cooperation projects
      within the biotechnology sector. This has not only accelerated our commercialization process but has also enhanced
      our influence in the bioinformatics industry.</p>
    <p>In August 2024, we officially joined the Tongji University Entrepreneurship Valley incubation base. With the
      support of Tongji Entrepreneurship Valley, we are more confident that the Atlas project will achieve significant
      breakthroughs in the biotechnology field and gradually reach global markets. Entrepreneurship Valley has not only
      provided us with resources and networks, but also revealed broader opportunities for future development. Through
      this accelerator platform, we will continue to innovate and drive the project towards higher levels of commercial
      success and social impact.</p>

    <h2>Strategies for Sustained Revenue Growth</h2>
    <ol>
      <li>Membership Upgrade Strategy:</li>
      <p>Encourage users to transition from free or pay-per-use models to subscription plans by offering incentives. For
        example, users can receive discounts for upgrading, or access to additional services like premium features,
        priority support, or exclusive content. A tiered subscription model can also motivate users to upgrade by
        highlighting the benefits of higher-tier plans, such as increased usage limits or faster processing times.</p>
      <li>Value-Added Services:</li>
      <p>Introduce extra paid services or premium features to boost revenue. This could include offering advanced data
        analysis tools, personalized reports, or customization options tailored to specific customer needs. Technical
        support could be offered as a subscription service, or users could pay for specific consultations or expert
        advice. These add-ons will create new income streams while improving customer satisfaction.</p>
      <li>Cross-Selling and Bundling:</li>
      <p>Develop bundle deals that combine your primary bioinformatics tools with complementary products, such as
        related databases or third-party software. Offering discounted packages for multiple tools or features can
        incentivize users to purchase more, increasing overall revenue. Cross-selling within your existing user base is
        an effective way to promote upgrades or additional products.</p>
    </ol>

    <h2>Marketing Strategy</h2>

    <h3>Brand Promotion in the Scientific Community</h3>
    <ul>
      <li><span class='bold'>Collaboration with Research Institutions:</span></li>
      <p>Promote the product through partnerships with renowned global research institutions, universities, and
        laboratories. Sponsoring academic conferences, workshops, or webinars in related fields can increase the
        product’s visibility in the biotechnology community.</p>
      <li><span class='bold'>Case Studies and Academic Papers:</span></li>
      <p>Publish successful case studies and academic papers demonstrating the software’s real-world applications, such
        as optimizing yeast metabolic pathways. This not only enhances brand credibility but also attracts high-end
        clients.</p>
    </ul>

    <h3>Online and Offline Promotion</h3>
    <li><span class='bold'>Targeted Advertising:</span></li>
    <p>Run targeted ads on platforms like Google Ads, LinkedIn, and ResearchGate, focusing on researchers and companies
      in the fields of metabolic engineering and biopharmaceuticals.</p>
    <li><span class='bold'>Video Content Creation:</span></li>
    <p>Collaborate with well-known Bilibili content creators in the biotech space to produce software demos, feature
      walkthroughs, and tutorials, enhancing the product’s appeal and usability through visual content.</p>
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
    <p>Assuming that the number of customers and market share will gradually increase, while also considering that the costs are higher in the first year and will decrease over time, and the revenue will gradually grow. We made the following assumptions for the projection:</p>
    <ul>
      <li><span class='bold'>Customer growth</span>: Assuming an annual growth rate of 10%-15%, starting from the first
        year with 200-400 paying users, and gradually increasing.</li>
      <li><span class='bold'>Cost reduction</span>: Due to the initial investment in hardware and infrastructure, the
        costs will be higher in the first year but will gradually decrease in the following years.</li>
      <li><span class='bold'>Revenue growth</span>: As the number of customers increases, it is expected that revenue
        will achieve significant growth over 3, 5, and 10 years.</li>
    </ul>
    <p>Here is the 3-year, 5-year, and 10-year projection for revenue, cost, and profit, considering both minimum and
      maximum scenarios. The chart illustrates the steady growth in revenue, gradual reduction in costs, and subsequent
      increase in profits over time. </p>

    <h2>Risk Consideration and Avoidance</h2>

    <h3>Political Factors</h3>
    <ul>
      <li><span class='bold'>Risks</span>: The bioinformatics tools market has limited government policy support, and
        there is a lack of unified global regulations, especially regarding data privacy and biotechnology laws.
        Companies operating in multiple countries must comply with different regulatory requirements, which may increase
        compliance costs.
      </li>
      <li><span class='bold'>Mitigation Measures:</span></li>
      <ul>
        <li><span class='bold'>Diverse Regulatory Response</span>: Establish a dedicated compliance team to interpret
          and audit regulations in each market, ensuring the product’s legality in various regions. Engage with
          regulatory agencies to participate in policy discussions and anticipate potential policy changes.
        </li>
        <li><span class='bold'>Adaptability in International Operations</span>: Design software with flexible data
          privacy management to meet various data regulations (e.g., GDPR, CCPA), ensuring global adaptability.
        </li>
      </ul>
    </ul>

    <h3>Economic Factors</h3>

    <ul>
      <li><span class='bold'>Risks</span>: Target users, including academic institutions and biotech startups, are
        highly price-sensitive. Global economic fluctuations may reduce customer numbers or lead to subscription
        cancellations. Under the subscription model, users' long-term payment ability could be affected by economic
        volatility.</li>
      <li><span class='bold'>Mitigation Measures:</span></li>
      <ul>
        <li><span class='bold'>Flexible Pricing Strategy</span>: Offer tiered pricing plans, including discounts or
          installment payment options for small research teams or startups. Additionally, expand the pay-per-use model
          to reduce the financial burden on customers.</li>
        <li><span class='bold'>Proactive Response to Economic Fluctuations</span>: Regularly conduct market research to
          adjust pricing strategies based on global economic conditions, and offer discounts for long-term contracts to
          ensure steady income during economic downturns.</li>
      </ul>
    </ul>

    <h3>Social Factors</h3>
    <ul>
      <li><span class='bold'>Risks</span>: With the rapid development of personalized medicine and genomics, demand for
        customized services is increasing. Moreover, there is growing public concern about corporate transparency and
        ethical issues, particularly in the field of gene editing.</li>
      <li><span class='bold'>Mitigation Measures:</span></li>
      <ul>
        <li><span class='bold'>Expansion of Customized Services</span>: Continuously optimize software features to offer
          personalized analysis tools for diverse client needs, especially in personalized medicine and genomic
          research. Allow customers to adjust software modules based on their projects.</li>
        <li><span class='bold'>Transparency in Social Responsibility</span>: Emphasize the company's commitment to data
          privacy, ethics, and social responsibility on the website and promotional materials, and regularly publish
          social responsibility reports to build public trust.</li>
      </ul>
    </ul>

    <h3>Technological Factors</h3>
    <ul>
      <li><span class='bold'>Risks</span>: Rapid technological advancements, especially in AI, machine learning, and big
        data, drive innovation in bioinformatics tools. Companies must iterate quickly to avoid being surpassed by
        competitors.</li>
      <li><span class='bold'>Mitigation Measures:</span></li>
      <ul>
        <li><span class='bold'>Accelerated R&D</span>: Set up a dedicated R&D team to maintain technological leadership,
          regularly releasing new features and updates. Collaborate with leading research institutions and tech
          companies to access the latest technology and accelerate innovation through joint development.</li>
        <li><span class='bold'>Integration of AI and Big Data</span>: Incorporate AI and big data technologies into the
          product to improve analysis capabilities, meeting user demand for more efficient and precise data processing,
          thus maintaining technological competitiveness.</li>
      </ul>
    </ul>

    <h3>Environmental Factors</h3>

    <ul>
      <li><span class='bold'>Risks</span>: There is growing global concern for sustainability, with increased demands on
        bioinformatics companies regarding server energy consumption and environmentally friendly data center design.
        Users and investors are placing greater emphasis on corporate sustainability performance.</li>
      <li><span class='bold'>Mitigation Measures:</span></li>
      <ul>
        <li><span class='bold'>Adoption of Green Technologies</span>: Prioritize high-efficiency, low-carbon data
          centers and servers, ensuring the company’s environmental efforts align with global sustainability goals.
          Obtain environmental certifications to enhance market competitiveness.</li>
        <li><span class='bold'>Commitment to Sustainability</span>: Minimize environmental impact during product
          development and operations, actively participate in sustainability programs and environmental initiatives, and
          demonstrate the company’s responsibility and long-term commitment to sustainable development.</li>
      </ul>
    </ul>

    <h3>Legal Factors</h3>

    <ul>
      <li><span class='bold'>Risks</span>: The project involves numerous patents and intellectual property, especially
        in the development of new algorithms and technologies, which could lead to intellectual property disputes.
        Additionally, with the global spread of data privacy regulations such as GDPR, ensuring data security and
        privacy compliance is a significant challenge.</li>
      <li><span class='bold'>Mitigation Measures:</span></li>
      <ul>
        <li><span class='bold'>Intellectual Property Protection</span>: Ensure relevant patent and intellectual property
          licenses are obtained during software development, and promptly apply for patent protection for newly
          developed algorithms and technologies to avoid infringement disputes.</li>
        <li><span class='bold'>Data Privacy Compliance</span>: Ensure the software complies with various privacy laws,
          particularly when handling sensitive data. Strictly adhere to GDPR and other relevant regulations, and conduct
          regular data security audits to ensure platform compliance.</li>
      </ul>
    </ul>

    <h2>Future</h2>

    <p>The Atlas software we have developed is a molecular tag design tool for optimizing subcellular localization of
      yeast enzymes, and it has already demonstrated immense potential in the fields of biotechnology and synthetic
      biology. Looking ahead, Atlas will not only become an essential tool for researchers but also propel global
      biomanufacturing technology towards a more efficient and precise future.</p>
    <p>As the biopharmaceutical and synthetic biology markets continue to thrive, the commercial value of Atlas will
      keep rising. There is a strong demand from enterprise users for precise and efficient bioinformatics tools. With
      its self-developed optimization algorithms and databases, Atlas can offer seamless solutions across
      biopharmaceuticals, gene editing, and fermentation engineering. In the future, we plan to expand Atlas’s
      application scenarios, serving not only academic institutions and corporate laboratories but also the entire
      biopharmaceutical production chain, from drug development to industrial manufacturing, where Atlas could play a
      critical role.</p>
    <p>We envision that through customized services and big data integration, Atlas will become a leader in the global
      bioinformatics market, offering more value-added services to enterprise users. This will create diverse revenue
      streams, such as data services, integrated experimental workflows, and modular solutions. Building on
      collaborations with industry leaders like GenScript, Atlas will continuously evolve to become a vital part of the
      platform ecosystem, gaining broader market share through ongoing optimization and innovation.</p>
    <p>From a societal perspective, the commercialization of Atlas not only drives innovation in the bioinformatics
      field but also has far-reaching positive impacts. Against the backdrop of the rise of synthetic biology and
      personalized medicine, Atlas can help improve drug development efficiency and shorten the biopharmaceutical cycle,
      thereby accelerating the development and application of new drugs. This will greatly enhance the accessibility of
      medical resources, enabling more patients worldwide to benefit from advanced treatments and ultimately
      contributing to improved global health outcomes.</p>
    <p>Additionally, with the increasing focus on sustainable development worldwide, Atlas can play a role in areas such
      as biofuels and green chemistry, by precisely optimizing biosynthetic pathways, reducing energy consumption, and
      minimizing the use of chemical reagents, thus promoting the widespread adoption of environmentally friendly
      production methods. We believe that Atlas is not just a software tool; it will become a driving force for the
      future green economy and the biotechnology revolution.</p>
    <p>We are confident that Atlas will become an indispensable digital tool in the global biotechnology field, helping
      more companies and research institutions achieve digital transformation in biotechnology, and advancing the
      development of global biopharmaceuticals and the green economy.</p>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
import { ref } from 'vue'

const activeCircle = ref<number | null>(-1)
const activeBox = ref<number | null>(null)

const textContents = ref<string[]>([
  '<h3>Elicit</h3>' +
  '<ul><li>2024.4</li>' +
  '<ul><li>Conducted surveys and extracted three user profiles to identify pain points and expectations</li>' +
  '<li>Identified the timing of user needs</li>' +
  '<li>Extracted three target user profiles</li>' +
  '<li>Identified the timing of demand</li></ul>' +
  '<li>2024.7</li>' +
  '<ul><li>Collected market prices of competing products</li>' +
  '<li>Conducted SWOT analysis</li></ul>' +
  '<li>2024.8.10</li>' +
  '<ul><li>Consulted YanYin Technology</li>' +
  '<li>Extracted 6 keys of design strategies</li></ul>',

  '<h3>Prototype</h3>' +
  '<ul><li>2024.8</li>' +
  '<ul><li>Designed a membership-based model, generating revenue from an algorithm store, package deals, and ads</li>' +
  '<li>Established academic discounts, assessing their social impacts</li>' +
  '<li>Set pricing for individual and enterprise memberships</li>' +
  '<li>Determined the unit and package combination prices for the algorithm store</li></ul>' +
  '<li>2024.9</li>' +
  '<ul><li>Created a business model canvas</li></ul>',

  '<h3>Iterate</h3>' +
  '<ul><li>2024.8 - 2024.9</li>' +
  '<ul><li>Predicted market trends and adjusted pricing and revenue systems</li>' +
  '<li>Forecasted revenue, estimated costs and analyzed profit and loss</li>' +
  '<li>Calculated CAC-to-LTV ratio</li>' +
  '<li>Outlined future direction and performed financial planning</li></ul>' +
  '<li>2024.9</li>' +
  '<ul><li>Conducted PESTEL analysis to assess risks at various levels and develop risk mitigation strategies</li></ul>',

  '<h3>Consolidate</h3>' +
  '<ul><li>2024.9.14</li>' +
  '<ul><li>Sought accelerators and joined Tongji University’s Innovation Valley</li></ul>' +
  '<li>2024.9</li>' +
  '<ul><li>Made reasonable phase forecasts and expectations</li>' +
  '<li>Developed four major marketing strategies</li>' +
  '<li>Established a strategy for sustained revenue growth</li></ul>' +
  '<li>2024.10</li>' +
  '<ul><li>Envisioned the future</li></ul>'
])

const showText = (index: number) => {
  activeBox.value = index
  activeCircle.value = index
}

const hideText = () => {
  activeBox.value = null
  activeCircle.value = null
}
</script>

<style scoped>
@import '@/styles/style.css';
.EPIC {
  position: relative;
}

.EPIC .grey-line {
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
  top: 72px;
  left: 570px;
}

.circle2 {
  background-color: #FFE269;
  top: 190px;
  left: 50%;
  transform: translateX(-50%);
}

.circle2-1 {
  background-color: #FFE269;
  top: 234px;
  left: 308px;
}

.circle3 {
  background-color: #FFB5A8;
  top: 355px;
  left: 50%;
  transform: translateX(-50%);
}

.circle3-1 {
  background-color: #FFB5A8;
  top: 398px;
  left: 570px;
}

.circle4 {
  background-color: #84C8B1;
  top: 518px;
  left: 50%;
  transform: translateX(-50%);
}

.circle4-1 {
  background-color: #84C8B1;
  top: 562px;
  left: 308px;
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
}

.text-box-right-top {
  top: 0;
  right: 0;
  width: 270px;
  height: 550px;
}

.text-box-left-top {
  top: 0;
  left: 0;
  width: 270px;
  height: 520px;
}

.text-box-right-bottom {
  bottom: 0;
  right: 0;
  width: 270px;
  height: 480px;
}

.text-box-left-bottom {
  bottom: 0;
  left: 0;
  width: 270px;
  height: 400px;
}
</style>
