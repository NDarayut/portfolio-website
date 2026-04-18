
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
    description: "A Squeeze-and-Excitation Transformer Network for Khmer Optical Character Recognition.",
    tech: ["Deep Learning", "Transformers", "Computer Vision"],
    image: "../src/assets/ocr.png"
  },
  {
    id: "r2",
    type: "research",
    name: "AkaraAlpha: Transliteration Model",
    description: "An efficient Romanized Khmer-Khmer Script Transliteration Model converting Latin alphabet into Khmer script.",
    tech: ["NLP", "Transliteration", "LSTMs/Transformers"],
  },
  {
    id: "r3",
    type: "research",
    name: "Multilingual Textline Detection via YOLO26",
    description: "A dual-class object detection pipeline designed to localize dense multilingual textlines alongside graphical elements.",
    tech: ["YOLO", "Object Detection", "Computer Vision"],
  }
];

export const PUBLICATIONS: ContentItem[] = [
  {
    id: "p1",
    type: "publication",
    name: "Khmer Historical Document Image Restoration Using U-Net's Variants",
    date: "Dec 1, 2025",
    journal: "Insight Cambodia Journal of Basic and Applied Research",
    description: "A restoration framework for preserving Cambodia’s historical Khmer palm leaf manuscripts using U-Net architectures.",
    details: "This research introduces a document image restoration framework aimed at preserving Cambodia’s historical Khmer palm leaf manuscripts through the application of computer vision and deep learning techniques. We explore three advanced neural network architectures: U-Net, Attention U-Net, and Residual Attention U-Net. Residual Attention U-Net achieved the best performance on 48×48 patches.",
    tech: ["U-Net", "Medical Imaging Patterns", "GANs"],
    link: "https://www.researchgate.net/profile/Darayut-Nhem"
  },
  {
    id: "p2",
    type: "publication",
    name: "Lung Cancer Classification Using Hybrid CNN-RF Model",
    date: "Nov 23, 2023",
    journal: "Asean Conference on Emerging Technology (ACET)",
    description: "A hybrid CNN-Random Forest model to classify lung nodules from CT-scans into benign, normal, or malignant.",
    details: "Through this research, a dataset collected from Iraqi hospitals was used on the hybrid convolutional neural network and random forest model (CNN-RF) to classify nodules. The proposed model gives an accuracy of 94% on the testing set, significantly aiding radiologists in identification.",
    tech: ["CNN", "Random Forest", "HealthTech"],
    link: "https://www.researchgate.net/profile/Darayut-Nhem"
  }
];

export const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/NDarayut' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Darayut-Nhem?ev=hdr_xprf' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nhem-darayut-298512274/' },
  { name: 'ArtStation', url: 'https://darayut.artstation.com/' }
];
