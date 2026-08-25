import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Anthony Jerome Regulado',
  title: 'Senior Fullstack Developer',
  description:
    'Senior Fullstack Developer with 8+ years of experience designing and building scalable, high-traffic web and mobile applications. Experienced in technical leadership, architecture, API design, CI/CD, cloud infrastructure, security hardening, and AI-assisted development.',
  resumeLink: 'https://aregulado.vercel.app',
};

export const openSource = {
  githubUserName: 'aregulado',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'mailto:ajregulado@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aregulado',
  github: 'https://github.com/aregulado',
};

export const skillsSection: SkillsSectionType = {
  title: 'Skills',
  // subTitle: 'FULL STACK DEVELOPMENT',
  data: [
    {
      title: 'Languages & Backend',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ TypeScript, JavaScript (ES6+), and PHP development across the full application lifecycle.'),
        emoji('⚡ Laravel, Symfony, Node.js, REST APIs, and high-volume transaction systems.'),
        emoji('⚡ MySQL, PostgreSQL, MongoDB, and Neo4j, with PHPUnit, Jest, unit, and integration testing.'),
      ],
      softwareSkills: [
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'PHP',
          iconifyTag: 'skill-icons:php-dark',
        },
        {
          skillName: 'Laravel',
          iconifyTag: 'skill-icons:laravel-light',
        },
        {
          skillName: 'Symfony',
          iconifyTag: 'skill-icons:symfony-dark',
        },
        {
          skillName: 'NodeJS',
          iconifyTag: 'skill-icons:nodejs-light',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        {
          skillName: 'Neo4j',
          iconifyTag: 'logos:neo4j',
        },
      ],
    },
    {
      title: 'Frontend & Mobile',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Vue.js, React, HTML, CSS/SCSS, Bootstrap, and jQuery for responsive web experiences.'),
        emoji('⚡ React Native, Expo, and Flutter applications for iOS and Android.'),
        emoji('⚡ Built a Flutter ordering, real-time tracking, and order management app for Payo Asia.'),
      ],
      softwareSkills: [
        { skillName: 'VueJS', iconifyTag: 'skill-icons:vuejs-light' },
        { skillName: 'React', iconifyTag: 'logos:react' },
        { skillName: 'React Native', iconifyTag: 'logos:react' },
        { skillName: 'Expo', iconifyTag: 'simple-icons:expo' },
        { skillName: 'Flutter', iconifyTag: 'logos:flutter' },
        { skillName: 'HTML-5', iconifyTag: 'vscode-icons:file-type-html' },
        { skillName: 'CSS-3', iconifyTag: 'vscode-icons:file-type-css' },
      ],
    },
    {
      title: 'Cloud, Integrations & Tooling',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ AWS, Google Cloud Platform, Docker, Vercel, WHM/cPanel, Linux, and GitHub Actions for reliable delivery.'),
        emoji('⚡ Firebase, Stripe, Auth0, Google Maps API, Shopify, and WordPress integrations.'),
        emoji('⚡ Claude Code, GitHub Copilot, Cursor, ChatGPT, Git, GitHub, Bitbucket, Jira, and Agile/Scrum workflows.'),
      ],
      softwareSkills: [
        { skillName: 'AWS', iconifyTag: 'logos:aws' },
        { skillName: 'Google Cloud', iconifyTag: 'logos:google-cloud' },
        { skillName: 'Docker', iconifyTag: 'logos:docker-icon' },
        { skillName: 'Vercel', iconifyTag: 'logos:vercel-icon' },
        { skillName: 'GitHub', iconifyTag: 'akar-icons:github-fill' },
        { skillName: 'Bitbucket', iconifyTag: 'devicon:bitbucket' },
        { skillName: 'WordPress', iconifyTag: 'mdi:wordpress' },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend',
    progressPercentage: '95',
  },
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Programming',
    progressPercentage: '95',
  },
  {
    Stack: 'Mobile',
    progressPercentage: '85',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'STI College Southwoods',
    subHeader: 'Bachelor of Science in Information Technology',
    duration: '2013 – 2017',
    // desc: 'Participated in the research of XXX and published 3 papers.',
    // grade: 'Grade A',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Fullstack Developer',
    company: 'UK Internet Sites Ltd',
    companyLogo: '/img/icons/common/uk-internet-sites-logo.png',
    date: 'November 2023 – Present',
    desc: 'Tech stack: PHP, Laravel, Vue.js, TypeScript, WordPress, and Expo. Led a 5-member cross-functional team delivering high-traffic subscription websites serving thousands of concurrent users.',
    descBullets: [
      'Drove AI developer workflow improvements with agent skills, MCP integrations, Copilot CLI, spec-driven development, and GitHub Actions automation.',
      'Modernized a legacy PHP monolith and refactored APIs and frontend layers to improve page-load and API-response performance.',
      'Implemented input validation, rate limiting, secure authentication flows, coding standards, code reviews, and deployment checklists.',
      'Mentored junior developers, ran sprint planning, and coordinated requirements and delivery timelines with stakeholders.',
      'Leading the migration of existing projects to Expo and planning the team’s upcoming mobile app initiative.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Payo Asia',
    companyLogo: '/img/icons/common/payo.png',
    date: 'October 2020 – November 2023',
    desc: 'Tech stack: Laravel, Symfony, Vue.js, Node.js, WordPress, and Flutter. Developed and maintained a high-volume Order Management System processing thousands of daily transactions reliably.',
    descBullets: [
      'Built a cross-platform Flutter client app for ordering, real-time tracking, and order management across same-day and standard shipping.',
      'Led migration to Dockerized AWS deployments, improving release-cycle time and DevOps efficiency.',
      'Designed partner API integrations and introduced unit testing practices that reduced regression incidents.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Lamudi Philippines',
    companyLogo: '/img/icons/common/lamudi.png',
    date: 'July 2018 – October 2020',
    desc: 'Tech stack: Symfony, React, and React Native. Built and maintained core features for lamudi.com, one of the Philippines’ leading real estate platforms.',
    descBullets: [
      'Developed custom CMS solutions enabling enterprise clients to manage large-scale property listing portfolios.',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'UK Internet Sites',
    desc: 'High-traffic subscription websites modernized with secure coding standards, performance improvements, and AI-assisted engineering workflows.',
    github: '',
    link: 'https://ukinternetsites.com',
  },
  {
    name: 'Payo Order Management System',
    desc: 'High-volume Laravel and Symfony platform supporting thousands of daily transactions, partner API integrations, and Dockerized AWS deployments.',
    github: '',
    link: 'https://payo.asia/',
  },
  {
    name: 'Payo Flutter Mobile App',
    desc: 'Cross-platform ordering app with same-day and standard shipping, real-time order tracking, and order management.',
    github: '',
    link: 'https://payo.asia/',
  },
  {
    name: 'Freelance Navigation App',
    desc: 'Laravel and Neo4j backend integrated with Google Maps, Firebase, and Auth0, with Stripe payments and a Flutter frontend contribution.',
    github: '',
  },
  {
    name: 'Lamudi',
    desc: 'Real estate platform built with Symfony and React, including CMS tooling for large-scale property listing portfolios.',
    github: '',
    link: 'https://www.lamudi.com.ph/',
  },
];

// Resume contains no testimonials; keep section empty until real feedback is available.
export const feedbacks: FeedbackType[] = [];

// option to hide or show the ContactUs component
export const showFeedback: boolean = false;
export const showProjects: boolean = true;
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Anthony Jerome Regulado | Senior Fullstack Developer',
  description:
    'Senior Fullstack Developer with 8+ years of experience building scalable web and mobile applications.',
  author: 'Anthony Jerome Regulado',
  image: 'https://avatars.githubusercontent.com/u/60086344?s=400&u=eee57efeb734c92e5701fb6286732b5c111dc14e&v=4',
  url: 'https://aregulado.vercel.app',
  keywords: [
    'Anthony Jerome Regulado',
    'aregulado',
    'Senior Fullstack Developer',
    'TypeScript',
    'PHP',
    'Laravel',
    'Vue',
    'React',
    'React Native',
    'Flutter',
    'AWS',
    'Portfolio',
  ],
};
