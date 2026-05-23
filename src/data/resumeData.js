export const resumeData = {
  personalInfo: {
    name: "Jitendra Kushwaha",
    email: "jkmaurya5426@gmail.com",
    phone: "+91 ••••• ••252",
    github: "https://github.com/JK5426",
    linkedin: "https://linkedin.com/in/jitendrakushwaha5426",
  },
  summary: "Software Engineer with 4+ years of experience specializing in Java, Spring Boot, and AI Engineering. Expertise in building scalable microservices and AI-driven solutions using GenAI, Spring AI, and Model Context Protocol (MCP). Proficient in Prompt Engineering and LLM orchestration to build intelligent agents and RAG-based systems for enterprise-grade applications.",
  skills: {
    languages: ["Java (17/21)", "Python", "JavaScript", "TypeScript", "C/C++", "SQL"],
    ai_ml: ["Generative AI", "Prompt Engineering", "Model Context Protocol (MCP)", "Spring AI", "RAG", "LLM Orchestration", "Claude & OpenAI APIs", "Vector Databases"],
    technologies: ["Spring Boot 3", "JPA", "Microservices", "REST APIs", "FastAPI", "React", "GraphQL", "PostgreSQL", "MongoDB", "OpenShift", "Docker", "Kubernetes", "Kafka", "AWS (S3, EC2, Glue)", "CI/CD (Jenkins, GitLab)"]
  },
  experience: [
    {
      company: "JP Morgan Chase",
      location: "Bangalore",
      role: "Software Engineer II",
      period: "Mar 2025 – Present",
      achievements: [
        "Architecting a secure content delivery platform for multi-GB transfers, ensuring 99.9% reliability and strict regulatory compliance.",
        "Developing an AI Agent Framework using Model Context Protocol (MCP) to allow LLMs to securely interact with internal banking tools and databases.",
        "Implemented a RAG-based AI chatbot using Spring AI and Azure OpenAI, reducing manual incident creation by 40% through automated FAQ resolution.",
        "Optimized LLM performance through advanced Prompt Engineering techniques (Chain-of-Thought, Few-Shot), improving response accuracy by 25%.",
        "Refactored legacy search modules using multi-threading and caching, reducing downstream latency by 60% and improving user throughput."
      ],
      tech: ["Java 21", "Spring AI", "MCP", "RAG", "Claude 3.5", "OpenAI", "React", "TypeScript", "Azure", "Kubernetes"]
    },
    {
      company: "Barclays",
      location: "Pune",
      role: "API Developer",
      period: "Mar 2023 – Mar 2025",
      achievements: [
        "Led the migration of a mission-critical 20-year-old legacy mainframe to a modern Spring Boot microservices architecture for loan processing.",
        "Designed and implemented complex business logic for automated loan limit calculations using Drools, processing 10k+ requests daily.",
        "Engineered end-to-end decision flows (approve, decline, refer), integrating with external credit bureaus and internal risk engines.",
        "Collaborated with cross-functional teams to deliver high-availability services on OpenShift, ensuring zero downtime during production releases."
      ],
      tech: ["Java 17", "Spring Boot", "MongoDB", "Oracle", "Drools", "Karate", "OpenShift", "React"]
    },
    {
      company: "TCS",
      location: "Pune",
      role: "Assistant Software Engineer",
      period: "Jul 2021 – Mar 2023",
      achievements: [
        "Orchestrated the migration of legacy integration services from Spring Boot 2 / Red Hat Fuse to Spring Boot 3, saving $200k+ in annual licensing costs.",
        "Developed containerized microservices that improved system resource utilization by 35% across banking domains.",
        "Built automated CI/CD pipelines on Azure with Rancher Kubernetes, integrating security scanning and automated testing tools."
      ],
      tech: ["Java", "Spring Boot", "Apache Camel", "Azure", "Kubernetes", "JUnit", "Cucumber"]
    }
  ],
  education: [
    {
      institution: "Patel College of Science and Technology",
      location: "Bhopal",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Aug 2017 – Jun 2021",
      score: "CGPA: 9.2/10"
    }
  ],
  projects: [
    {
      name: "AI-Powered Smart Document Analyzer",
      description: "Developed a tool using MCP and Spring AI to parse complex financial documents, extract key metrics, and provide summaries using RAG architectures.",
      tech: ["MCP", "Spring AI", "Vector DB", "LLMs", "React"]
    },
    {
      name: "Health Diagnosis Prediction System",
      description: "Applied Machine Learning algorithms to predict diseases from patient data, achieving 92.6% accuracy with Scikit-Learn and a Flask-based interactive dashboard.",
      tech: ["Python", "Scikit-Learn", "Flask", "Machine Learning"]
    }
  ],
  awards: [
    "CEO Exceptional Award – Barclays (Affordability Hub, 2024)",
    "Certified Gen AI Engineer (Spring AI) – Udemy",
    "Machine Learning & Deep Learning Specialization – Coursera",
    "Advanced Prompt Engineering for Developers – DeepLearning.AI"
  ]
};
