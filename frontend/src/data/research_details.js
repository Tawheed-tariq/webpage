import MultiModal from "../assets/research/multi_modal.jpg";
import LLM from "../assets/research/llm.jpg";
import CA from "../assets/research/ca.jpeg";
import Data from "../assets/research/data.jpg";
import Med from "../assets/research/med.jpeg";

export const researchDetails = {
  "multi-modal-learning": {
    title: "Multi-Modal Learning",
    heroImage: MultiModal,
    overview: "Multi-modal learning focuses on developing AI systems that can process and understand information across different types of data such as text, images, audio, and video. By integrating multiple modalities, these systems can develop a more comprehensive understanding of complex scenarios.",
    keyAreas: [
      "Vision-Language Pre-training",
      "Cross-modal Representation Learning",
      "Multi-modal Fusion Techniques",
      "Audio-Visual Understanding"
    ],
    applications: [
      "Visual Question Answering",
      "Image Captioning",
      "Cross-modal Retrieval",
      "Multi-modal Sentiment Analysis"
    ]
  },
  "large-langueage-modelling": {
    title: "Large Language Modelling",
    heroImage: LLM,
    overview: "Large Language Models (LLMs) represent a revolutionary approach to natural language processing, utilizing massive neural networks trained on vast text corpora to perform a wide range of language tasks with unprecedented capabilities.",
    keyAreas: [
      "Efficient Training Methods",
      "Context Length Optimization",
      "Instruction Tuning",
      "Alignment Techniques"
    ],
    applications: [
      "Text Generation and Completion",
      "Summarization",
      "Question Answering",
      "Code Generation"
    ],
    currentProjects: [
      {
        title: "Parameter-Efficient Fine-tuning",
        description: "Developing methods to adapt LLMs to specific domains with minimal additional parameters."
      },
      {
        title: "Transformer Architecture Optimizations",
        description: "Exploring novel attention mechanisms and architectural improvements for LLMs."
      },
      {
        title: "Retrieval-Augmented Generation",
        description: "Enhancing LLMs with external knowledge retrieval for improved factuality."
      }
    ]
  },
  "computer-architecture": {
    title: "AI Driven Computer Architectures",
    heroImage: CA,
    overview: "AI-driven computer architectures represent the next frontier in computing, where hardware is specifically designed to accelerate machine learning workloads while optimizing for energy efficiency, throughput, and specialized computation patterns.",
    keyAreas: [
      "Neural Processing Units",
      "In-Memory Computing",
      "Systolic Arrays",
      "Neuromorphic Computing"
    ],
    applications: [
      "Edge AI Deployment",
      "Large-scale Training Infrastructure",
      "Real-time Inference Systems",
      "Energy-efficient AI Computing"
    ],
    currentProjects: [
      {
        title: "Tensor Processing Architecture",
        description: "Designing specialized hardware for efficient tensor operations in deep neural networks."
      },
      {
        title: "Memory-Centric AI Architectures",
        description: "Exploring architectures that minimize the memory bottleneck in AI computation."
      },
      {
        title: "Reconfigurable Computing for AI",
        description: "Developing flexible hardware platforms that can adapt to different AI workloads."
      }
    ]
  },
  "distributed-computation": {
    title: "Data Algorithmics and Distributed Computation",
    heroImage: Data,
    overview: "Data algorithmics and distributed computation focus on developing efficient algorithms and systems for processing massive datasets across distributed computing environments, enabling scalable data analysis and machine learning.",
    keyAreas: [
      "Distributed Machine Learning",
      "Stream Processing Algorithms",
      "Fault-Tolerant Computing",
      "Data Partitioning Strategies"
    ],
    applications: [
      "Big Data Analytics",
      "Real-time Data Processing",
      "Large-scale Machine Learning",
      "Cloud Computing Infrastructure"
    ],
    currentProjects: [
      {
        title: "Distributed Optimization Algorithms",
        description: "Developing efficient algorithms for distributed optimization in machine learning."
      },
      {
        title: "Elastic Computing Frameworks",
        description: "Building systems that can dynamically scale resources based on computation needs."
      },
      {
        title: "Privacy-Preserving Distributed Learning",
        description: "Methods for collaborative learning while maintaining data privacy across nodes."
      }
    ]
  },
  "medical-image-analysis": {
    title: "Medical Image Analysis",
    heroImage: Med,
    overview: "Medical image analysis applies computer vision and deep learning techniques to medical imaging data, assisting healthcare professionals in diagnosis, treatment planning, and monitoring of various conditions through automated analysis.",
    keyAreas: [
      "Image Segmentation",
      "Anomaly Detection",
      "Multi-modal Medical Imaging",
      "Explainable AI for Healthcare"
    ],
    applications: [
      "Radiology Assistance",
      "Pathology Image Analysis",
      "Surgical Planning",
      "Disease Progression Monitoring"
    ],
    currentProjects: [
      {
        title: "3D Medical Image Segmentation",
        description: "Developing advanced techniques for volumetric segmentation of medical scans."
      },
      {
        title: "Few-shot Learning for Rare Conditions",
        description: "Methods to detect and diagnose rare medical conditions with limited training data."
      },
      {
        title: "Uncertainty Quantification in Diagnosis",
        description: "Techniques to provide confidence levels for AI-assisted medical diagnoses."
      }
    ]
  }
};