<template>
  <TextContent title='ROSTER' :title-list='[]'>
    <img src='https://static.igem.wiki/teams/5503/team-members/team.webp'
         alt='Team'
         style='width: 1090px; margin-top: 62px'>
    <div class='meet-our-team'>Meet our team!</div>
    <div class='tongji-software'>Tongji-Software</div>
    <div style='width: 100%; display: flex; justify-content: center'>
      <p class='team-description'>Our team is composed of passionate students and teachers from Tongji University, all
        dedicated to the field of synthetic biology. We bring together diverse academic backgrounds, personalities, and
        strengths, which is our greatest asset. United by a common goal, we are developing the Atlas.Y toolbox. This
        challenging project has strengthened our collaboration, allowing us to effectively transform complex scientific
        concepts into practical applications.We take pride in the contributions of every team member and the
        forward-thinking project we have accomplished together.</p>
    </div>
    <div class='team-name'>Team Leader</div>
    <div class='member-card'>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/shuruining.webp'
                  name='Shurui Ning'
                  role='Algorithm Development'
                  bio="Hi, I'm Shurui Ning, a bioinformatics student. I'm responsible for team coordination and the development of biological algorithms. I'm thrilled to have met like-minded friends through iGEM, and I'm excited to use bioinformatics methods to contribute to the advancement of synthetic biology."/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/jinlingyuan.webp'
                  name='Jinling Yuan'
                  role='Algorithm Development'
                  bio="Hi! I'm Jinling Yuan, majoring in bioinformatic. I have a profound appreciation for nature and life, possess an insatiable thirst for knowledge and vitality, enjoy both sports and the humanities. I am delighted to connect with you in the iGEM community."/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/jishenlin.webp'
                  name='Jishen Lin'
                  role='Software Development / Wiki Coding'
                  bio="Hi! I'm Jishen Lin, majoring in software engineering. I am passionate about full-stack development, enjoy exploring new technologies, and pursue elegant engineering practices. I look forward to interacting and learning with fellow iGEMers so we can progress together!"/>
    </div>

    <div class='team-name'>Algorithm Development</div>
    <div class='member-card'>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/xichenliao.webp'
                  name='Xichen Liao'
                  role='Algorithm Development'
                  bio="Hello everyone, I'm Xichen Liao. In our iGEM team, I'm primarily responsible for algorithm development and environment setup. My major is bioinformatics, and I enjoy playing basketball. I've greatly benefited from the iGEM experience and am truly grateful."/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/yingxu.webp'
                  name='Ying Xu'
                  role='Algorithm Development'
                  bio="Hi, I'm Ying Xu, a bioinformatics student passionate about French and music. In our iGEM team, I focus on developing algorithms. Looking forward to contributing to our project and its outcomes."/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/hengyuwang.webp'
                  name='Hengyu Wang'
                  role='Model Builder'
                  bio="Hello everyone, I'm Hengyu Wang. My major is mathematics, and I mainly take on the task of modeling in this competition. I am outgoing and enjoy playing badminton and table tennis. I hope to improve my ability to use mathematical theories to solve real-world problems in iGEM."/>
    </div>

    <div class='team-name'>Software Development and Wiki Coding</div>
    <div class='member-card'>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/shuyiliu.webp'
                  name='Shuyi Liu'
                  role='Software Development / Wiki Coding'
                  bio="Hi, I am Shuyi Liu, majoring in software engineering. I have an outgoing and lively personality, and I love exploring the beauty of life. I improved my front-end development skills in the iGEM competition and also met like-minded partners."/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/wenjianzhang.webp'
                  name='Wenjian Zhang'
                  role='Software Development'
                  bio="Hi, I'm Wenjian Zhang, a junior majoring in software engineering at Tongji University. I participated in the front-end development of Atlas.Y software. I learned and grew a lot working as a team in the competition and it was a wonderful and memorable experience to be part of the iGEM team!"/>
    </div>
    <div class='member-card' style='margin-top: 40px'>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/zhuobingzhao.webp'
                  name='Zhuobing Zhao'
                  role='Software Development'
                  bio="Hi, I'm Zhuobing Zhao, majoring in software engineering. I'm responsible for the front-end of the software. It's wonderful time that solving difficulties with my teammates. Thank all of you!"/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/jiaxinfan.webp'
                  name='Jiaxin Fan'
                  role='Software Development'
                  bio="Hello everyone! I am Jiaxin Fan, and my major is software engineering. I am part of the iGEM software team. I am quite introverted, but Tongji iGEM is a very interesting and warm team. I've learned a lot here and also made new friends."/>
    </div>

    <div class='team-name'>Art Design</div>
    <div class='member-card'>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/yiranwan.webp'
                  name='Yiran Wan'
                  role='Head of Art Design'
                  bio="Hello, everyone! I am Yiran Wan, a student of media and communication design. In this project, I am the team leader of the design part, and I am involved in coordinating the design and production of this project's web application, wiki, and video scripts. I had a great time working with all the iGEM team members!"/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/xinyudang.webp'
                  name='Xinyu Dang'
                  role='Art Design'
                  bio="Hello everyone, I'm Xinyu Dang. I am currently studying media and communication design in Tongji University. I participated in the design of wiki and software. I have a deeper understanding of teamwork and made many friends through this competition. It's a memorable experience!"/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/zhiyewang.webp'
                  name='Zhiye Wang'
                  role='Art Design'
                  bio="Hi, I'm Zhiye Wang, a student majoring in media and communication design in Tongji University and I participated in the design of the wiki, software, IP and logo. In this competition, I met great teammates, and it was a great pleasure to work with everyone!"/>
    </div>

    <div style='display: flex; flex-direction: row'>
      <div class='team-name' style='width: 824px'>Human Practices</div>
      <div class='team-name' style='width: 316px'>Wet Lab</div>
    </div>
    <div class='member-card'>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/ziwenyao.webp'
                  name='Ziwen Yao'
                  role='Head of Entrepreneurship / Edu / HP'
                  bio="Hi, I'm Ziwen Yao, a student majoring in urban design. Initially, I joined the team due to my interest in public health and public policy. In this competition, I took on the responsibilities of entrepreneurship, education, and integrated human practice. I am truly grateful for this interdisciplinary collaboration opportunity."/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/xicui.webp'
                  name='Xi Cui'
                  role='Entrepreneurship / Edu / HP'
                  bio="Hello everyone, I'm Xi Cui, a student majoring in business administration, in this competition, I am responsible for education, entrepreneurship, and integrated human practice. I've grown a lot along the way,and I am very happy to work with you all to solve problems!"/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/zhenhuabai.webp'
                  name='Zhenhua Bai'
                  role='Wet Lab'
                  bio="I'm Zhenhua Bai, a wet lab experimenter. I like blue, but hate orange. The most common words my elder martial sister says to me are: &quot;Don&apos;t forget to add orange loading&quot; and &quot;Don&apos;t add too much gel dye&quot;."/>
    </div>

    <div style='display: flex; flex-direction: row'>
      <div class='team-name' style='width: 822px'>PI</div>
      <div class='team-name' style='width: 316px'>Instructor</div>
    </div>
    <div class='member-card'>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/jingzhang.webp'
                  name='Prof. Jing Zhang'
                  role='Primary PI'
                  bio='She funded our project and supervised the procedure of the project.'/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/guohuichuai.webp'
                  name='Asst.Prof. Guohui Chuai'
                  role='Secondary PI'
                  bio='He helped us in designing and optimizing the project process, gave us guidance on algorithms, and provided a lab server for our experiments.'/>
      <MemberCard photo='https://static.igem.wiki/teams/5503/team-members/yunzhekang.webp'
                  name='Yunzhe Kang'
                  role='Instructor'
                  bio='Retirement, here I come this year!'/>
    </div>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'
import MemberCard from '@/components/MemberCard.vue'
</script>

<style scoped>
@import '@/styles/style.css';

.meet-our-team {
  text-align: center;
  font-family: 'Neo Sans Pro Bold', sans-serif;
  font-size: 32px;
  color: black;
  display: block;
  margin-bottom: 30px;
  margin-top: 74px;
}

.tongji-software {
  text-align: center;
  font-family: 'Neo Sans Pro Bold', sans-serif;
  font-size: 50px;
  color: #16396E;
  display: block;
  margin-bottom: 20px;
}

.team-description {
  text-align: center;
  width: 1100px;
}

.team-name {
  text-align: center;
  font-family: 'Futura Md BT Medium', sans-serif;
  font-size: 32px;
  color: #16396E;
  display: block;
  margin-top: 50px;
  margin-bottom: 30px;
}

.member-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  margin: 0 auto;
}

.member-card > * {
  flex: 1 1 calc(33.333% - 80px);
  max-width: calc(33.333% - 80px);
}
</style>
