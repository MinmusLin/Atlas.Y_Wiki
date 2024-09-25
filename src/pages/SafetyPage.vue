<template>
  <TextContent title='SAFETY'
               :title-list="['Overview', 'Materials Selection', 'Laboratory', 'Safety Training']">
    <h1 id='Overview'>Overview</h1>
    <p>The safety risks associated with wet laboratory experiments cannot be ignored. After fully recognizing this, our
      team has taken all necessary precautions to ensure that the project process does not pose any harm to the
      environment or individuals.</p>
    <p>Biosafety risks refer to the potential health hazards that biological materials pose to living organisms,
      primarily humans, and the environment. During the advancement of our project, a range of issues could arise, such
      as microbial leaks and chemical reagent injuries. Here, we will outline the safety principles we have adopted,
      including chassis design, component engineering, and laboratory safety protocols.</p>

    <h1 id='Materials Selection'>Materials Selection</h1>
    <p>We utilized <span class='bold'>E.coli DH5α</span> and <span class='bold'>Pichia Pastoris X-33 Yeast</span> as
      chassis bacteria to ensure the safety of our project. These microorganisms are classified in <span class='bold'>
      risk group 1. </span>They present low risk for human safety and the environment.</p>
    <p><span class='bold'>EGFP</span> is a basic constitutively fluorescent green fluorescent protein published in 1996,
      derived from Aequorea victoria. It is reported to be a rapidly-maturing weak dimer with moderate acid sensitivity.
      Compared to the ordinary GFP protein, this mutant shows a stronger fluorescent signal. Before constructing the
      plasmid, we checked the origin of the genes we wanted to use, which all <span class='bold'>belonged to the
      whitelist</span> provided by iGEM. </p>
    <p>In the experimental process, the components of the culture medium, dyes, and other experimental chemical
      consumables all come from different biological companies, indicating that our materials are safe. DAPI, or
      4',6-diamidino-2-phenylindole, is a fluorescent dye that strongly binds to DNA and is commonly used in
      fluorescence microscopy. Since DAPI can penetrate intact cell membranes, it is utilized for staining Pichia
      pastoris.</p>

    <h1 id='Laboratory'>Laboratory</h1>
    <p>Before the actual experiments commenced, our lab instructor provided us with <span class='bold'>a comprehensive
      lab safety course</span>,detailing the basic experimental procedures we would be using, as well as emergency
      safety measures. In the early stages of the experiment, to ensure the safety of team members within the lab, each
      of us learned all the experiments under the supervision of professional scientific researchers in the biological
      lab. These experiments included simple PCR, gel electrophoresis, gel extraction, Yeast Transformation Experiment,
      and the Method for Using Laser Confocal Microscope. Attempting these crucial experiments for the first time under
      the guidance of experienced personnel who understand these processes was of great significance to us.</p>
    <p>In our lab, we have established <span class='bold'>strict and standardized rules</span> for the use of the
      laboratory. We have designated special areas for electrophoresis and the use of nucleic acid dyes. There is also a
      section dedicated to sterile operations. Eating and drinking are strictly prohibited within the lab, and we always
      wear well-protected lab coats and gloves throughout the experiment. After each experiment, we clean up all the
      generated waste and store it in a categorized manner for regular disposal.</p>
    <p>For every new equipment and each new technology we planned to use in our experiments, we prepared detailed
      instructions on how to handle them correctly in advance, following the product's user manual or protocols obtained
      through research.</p>

    <h1 id='Safety Training'>Safety Training</h1>
    <p>To ensure biosafety, prior to the start of our experiments, all students involved in the project received
      comprehensive safety training regarding laboratory practices and equipment, including ultra-clean tables,
      biological safety cabinets, fume hoods, and PCR machines. Additionally, we completed two semesters of fundamental
      courses in chemistry and organic chemistry, which provided a solid foundation for our experimental work.</p>
    <p>With the assistance of our laboratory instructor, Teacher Xing Libo, we conducted <span class='bold'>additional
      safety training</span> in the lab. The instructor introduced us to the fundamentals of biosafety, emphasizing the
      regulations related to biological and chemical operations, safe handling of biological reagents, emergency
      procedures, and waste disposal standards. She reminded us that students should follow the relevant protocols
      during experiments and that collaboration and supervision from other team members are essential before conducting
      any experiments.</p>
    <p>After the training for all members of the wet lab team was completed, we signed <span class='bold'>an additional
      safety agreement</span> for our experiments. Thanks to this training, our experiments proceeded without any
      incidents. Throughout several months of experimentation, there were no safety-related issues in the lab.</p>
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
