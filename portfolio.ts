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
  name: 'Anthony Regulado',
  title: "Anthony Jerome Regulado",
  description:
    "Lead Full Stack Developer with 6+ years of experience designing and building scalable web applications. Skilled in both frontend and backend development, with a strong focus on improving system efficiency and business productivity.",
  resumeLink:
    'https://aregulado.github.io',
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
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Strong full-stack development background using Laravel, Symfony, Node.js on the backend and Vue, React, jQuery, ES6, HTML/CSS/SCSS on the frontend.'),
        emoji('⚡ Experienced with multiple database technologies including MySQL, PostgreSQL, MongoDB, and Neo4j.'),
        emoji('⚡ Proficient with third-party integrations and development tools, including Firebase, Stripe, Auth0, Shopify, WordPress, unit testing (Jest, PHPUnit), Git (GitHub/Bitbucket), Agile/Scrum, Linux, and AI-assisted tools such as ChatGPT, GitHub Copilot, and Cursor.'),
      ],
      softwareSkills: [
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
          skillName: 'Wordpress',
          iconifyTag: 'mdi:wordpress'
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'NodeJS',
          iconifyTag: 'skill-icons:nodejs-light'
        },
        {
          skillName: 'VueJS',
          iconifyTag: 'skill-icons:vuejs-light',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experienced in deploying and managing applications on AWS, Google Cloud Platform, and Vercel, leveraging cloud-native services for scalability and reliability.'
        ),
        emoji(
          '⚡ Proficient in Docker-based environments and CI/CD workflows, with hands-on expertise in server administration using WHM / cPanel.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Bitbucket',
          iconifyTag: 'devicon:bitbucket',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
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
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'STI College Southwoods',
    subHeader: 'Bachelor of Science in Information Technology',
    duration: 'June 2013 - April 2017',
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
    role: 'Lead Developer',
    company: 'UK Internet Sites Ltd',
    companyLogo: '/img/icons/common/uk-internet-sites-logo.png',
    date: 'Nov 2023 - Present',
    desc: 'Lead a 5-member team to modernize and secure high-traffic subscription platforms, improving performance by 30% and reducing production incidents through the implementation of secure coding standards.',
  },
  {
    role: 'Fullstack Developer',
    company: 'Payo Asia',
    companyLogo: '/img/icons/common/payo.png',
    date: 'Oct 2020 – Nov 2023',
    desc: 'Developed and optimized the company’s Order Management System by implementing Docker-based AWS deployments, building partner API integrations, and introducing unit testing to support thousands of daily transactions with improved reliability and delivery speed.',
  },
  {
    role: 'Web Developer',
    company: 'Lamudi Philippines',
    companyLogo: '/img/icons/common/lamudi.png',
    date: 'July 2018 – Oct 2020',
    desc: 'Built and maintained core features for Lamudi’s real estate platform and delivered custom CMS solutions for enterprise clients to manage high-volume property listings efficiently.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'UK Internet Sites',
    desc: 'Link showcasing company info and projects',
    github: '',
    link: 'https://ukinternetsites.com',
  },
  {
    name: 'Payo Website',
    desc: 'Home website of Payo, showcasing their services. Built using wordpress.',
    github: '',
    link: 'https://payo.asia/',
  },
  {
    name: 'Payo Shopify App',
    desc: 'Companion app for Payo clients who uses Shopify platform. Enables them to push orders from Shopify directly to Payo System, and also order management. Built using Laravel and VueJS.',
    github: '',
    link: 'https://apps.shopify.com/payo-cod',
  },
  {
    name: 'Payo Wordpress App',
    desc: 'Companion plugin for Payo clients who uses Woocommerce as their platform. Built using PHP.',
    github: '',
    link: 'https://co.wordpress.org/plugins/payo-cod/',
  },
  {
    name: 'Lamudi',
    desc: 'A real estate classifieds website. Built using Symfony and React.',
    github: '',
    link: 'https://www.lamudi.com.ph/',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showFeedback: boolean = false;
export const showProjects: boolean = true;
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Anthony Regulado',
  description:
    'A passionate Full Stack Web Developer',
  author: 'Anthony Regulado',
  image: 'https://avatars.githubusercontent.com/u/60086344?s=400&u=eee57efeb734c92e5701fb6286732b5c111dc14e&v=4',
  url: 'https://aregulado.github.io',
  keywords: [
    'Anthony Regulado',
    'aregulado',
    'Portfolio',
    'Regulado Portfolio ',
    'Anthony Regulado Portfolio',
  ],
};
