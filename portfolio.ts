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
  title: "Anthony Regulado",
  description:
    "I'm a passionate Full Stack web developer having 5+ years of experience on developing scalable applications and websites with PHP(Laravel, Symfony, Wordpress) and Javascript(Node.js, Vue.js and React.js), improving company efficiency and productivity.",
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
        emoji('⚡ Building fully functional responsive websites using Laravel and VueJS'),
        emoji('⚡ Building RESTful APIs in Plain PHP, Laravel, Symfony and Node.js'),
        emoji('⚡ Building responsive Single-Page-Apps (SPA) & PWA in Vue.js or React.js'),
        emoji('⚡ Building Wordpress themes and plugins with custom functionality'),
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
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Bitbucket'
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
    progressPercentage: '90',
  },
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '75', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'STI College Carmona',
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
    role: 'Software Developer',
    company: 'Payo Asia',
    companyLogo: '/img/icons/common/payo.png',
    date: 'Oct 2020 – Nov 2023',
    desc: 'I worked as software developer to develop internal systems and REST API for multiple apps using Laravel, Bootstrap, jQuery, Vue.js and also develop application for eCommerce platforms like Shopify and Woocommerce.',
  },
  {
    role: 'Web Developer',
    company: 'Lamudi Philippines',
    companyLogo: '/img/icons/common/lamudi.png',
    date: 'July 2018 – Oct 2020',
    desc: 'I worked as Web Developer for their flagship website, lamudi.com.ph, a real estate classifieds websites. I worked with a fairly large team implementing agile methodology, and developed both frontend and backend features of the website. Also deployed to partner clients to provide custom solutions, notable projects include building a Custom CMS and landing pages.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Payo Main Website',
    desc: 'Payo is an E-commerce enabler that provides holistic and tailor-fit solutions to address the needs of online merchants. We solve the challenges they encounter, improve their logistics process through tech-driven services, and help them scale faster.',
    github: '',
    link: 'https://payo.asia/',
  },
  {
    name: 'Payo Shopify App',
    desc: 'Payo App lets you seamlessly integrate orders to Payo\’s Order Management System.',
    github: '',
    link: 'https://apps.shopify.com/payo-cod',
  },
  {
    name: 'Payo Wordpress App',
    desc: 'With Payo, merchants can seamlessly integrate all orders from their store to our centralized dashboard to oversee all their orders – both Paid and COD.',
    github: '',
    link: 'https://co.wordpress.org/plugins/payo-cod/',
  },
  {
    name: 'Lamudi',
    desc: 'Philippines\' No.1 Real Estate Partner',
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
