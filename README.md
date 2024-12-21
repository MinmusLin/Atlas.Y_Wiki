# Atlas.Y Wiki

> [!TIP]
> Our Wiki provides a comprehensive overview of Atlas.Y toolkit's development, covering every link from the concept of topic selection, design principle, and algorithm implementation to the actual construction. Besides, the advocacy strategy and human practices are also documented in detail. By visiting the Wiki, you can gain insight into the entire development process, explore our technical details and the thinking behind our decisions, and access a wealth of background information and resource support.
>
> Visit our [Wiki](https://2024.igem.wiki/tongji-software) and view our [software demonstration video](https://github.com/MinmusLin/Atlas.Y_Wiki/raw/refs/heads/main/SoftwareDemonstrationVideo.mp4)!

> [!NOTE]
>
> The iGEM Foundation certifies that the team **Tongji-Software** participated in the 2024 iGEM Competition, Undergrad Section.
>
> The team was awarded: **Gold Medal**
>
> View our [official certificate](https://github.com/MinmusLin/Atlas.Y_Wiki/raw/refs/heads/main/2024_iGEM_Competition_Official_Certificate.pdf)!

## Project Description

Atlas.Y: Advanced targeting and localization assistance system for yeast (Tongji-Software 2024 iGEM Wiki).

![](assets/Logo.png)

### Background

Over thousands of years of exploration, humanity has gradually shifted its focus from the macroscopic to the microscopic. In biology, the goal has always been to unravel life's mysteries, from organisms to cells and molecules. In recent years, rapid technological advancements have given new momentum to this vision. Super-resolution microscopy<sup>[1]</sup> has enabled scientists to surpass traditional microscope limits and observe intricate cellular details. Proteomics<sup>[2]</sup> and bioinformatics tools<sup>[3]</sup> offer fresh insights into decoding complex protein networks. These advances allow us to explore the subcellular world with remarkable clarity.

As research deepens, subcellular studies have come to the forefront, with subcellular localization becoming a key focus. Cells are highly organized systems where each molecule resides in specific subcellular regions to perform its function.

If we can precisely control protein trafficking within cells, we unlock the ability to regulate cellular functions. This not only helps decode molecular networks but also enables targeted deployment of functional modules to different regions, allowing precise control of cell behavior. we could localize proteins to mitochondria to boost metabolism or direct enzymes to the endoplasmic reticulum for optimized synthesis. This control could create "factories" at various cellular sites, supporting parallel processes. Mastering this intracellular logistics could have profound implications not only for basic research but also for revolutionary advances in biomanufacturing, drug delivery, and disease treatment.<sup>[4][5]</sup>

Targeting proteins to specific subcellular structures is complex, relying on multiple regulatory mechanisms. Signal sequences and signal patches act as "postal addresses" recognized by the cell's transport system, guiding proteins through secretion, transport, or membrane fusion to structures like the nucleus, mitochondria, endoplasmic reticulum, or lysosomes.<sup>[6]</sup>

Nevertheless, the design and functional execution of signal sequences and patches are far from straightforward. The intracellular environment is highly complex, and various signaling pathways and molecular interactions can interfere with proper protein transport and localization. Moreover, different subcellular structures have unique chemical properties and membrane characteristics. Ensuring that exogenous proteins remain stable and functional in these diverse environments continues to present significant challenges.

### Atlas.Y

Based on these considerations, Tongji-Software has developed Atlas.Y: Advanced Targeting and Localization Assistance System for Yeast, a specialized tool to assist in the subcellular localization of proteins within yeast.

When users input their requirements into the software, we search our signal peptide and linker databases to find suitable components and engineer their target proteins into fusion proteins with specific localization signals.

For the generated fusion proteins, we have a comprehensive evaluation system. First, we use the ESM-fold model for 3D structure prediction, which is a lightweight, fast, and highly accurate prediction model. Then, we apply the Rosetta model to calculate the stability of the fusion proteins, using this metric to rank them. Finally, we utilize the CAD-score model to ensure functional consistency before and after fusion.

To validate the localization efficiency of our designed fusion proteins, we use DeepLoc 2.0 for assisted prediction. The results show that the majority of the fusion proteins designed using our method can efficiently target the desired locations.

Once successfully localized, fusion proteins face another challenge—whether they can remain stable in the new subcellular microenvironment. To address this, we employ a graph-based deep learning algorithm that does not rely on MSA (multiple sequence alignment) for directed protein evolution. Through multiple rounds of training and fine-tuning, the model learns features that allow proteins to adapt to specific microenvironments.

Considering the high spatiotemporal resolution required in some research, users may need to dynamically adjust the localization of certain proteins. Therefore, we have further developed a dynamic version that utilizes optogenetics to precisely control protein localization behavior in both time and space.

### Our Vision

In the future, we will continuously focus on user experience and feedback, regularly collecting and analyzing user needs and insights from practical applications. Based on this feedback, we will consistently optimize and iteratively improve the algorithm, ensuring that the software becomes more precise and efficient in addressing diverse user requirements. Additionally, we will refine the software's design and functionality to address specific scenarios and challenges raised by users, enhancing its adaptability and flexibility under different experimental conditions.

We plan to commercialize Atlas.Y (see [Entrepreneurship](https://2024.igem.wiki/tongji-software/entrepreneurship) for details) and establish a corresponding experimental platform. Atlas.Y will serve as our initial core product, providing a stable revenue stream by addressing the market demand for protein subcellular localization. Building on this foundation, we will gradually expand our business scope, developing more innovative biotechnology solutions. Our ultimate goal is to grow the company into a multifaceted biotechnology enterprise that integrates protein design, directed evolution, and experimental solutions. We will offer comprehensive solutions from protein design to directed evolution, and further introduce tools and products for experimental use, meeting the diverse needs of both research and industrial users. This approach will not only drive technological innovation but also provide efficient and convenient resources for laboratories and production, optimizing processes and improving overall efficiency.

### References

[1] Zhang Y, Schroeder LK, Lessard MD, Kidd P, Chung J, Song Y, Benedetti L, Li Y, Ries J, Grimm JB, Lavis LD, De Camilli P, Rothman JE, Baddeley D, Bewersdorf J. Nanoscale subcellular architecture revealed by multicolor three-dimensional salvaged fluorescence imaging. Nat Methods. 2020 Feb;17(2):225-231.

[2] Lundberg E, Borner GHH. Spatial proteomics: a powerful discovery tool for cell biology. Nat Rev Mol Cell Biol. 2019 May;20(5):285-302.

[3] Gillani M, Pollastri G. Protein subcellular localization prediction tools. Comput Struct Biotechnol J. 2024 Apr 15;23:1796-1807.

[4] Oladimeji O, Akinyelu J, Singh M. Nanomedicines for Subcellular Targeting: The Mitochondrial Perspective. Curr Med Chem. 2020;27(33):5480-5509.

[5] Li J, Zou Q, Yuan L. A review from biological mapping to computation-based subcellular localization. Mol Ther Nucleic Acids. 2023 Apr 20;32:507-521. doi: 10.1016/j.omtn.2023.04.015. PMID: 37215152; PMCID: PMC10192651.

[6] Stroud RM, Walter P. Signal sequence recognition and protein targeting. Curr Opin Struct Biol. 1999 Dec;9(6):754-9.

## Relevant Repositories

* [Atlas.Y DatabaseWebAPI](https://github.com/MinmusLin/Atlas.Y_DatabaseWebAPI)
* [Atlas.Y UserInterface](https://github.com/MinmusLin/Atlas.Y_UserInterface)
* [Atlas.Y iOS Application](https://github.com/MinmusLin/Atlas.Y_iOS_Application)
* [Atlas.Y Dataset](https://github.com/MinmusLin/Atlas.Y_Dataset)

## Contact Us

Email: tongji_china2019@163.com