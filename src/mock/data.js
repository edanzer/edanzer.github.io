import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Erick Danzer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'WordPress & JavaScript Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi. My name is ',
  name: 'Erick Danzer.',
  subtitle: "I'm a software engineer & owner at Reactr.",
  cta: 'About',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I've been building and managing complex web and software projects for over 10 years.",
  paragraphTwo:
    'My past projects include Imagely, Photocrati, and NextGEN Gallery (the most popular gallery plugin for WordPress with 30 million downloads). Currently, I run Reactr, WPRealEstate, and ShowThemes.',
  paragraphThree:
    'Technologies I work with include PHP, Laravel, JavaScript, ES6+, Node, React, Redux, Gatsby, Express, Gulp, Grunt, Webpack, Git, Docker, Google Cloud, AWS, Lambdas.',
  paragraphFour: 'Learn more about me here:',
  resume: 'https://github.io/edanzer', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'reactr-homepage.png',
    title: 'Reactr',
    info: 'This is my main web agency. We build and manage WPRealEstate, ShowThemes, and other projects. In the past, we also built and managed Imagely, NextGEN Gallery, and Photocrati. We periodically do client work.',
    info2: '',
    url: 'https://reactr.io',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wprealestate-homepage-min.png',
    title: 'WPRealEstate',
    info: 'WPRealEstate provides WordPress products and services for real estate professionals. The WPRealEstate theme includes a library of beautiful designs, hundreds of options, one-click demo important, and more.',
    info2:
      'The WPRealEstate plugin allows realtors to manage and display property listings and agents. It also support integration with the MLS service via the new, restful RESO Web API.',
    url: 'https://wprealestate.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'conference-pro.png',
    title: 'ShowThemes',
    info: 'ShowThemes makes highly tailored WordPress products for conference and event managers. Our WordPress theme comes with beautiful starting designs and endless customization options.',
    info2:
      'Our plugin, called Conference, allows users to manage sessions, speakers, calendars, and exhibitors. It also integrates with Eventbrite for ticket sales.',
    url: 'https://showthemes.com',
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
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
