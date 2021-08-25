import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Erick Danzer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'WordPress & JavaScript Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi. My name is ",
  name: "Erick Danzer.",
  subtitle: "I'm a freelance WordPress & JavaScript developer.",
  cta: 'About',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a developer with 10 years of experience working on large projects in PHP, JavaScript, React, and WordPress.",
  paragraphTwo: 'I combine strong technical skills with a solid sense of design, and often prefer to work on the front end.',
  paragraphThree: 'Skills: PHP, Laravel, JavaScript, ES6+, Node, React, Gulp, Grunt, Gatsby, Command Line, Git, Google Cloud, AWS.',
  resume: 'https://github.io/edanzer', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'wprealestate-homepage-min.png',
    title: 'WPRealEstate',
    info: 'WordPress products for real estate professionals. Includes a theme with a library of designs, hundreds of customization options, one-click demo important and more.',
    info2: 'Also includes a plugin that integrates with MLS services in the United States via the new, restful RESO Web API.',
    url: 'https://wprealestate.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'conference-pro.png',
    title: 'ShowThemes',
    info: 'Sells WordPress products for managing events and conferences. The theme comes with a library of starting designs, powerful customization options, and demo imports.',
    info2: 'The plugin allows users to create sessions, speakers, calendars, and exhibitors that can all be linked and displayed. Integrates with Eventbrite for ticket sales.',
    url: 'https://showthemes.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'r_reactr-homepage.png',
    title: 'Reactr',
    info: 'Web development agency that builds WPRealEstate and ShowThemes. It manages a range of other websites and builds, deployes, and manages WordPress websites for clients.',
    info2: '',
    url: 'https://reactr.io',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'erick@react.io',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/edanzer',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/erickdanzer/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/erickdanzer',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
