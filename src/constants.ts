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
    image: "/assets/ocr.png",
    description: "A Squeeze-and-Excitation Transformer Network for Khmer Optical Character Recognition.",
    tech: ["Deep Learning", "Transformers", "Computer Vision"],
    github: "https://github.com/netra-ai-lab/Khmer-OCR-CNN-Transformer/tree/master"
  },
  {
    id: "r2",
    type: "research",
    name: "AkaraAlpha: Transliteration Model",
    image: "/assets/akaraalpha.png",
    description: "An efficient Romanized Khmer-Khmer Script Transliteration Model converting Latin alphabet into Khmer script.",
    tech: ["NLP", "Transliteration", "LSTMs/Transformers"],
    github: "https://github.com/netra-ai-lab/Romanized-Khmer-to-Khmer-Transliteration"
  },
  {
    id: "r3",
    type: "research",
    name: "Multilingual Textline Detection via YOLO26",
    image: "/assets/detection.png",
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
    image: "/assets/palmleave.png",
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
    image: "/assets/lung.png",
    date: "Nov 23, 2023",
    journal: "Asean Conference on Emerging Technology (ACET)",
    description: "A hybrid CNN-Random Forest model to classify lung nodules from CT-scans into benign, normal, or malignant.",
    details: "Through this research, a dataset collected from Iraqi hospitals was used on the hybrid convolutional neural network and random forest model (CNN-RF) to classify nodules. The proposed model gives an accuracy of 94% on the testing set, significantly aiding radiologists in identification.",
    tech: ["CNN", "Random Forest", "HealthTech"],
    link: "https://www.researchgate.net/publication/385662406_Lung_Cancer_Classification_Based_on_CT_Images_Using_Hybrid_Convolutional_Neural_Network-Random_Forest_Model"
  }
];

export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const POSTS: Post[] = [
  {
    id: "p1",
    slug: "khmer-script-processing",
    title: "Deep Learning in Khmer Script Processing",
    date: "2024-03-12",
    excerpt: "Exploring the challenges of Khmer character segmentation and how transformers are changing the OCR landscape.",
    content: `
# Challenges in Khmer Script OCR

Khmer script, with its 33 consonants, 24 vowels, and complex stacking mechanism (subscripts), presents a unique challenge for traditional OCR systems.

## The Stacking Problem

In Khmer, many consonants have a "subscript" form. These are written below the primary consonant, sometimes even shifting the entire word's baseline.

### Traditional Approaches
Early OCR systems used handcrafted features which were brittle.

### Deep Learning Shift
With the advent of CNNs and later Transformers, we can now handle these spatial relationships more effectively.

## Transformers in OCR

Attention mechanisms allow the model to look at the entire context of a line, ensuring that ambiguous characters are resolved based on linguistic patterns.
    `,
    tags: ["Deep Learning", "OCR", "Khmer"]
  },
  {
    id: "p2",
    slug: "document-restoration-unets",
    title: "Document Restoration with U-Nets",
    date: "2023-11-05",
    excerpt: "A deep dive into using Attention U-Nets for cleaning noisy historical manuscripts.",
    content: `
# Historical Document Restoration

Historical manuscripts often suffer from degradation, mold, and ink bleed-through.

## Why U-Net?

U-Net's encoder-decoder architecture with skip connections is perfect for pixel-wise restoration.

### Attention Gates
By adding attention gates, we can force the model to ignore noisy backgrounds and focus on faint ink strokes.

## Results on Palm Leaf Manuscripts
Our experiments showed that Attention U-Net variants outperform standard denoising algorithms by over 15% in PSNR metrics.
    `,
    tags: ["Computer Vision", "History", "AI"]
  },
  {
    id: "p3",
    slug: "vector-databases-shift",
    title: "The Shift to Vector Databases",
    date: "2023-08-20",
    excerpt: "Why traditional RDBMS might not be enough for your next LLM-powered application.",
    content: `
# The Rise of Vector Databases

As we move towards RAG (Retrieval-Augmented Generation) architectures, the way we store data is changing.

## RDBMS vs. Vector DB

- **RDBMS**: Perfect for structured data and ACID compliance.
- **Vector DB**: Designed for high-dimensional similarity search.

### Use Cases
- Semantic Search
- Image Retrieval
- Recommendation Engines
    `,
    tags: ["Databases", "LLM", "Engineering"]
  }
];

export const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/NDarayut' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Darayut-Nhem?ev=hdr_xprf' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nhem-darayut-298512274/' },
  { name: 'ArtStation', url: 'https://darayut.artstation.com/' }
];
