const CV_DATA = {
  en: {
    meta: {
      name: "Juan José Torres López",
      title: "Front-End Developer – Full-Stack TypeScript",
      photo: "assets/photo.jpg",
    },
    contact: [
      { icon: "email", text: "hello@jjtorres.dev", href: "mailto:hello@jjtorres.dev" },
      { icon: "phone", text: "+34 606 508 490", href: "tel:+34606508490" },
      { icon: "globe", text: "jjtorres.dev", href: "https://jjtorres.dev/" },
      { icon: "mapPin", text: "08018, Barcelona, Spain" },
      { icon: "linkedin", text: "juanjotorreslopez", href: "https://linkedin.com/in/juanjotorreslopez" },
      { icon: "github", text: "juanjotorres90", href: "https://github.com/juanjotorres90" },
    ],
    languages: [
      { name: "Spanish", level: "Native", flag: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 750 500" style="vertical-align:-1px"><rect width="750" height="500" fill="#c60b1e"/><rect y="125" width="750" height="250" fill="#ffc400"/></svg>' },
      { name: "Catalan", level: "Native", flag: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 810 540" style="vertical-align:-1px"><rect width="810" height="540" fill="#FCDD09"/><rect y="60" width="810" height="60" fill="#DA121A"/><rect y="180" width="810" height="60" fill="#DA121A"/><rect y="300" width="810" height="60" fill="#DA121A"/><rect y="420" width="810" height="60" fill="#DA121A"/></svg>' },
      { name: "English", level: "Advanced", flag: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 60 30" style="vertical-align:-1px"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>' },
    ],
    skills: [
      { name: "HTML5", color: "#e34f26", textColor: "#fff" },
      { name: "CSS3 / SASS", color: "#1572b6", textColor: "#fff" },
      { name: "JavaScript", color: "#f7df1e", textColor: "#000" },
      { name: "TypeScript", color: "#3178c6", textColor: "#fff" },
      { name: "Angular 2-21", color: "#dd0031", textColor: "#fff" },
      { name: "React", color: "#61dafb", textColor: "#000" },
      { name: "Next.js", color: "#000", textColor: "#fff" },
      { name: "Vue.js", color: "#4fc08d", textColor: "#fff" },
      { name: "Astro", color: "#ff5d01", textColor: "#fff" },
      { name: "Ionic 4-8", color: "#3880ff", textColor: "#fff" },
      { name: "Node.js", color: "#339933", textColor: "#fff" },
      { name: "NestJS", color: "#e0234e", textColor: "#fff" },
      { name: "TailwindCSS", color: "#06b6d4", textColor: "#fff" },
      { name: "Bootstrap", color: "#7952b3", textColor: "#fff" },
      { name: "Nx", color: "#143055", textColor: "#fff" },
      { name: "Docker", color: "#2496ed", textColor: "#fff" },
      { name: "GIT", color: "#f05032", textColor: "#fff" },
      { name: "Jira", color: "#0052cc", textColor: "#fff" },
      { name: "SEO", color: "#4285f4", textColor: "#fff" },
      { name: "PostgreSQL", color: "#336791", textColor: "#fff" },
    ],
    profile:
      "Passionate about IT and new technologies. I specialize in Angular and modern JavaScript/TypeScript, with 6+ years of professional experience building web and mobile applications. Always eager to explore new technologies and frameworks. I believe in writing clean, maintainable code and creating interfaces that users love to interact with.",
    education: [
      {
        period: "2019 – (550 hours)",
        org: "Joves IT Academy – Barcelona Activa",
        title: "FRONT-END DEVELOPER BOOTCAMP",
        description:
          "Intensive program covering HTML5, CSS3, JavaScript, Angular 2+, jQuery, Bootstrap, WordPress, responsive design, and SEO fundamentals.",
      },
      {
        period: "2009 – 2015",
        org: "Universitat Politècnica de Catalunya",
        title: "DEGREE IN PUBLIC WORKS ENGINEERING",
        description: "Specialization in civil constructions. Strong analytical and project management foundation.",
      },
    ],
    experience: [
      {
        period: "2023 – Present",
        org: "Costaisa",
        title: "FRONT-END LEAD & FULL-STACK",
        description: "Leading Front-End architecture and technical direction for the Phemium telehealth platform. Defining coding standards, reviewing PRs, and driving migration strategies across multiple product lines.",
      },
      {
        period: "2019 – 2023",
        org: "Costaisa",
        title: "FRONT-END DEVELOPER",
        description:
          "Built and maintained eHealth applications at Phemium serving healthcare providers and patients. Delivered cross-platform solutions with Angular 8+, Ionic 4+, Cordova, Stencil.js, and Angular Elements. Introduced unit testing practices and contributed to the adoption of Nx monorepos.",
      },
      {
        period: "2016 – 2018",
        org: "Rondas Hotels",
        title: "RESERVATION MANAGEMENT & FRONT DESK",
        description:
          "Managed daily hotel operations including reservations, check-in/check-out, and guest relations using Tesipro. Provided multilingual customer support to international travelers.",
      },
      {
        period: "2014 – 2015",
        org: "Department of Territory (Catalan government)",
        title: "PROJECT ENGINEER",
        description:
          "Coordinated road infrastructure projects from planning through construction. Managed technical databases and enforced quality control procedures across multiple active projects.",
      },
      {
        period: "2014 – 2015",
        org: "ETSECCPB – Universitat Politècnica de Catalunya",
        title: "ENGINEERING LABORATORY TECHNICIAN",
        description:
          "Conducted experimental research on recycled HDPE as aggregate in low-strength concretes. Designed test protocols, manufactured concrete specimens, and performed resistance and durability analyses.",
      },
      {
        period: "2006 – 2009",
        org: "Models Digitals del Terreny, DTM SL",
        title: "TOPOGRAPHICAL TECHNICIAN",
        description:
          "Performed field measurements, topographic surveys, and planimetric/altimetric staking for civil engineering projects.",
      },
    ],
    ui: {
      personalInfo: "Personal Info",
      languages: "Languages",
      skills: "IT Skills",
      profile: "Profile",
      education: "Education",
      experience: "Work Experience",
      exportPdf: "Export PDF",
    },
  },
  es: {
    meta: {
      name: "Juan José Torres López",
      title: "Desarrollador Front-End – Full-Stack TypeScript",
      photo: "assets/photo.jpg",
    },
    contact: [
      { icon: "email", text: "hello@jjtorres.dev", href: "mailto:hello@jjtorres.dev" },
      { icon: "phone", text: "+34 606 508 490", href: "tel:+34606508490" },
      { icon: "globe", text: "jjtorres.dev", href: "https://jjtorres.dev/" },
      { icon: "mapPin", text: "08018, Barcelona, España" },
      { icon: "linkedin", text: "juanjotorreslopez", href: "https://linkedin.com/in/juanjotorreslopez" },
      { icon: "github", text: "juanjotorres90", href: "https://github.com/juanjotorres90" },
    ],
    languages: [
      { name: "Español", level: "Nativo", flag: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 750 500" style="vertical-align:-1px"><rect width="750" height="500" fill="#c60b1e"/><rect y="125" width="750" height="250" fill="#ffc400"/></svg>' },
      { name: "Catalán", level: "Nativo", flag: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 810 540" style="vertical-align:-1px"><rect width="810" height="540" fill="#FCDD09"/><rect y="60" width="810" height="60" fill="#DA121A"/><rect y="180" width="810" height="60" fill="#DA121A"/><rect y="300" width="810" height="60" fill="#DA121A"/><rect y="420" width="810" height="60" fill="#DA121A"/></svg>' },
      { name: "Inglés", level: "Advanced", flag: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 60 30" style="vertical-align:-1px"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></svg>' },
    ],
    skills: [
      { name: "HTML5", color: "#e34f26", textColor: "#fff" },
      { name: "CSS3 / SASS", color: "#1572b6", textColor: "#fff" },
      { name: "JavaScript", color: "#f7df1e", textColor: "#000" },
      { name: "TypeScript", color: "#3178c6", textColor: "#fff" },
      { name: "Angular 2-21", color: "#dd0031", textColor: "#fff" },
      { name: "React", color: "#61dafb", textColor: "#000" },
      { name: "Next.js", color: "#000", textColor: "#fff" },
      { name: "Vue.js", color: "#4fc08d", textColor: "#fff" },
      { name: "Astro", color: "#ff5d01", textColor: "#fff" },
      { name: "Ionic 4-8", color: "#3880ff", textColor: "#fff" },
      { name: "Node.js", color: "#339933", textColor: "#fff" },
      { name: "NestJS", color: "#e0234e", textColor: "#fff" },
      { name: "TailwindCSS", color: "#06b6d4", textColor: "#fff" },
      { name: "Bootstrap", color: "#7952b3", textColor: "#fff" },
      { name: "Nx", color: "#143055", textColor: "#fff" },
      { name: "Docker", color: "#2496ed", textColor: "#fff" },
      { name: "GIT", color: "#f05032", textColor: "#fff" },
      { name: "Jira", color: "#0052cc", textColor: "#fff" },
      { name: "SEO", color: "#4285f4", textColor: "#fff" },
      { name: "PostgreSQL", color: "#336791", textColor: "#fff" },
    ],
    profile:
      "Apasionado por la informática y las nuevas tecnologías. Me especializo en Angular y JavaScript/TypeScript modernos, con más de 6 años de experiencia profesional desarrollando aplicaciones web y móviles. Siempre con ganas de explorar nuevas tecnologías y frameworks. Creo en escribir código limpio y mantenible y en crear interfaces con las que los usuarios disfruten interactuar.",
    education: [
      {
        period: "2019 – (550 horas)",
        org: "Joves IT Academy – Barcelona Activa",
        title: "DESARROLLO WEB FRONT-END",
        description:
          "Programa intensivo en HTML5, CSS3, JavaScript, Angular 2+, jQuery, Bootstrap, WordPress, diseño responsive y fundamentos de SEO.",
      },
      {
        period: "2009 – 2015",
        org: "Universidad Politécnica de Cataluña",
        title: "GRADO EN INGENIERÍA DE OBRAS PÚBLICAS",
        description: "Especialidad en construcciones civiles. Sólida formación analítica y en gestión de proyectos.",
      },
    ],
    experience: [
      {
        period: "2023 – Actualidad",
        org: "Costaisa",
        title: "FRONT-END LEAD Y FULL-STACK",
        description: "Liderazgo de la arquitectura Front-End y dirección técnica de la plataforma de telemedicina Phemium. Definición de estándares de código, revisión de PRs y diseño de estrategias de migración en múltiples líneas de producto.",
      },
      {
        period: "2019 – 2023",
        org: "Costaisa",
        title: "DESARROLLADOR FRONT-END",
        description:
          "Desarrollo y mantenimiento de aplicaciones de eHealth en Phemium para profesionales sanitarios y pacientes. Soluciones multiplataforma con Angular 8+, Ionic 4+, Cordova, Stencil.js y Angular Elements. Impulso de prácticas de testing unitario y adopción de Nx monorepos.",
      },
      {
        period: "2016 – 2018",
        org: "Rondas Hotels",
        title: "GESTIÓN DE RESERVAS Y RECEPCIÓN",
        description:
          "Gestión de operaciones hoteleras diarias: reservas, check-in/check-out y atención al huésped con Tesipro. Soporte multilingüe a viajeros internacionales.",
      },
      {
        period: "2014 – 2015",
        org: "Servicio de Carreteras de la Generalitat de Catalunya",
        title: "INGENIERO DE PROYECTOS",
        description:
          "Coordinación de proyectos de infraestructura viaria desde la planificación hasta la ejecución. Gestión de bases de datos técnicas y control de calidad en múltiples proyectos activos.",
      },
      {
        period: "2014 – 2015",
        org: "ETSECCPB – Universidad Politécnica de Cataluña",
        title: "TÉCNICO DEL LABORATORIO DE INGENIERÍA",
        description:
          "Investigación experimental sobre HDPE reciclado como árido en hormigones de baja resistencia. Diseño de protocolos de ensayo, fabricación de probetas y análisis de resistencia y durabilidad.",
      },
      {
        period: "2006 – 2009",
        org: "Models Digitals del Terreny, DTM SL",
        title: "TÉCNICO EN TOPOGRAFÍA",
        description:
          "Mediciones de campo, levantamientos topográficos y replanteos planimétricos y altimétricos para proyectos de ingeniería civil.",
      },
    ],
    ui: {
      personalInfo: "Datos Personales",
      languages: "Idiomas",
      skills: "Habilidades IT",
      profile: "Perfil",
      education: "Formación",
      experience: "Experiencia Laboral",
      exportPdf: "Exportar PDF",
    },
  },
};
