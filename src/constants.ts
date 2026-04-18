export interface ContentItem {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  details?: string;
  date?: string;
  journal?: string;
  type: 'research' | 'project' | 'publication';
  image?: string;
}

export const RESEARCH: ContentItem[] = [
  {
    id: "r1",
    type: "research",
    name: "Khmer Optical Character Recognition",
    image: "https://picsum.photos/seed/ocr/600/400",
    description: "A Squeeze-and-Excitation Transformer Network for Khmer Optical Character Recognition.",
    tech: ["Deep Learning", "Transformers", "Computer Vision"],
    github: "https://github.com/netra-ai-lab/Khmer-OCR-CNN-Transformer/tree/master"
  },
  {
    id: "r2",
    type: "research",
    name: "AkaraAlpha: Transliteration Model",
    image: "https://picsum.photos/seed/translit/600/400",
    description: "An efficient Romanized Khmer-Khmer Script Transliteration Model converting Latin alphabet into Khmer script.",
    tech: ["NLP", "Transliteration", "LSTMs/Transformers"],
    github: "https://github.com/netra-ai-lab/Romanized-Khmer-to-Khmer-Transliteration"
  },
  {
    id: "r3",
    type: "research",
    name: "Multilingual Textline Detection via YOLO26",
    image: "https://picsum.photos/seed/yolo/600/400",
    description: "A dual-class object detection pipeline designed to localize dense multilingual textlines alongside graphical elements.",
    tech: ["YOLO", "Object Detection", "Computer Vision"],
    github: "https://github.com/netra-ai-lab/Khmer-Text-Detection"
  }
];

export const PUBLICATIONS: ContentItem[] = [
  {
    id: "p1",
    type: "publication",
    name: "Khmer Historical Document Image Restoration Using U-Net's Variants",
    image: "https://picsum.photos/seed/restore/600/400",
    date: "Dec 1, 2025",
    journal: "Insight Cambodia Journal of Basic and Applied Research",
    description: "A restoration framework for preserving Cambodia’s historical Khmer palm leaf manuscripts using U-Net architectures.",
    details: "This research introduces a document image restoration framework aimed at preserving Cambodia’s historical Khmer palm leaf manuscripts through the application of computer vision and deep learning techniques. We explore three advanced neural network architectures: U-Net, Attention U-Net, and Residual Attention U-Net. Residual Attention U-Net achieved the best performance on 48×48 patches.",
    tech: ["U-Net", "Medical Imaging Patterns", "GANs"],
    link: "https://www.researchgate.net/publication/400024812_Khmer_Historical_Document_Image_Restoration_Using_U-Net's_Variants"
  },
  {
    id: "p2",
    type: "publication",
    name: "Lung Cancer Classification Using Hybrid CNN-RF Model",
    image: "https://picsum.photos/seed/lung/600/400",
    date: "Nov 23, 2023",
    journal: "Asean Conference on Emerging Technology (ACET)",
    description: "A hybrid CNN-Random Forest model to classify lung nodules from CT-scans into benign, normal, or malignant.",
    details: "Through this research, a dataset collected from Iraqi hospitals was used on the hybrid convolutional neural network and random forest model (CNN-RF) to classify nodules. The proposed model gives an accuracy of 94% on the testing set, significantly aiding radiologists in identification.",
    tech: ["CNN", "Random Forest", "HealthTech"],
    link: "https://www.researchgate.net/publication/385662406_Lung_Cancer_Classification_Based_on_CT_Images_Using_Hybrid_Convolutional_Neural_Network-Random_Forest_Model"
  }
];

export const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/NDarayut' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Darayut-Nhem?ev=hdr_xprf' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nhem-darayut-298512274/' },
  { name: 'ArtStation', url: 'https://darayut.artstation.com/' }
];
