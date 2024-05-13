import {
    adras,
    eba,
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
      title: "Full Stack Engineer",
      company_name: "Education Bridge for Afghanistan - Non-Profit ",
      icon: eba,
      iconBg: "#383E56",
      date: "Nov 2021-July 2023",
      points: [
        "Collaborating with a team of 9 web developers and designers to design and develop a management information system for student and teacher registration, enrolment, and record-tracking.",
        "Played a key role from prototyping to the final release of the system in all development stages which is currently being used by 1,400 students and 65 teachers",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Raybold  Software & Graphic Design Company - Startup",
      icon: raybold,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Dec 2021",
      points: [
        "Developed software for hospital management of all administrative parts, including finance and pharmacy management, in collaboration with a team of 6 developers.",
        "Led the development of the software, from initial planning to final implementation, resulting in its successful application and currently being used by 14 hospitals.",
        "The software contributed to the business success of the company and increased its popularity about 50% among hospitals, ultimately solidifying its reputation as a provider of high-quality, innovative solutions.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ADRAS (Afghanistan Development and Registry and Addressing Services)",
      icon: adras,
      iconBg: "#383E56",
      date: "May 2017 - Aug 2020",
      points: [
        "Contributed to the development of a large software system that centralizes administrative operations of governmental civil ORGs across 34 provinces. The system focused on employee records and letter management in ministries and their departments.",
        "Independently created 3 modules from scratch and participated as a team member on 5 additional projects.",
        "Played an essential role as part of a team of 189 IT and web developers in the successful deployment of the software to over 3,000 active users.",
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
    {
      name: "Math",
      description: "Math magicians is a website for all fans of mathematics. It allows user to make simple calculations and read random math related qoutes.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: math,
      
      see_live_link: "https://math-magicians-9om6.onrender.com/",
    },
  ];
  
  export {experiences, machineLearning, webAndDatabase, toolsAndMethods, softSkills, projects };