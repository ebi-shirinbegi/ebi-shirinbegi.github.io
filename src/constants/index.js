import {
    eba,
    ebaa,
    adras,
    cwnu,
    raybold,
    starfood,
    crm,
    math,
  } from "../assets";

  export const navLinks = [
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];


  const experiences = [
    {
      title: "Junior Researcher",
      company_name: "China West Normal University",
      icon: raybold,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Jul 2024",
      points: [
        "Developed HazNERC dataset with 100,000+ annotated tokens, achieving 87% F1-score in NER tasks.",
        "Implemented custom BERT-based models improving multilingual performance by 23% compared to baseline.",
        "Conducted systematic review of 200+ NLP papers, identifying key trends in low-resource language processing.",
        "Reduced model training time by 40% through optimization of data preprocessing pipeline.",
        "Tech Stack: Python, PyTorch, HuggingFace Transformers, BERT, LLaMA, NLTK, spaCy",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ADRAS (Afghanistan Development and Registry and Addressing Services)",
      icon: adras,
      iconBg: "#383E56",
      date: "May 2017 - Aug 2021",
      points: [
        "Developed 3 core modules, improving functionality for 3,000+ users across 34 provinces.",
        "Optimized database queries, reducing system response time by 45% and enhancing overall performance.",
        "Designed and implemented scalable REST APIs to handle 10,000+ daily requests efficiently.",
        "Introduced automated testing and set up a CI/CD pipeline, cutting bug detection time by 60% and reducing deployment time by 70%.",
        "Built a real-time monitoring system with 99.9% uptime, ensuring consistent service availability.",
        "Mentored 5 junior developers, increasing team productivity by 25% and promoting a collaborative environment.",
        "Tech Stack: PHP, Laravel, JavaScript, React.js, MySQL, Docker, Git, REST APIs",
        
      ],
    },
  ];
  

  const machineLearnings = [
      { "mlnlp": "Python", "percentage": 85 },
      { "mlnlp": "TensolFlow", "percentage": 75 },
      { "mlnlp": "PyTorch", "percentage": 70 },
      { "mlnlp": "NumPy", "percentage": 65 },
      { "mlnlp": "Matplotlib", "percentage": 80 },
      { "mlnlp": "Pandas", "percentage": 85 },
      { "mlnlp": "spaCy", "percentage": 85 },
      { "mlnlp": "NLTK", "percentage": 85 },
  ];

  const webAndDatabases = [
      { "web": "PHP", "percentage": 80 },
      { "web": "Laravel", "percentage": 70 },
      { "web": "SQL", "percentage": 70 },
      { "web": "JavaScript", "percentage": 55 },
      { "web": "jQuery & Ajax", "percentage": 75 },
      { "web": "Tailwind & Bootstrap", "percentage": 70 },
      { "web": "HTML & CCS", "percentage": 95 }
  ];


  const toolsAndMethods = [
      { "tools": "SPLID Principles ", "percentage": 90 },
      { "tools": "Design Patterns", "percentage": 70 },  
      { "tools": "Git & GitHub", "percentage": 80 },
      { "tools": "REST API", "percentage": 75 },
      { "tools": "PHPUnit", "percentage": 75 },
      { "tools": "Docker", "percentage": 75 },
      { "tools": "Postman", "percentage": 70 },
      
       
      
  ];

  const softSkills = [
      { "soft": "Problem solving", "percentage": 80 },
      { "soft": "Critical Thinking", "percentage": 80 },
      { "soft": "Communication", "percentage": 90 },
      { "soft": "Teamwork", "percentage": 90 },
      { "soft": "Attention to detail", "percentage": 90 },
      { "soft": "Time management", "percentage": 85 },
      { "soft": "Creativity", "percentage": 80 },
      { "soft": "Patience", "percentage": 90 },
      { "soft": "Diversity awareness", "percentage": 95 },
      
  ];
  
  const projects = [
    {
      name: "EBA",
      description: "Education Bridge for Afghanistan (EBA) is a non-profit organization established by a group of volunteer education activists in Afghanistan and around the world. EBA provides a practical, indigenous, online education platform for secondary-level students in Afghanistan, especially for girls who are currently excluded from school. In collaboration with members of the Afghan diaspora, international philanthropists and women’s rights activists, we have launched a programme to provide free access to online school-level education for girls in Afghanistan.",
      tags: [
        
        { name: "PHP",
          color: "pink-text-gradient",
        },
        { name: "JavScript",
          color: "blue-text-gradient",
        },
        { name: "jQuery",
          color: "green-text-gradient",
        },
        {name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {name: "CSS",
          color: "blue-text-gradient",
        },
        {  name: "Laravel",
          color: "green-text-gradient",
        },
        { name: "SQL Server",
          color: "pink-text-gradient",
        },
      ],
      image: eba,
      see_live_link: "https://www.eba.ac/",
    },
    {
      name: "Starfoods",
      description:"Starfoods demonstrates my web development skills, emphasizing user-friendly interfaces, smooth shopping experiences, secure payments, and quick shipping. Explore my work to see how I can enhance your next project.",
      tags: [
        { name: "React",
          color: "blue-text-gradient",
        },
        { name: "Bootstrap",
          color: "green-text-gradient",
        },
       
        { name: "CSS",
          color: "pink-text-gradient",
        },
        { name: "Laravel",
          color: "blue-text-gradient",
        },
        { name: "SQL Server",
          color: "green-text-gradient",
        },
      ],
      image: starfood,
      see_live_link: "https://star.starfoods.ir",
    },

    {
      name: "CRM",
      description: "A CRM (Customer Relationship Management) system, streamlines customer data management, and provides analytics. I specialize in creating adaptable CRM solutions that support sales, customer service, and growth, reflecting my skills in developing, data-driven applications.",
      tags: [
        { name: "JavScript",
          color: "blue-text-gradient",
        },
        { name: "jQuery",
          color: "green-text-gradient",
        },
        {name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {name: "CSS",
          color: "blue-text-gradient",
        },
        {  name: "Laravel",
          color: "green-text-gradient",
        },
        { name: "SQL Server",
          color: "pink-text-gradient",
        },
      ],
      image: crm,
      see_live_link: "https://star4.ir",
    },
  ];
  
  export {experiences, machineLearnings, webAndDatabases, toolsAndMethods, softSkills, projects };