import JS from '../../assets/icons/js.png';
import CSS from '../../assets/icons/css.png';
import HTML from '../../assets/icons/html.png';
import Typescript from '../../assets/icons/typescript.png';
import Nodejs from '../../assets/icons/nodejs.png';
import Figma from '../../assets/icons/figma.png';
import Github from '../../assets/icons/github.png';
import AWS from '../../assets/icons/aws.png';
import Ethereum from '../../assets/icons/ethereum.png';
import C from '../../assets/icons/c.png';
import Java from '../../assets/icons/java.png';
import React from '../../assets/icons/react.png';
import Canva from '../../assets/icons/canva.jpg';
import Firebase from '../../assets/icons/firebase.png';
import Mongodb from '../../assets/icons/mongodb.png';
import Solidity from '../../assets/icons/solidity.png';
import Mysql from '../../assets/icons/sql.png';
import Netlify from '../../assets/icons/netlify.png';
import Python from '../../assets/icons/python.png';

import Cinemate from '../../assets/images/cinemate.png';
import Cre8ive from '../../assets/images/cre8ive.png';
import Foodbite from '../../assets/images/foodbite.png';
import Trash2gem from '../../assets/images/trash2gem.png';
import Zwillo from '../../assets/images/zwillo.png';
import TMDB from '../../assets/images/tmdb.png';
import Khatapp from '../../assets/images/khatapp.png';
import Pygame from '../../assets/images/pygame.jpg';

import { FaLinkedin } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


export const Social=[
    {
        logo:<FaInstagram className='w-6 h-6'/>,
        path:'https://www.instagram.com/itzzz_kaushan/'
    },
    {
        logo:<FaHashnode className='w-6 h-6'/>,
        path:'https://hashnode.com/@Kaushan5409'
    },
    {
        logo:<FaSquareXTwitter  className='w-6 h-6'/>,
        path:'https://x.com/kaushan5409?t=DiFhtN793y9uFYuw58lcCQ&s=09'
    },
    {
        logo:<FaLinkedin  className='w-6 h-6'/>,
        path:'https://www.linkedin.com/in/kaushan-dutta-bb68b021a/'
    },
    {
        logo:<SiGmail  className='w-6 h-6'/>,
        path:'mailto:kaushandutta5@gmail.com'
    },
]
export const Projects=[
    {
        name:'CineMate',
        image:Cinemate,
        tech:['all','spotlight','fullstack'],
        description:'A video library management system, where user can manage and share their content with world.',
        link:'https://github.com/Kaushan-Dutta/CineMate-FE',
    },
    
    {
        name:'FoodBite',
        image:Foodbite,
        tech:['all','fullstack'],
        description:'A full stack Pizza Delivery Application, with features like inventory system, creating new pizza.',
        link:'https://github.com/Kaushan-Dutta/Food-Bite'
    },
    
    {
        name:'Trash2Gem',
        image:Trash2gem,
        tech:['all','fullstack'],
        description:'Recycle management application where user can sell their waste, earn rewards and even buy the recycled products.',
        link:'https://github.com/Kaushan-Dutta/Trash2Gem'
    },
    {
        
        name:'Cre8iveHub',
        image:Cre8ive,
        tech:['all','blockchain'],
        description:'A NFT marketplace where user can mint their own NFT and sell them and protect their content.',
        link:'https://github.com/Kaushan-Dutta/Cre8iveHub'
    },
    {
        name:'TMDB',
        image:TMDB,
        tech:['all','frontend'],
        description:'Frontend website, where user can search for movies  and get details about them.',
        link:'https://github.com/Kaushan-Dutta/IEM-Hackathon-1.0',
    },
    {
        name:'Space War',
        image:Pygame,
        tech:['all'],
        description:'A space war game, where user can play against computer and score points.',
        link:'https://github.com/Kaushan-Dutta/Python-Games',
    },
    {
        name:'Zwillo',
        image:Zwillo,
        tech:['all','blockchain'],
        description:'Protect your property with Zwillo, a blockchain based property management system.',
        link:'https://github.com/Kaushan-Dutta/real-estate-marketplace',
    },
    {
        name:'khataApp',
        image:Khatapp,
        tech:['all','frontend'],
        description:'Web application, where user can manage their daily notes and other information',
        link:'https://github.com/Kaushan-Dutta/Appwrite_Hack',
    },
]
export const ProjectHeader=[
    {
        heading:'All',
    },
    {
        heading:'Frontend',
    },
    
    {
        heading:'Blockchain',
    },
    {
        heading:'FullStack',
    },
    {
        heading:'Spotlight',
    },
    
]
export const Experience=[
    {
        date:"12/22-9/23",
        company:"Vlogbook",
        description:"A tourism based startup where user can book their travel spots and even upload their vlogs in Vlogbook's seperate social media platform. As a memeber my work was to built their website along with managing team and helping folks."
    },
    {
        date:"02/22-Present",
        company:'CuBrain',
        description:"Technical club of Techno Main Saltlake. As a member of CuBrain, I am working on various projects and helping students to learn new technologies."
    },
    {
        date:"04/23-05/23",
        company:'Oasis Infobyte',
        description:"As an Intern my work was to develop a full stack Pizza Delivery Application. Along with working for a month with them I also received a recommendation letter from them."
    },
]
export const Achievement=[
    {
        achieve:'15+',
        platform:'HACKATHONS',
        description:'Participated in over 5 offline hackathons and 10 online hackathons, showcasing my skill .  ',
        link:'https://devfolio.co/projects'      
    },
    {
        achieve:'300+',
        platform:'PROBLEM SOLVING',
        description:'Proficient in Python programming . Active participator in Leetcode, Hackerank and Geek for Geeks.',
        link:'https://leetcode.com/Kaushan_5409/'
    },
    {
        achieve:'250+',
        platform:'GITHUB',
        description:'Actively contributed in various open source projects and contest like Hacktoberfest,GSSOC . ',
        link:'https://github.com/Kaushan-Dutta'
    },
   
    
]
export const Education=[
    {
        standard:'ICSE',
        school:'Carmel School',
        cgpa:'94%',
        year:'2019'
    },
    {
        standard:'ISC(Science)',
        school:'Carmel School',
        cgpa:'95.7%',
        year:'2021'
    },
    {
        standard:'BTech(CSE)',
        school:'Techno Main Saltlake',
        cgpa:'85%',
        year:'2021-25'
    },
]
export const Skills=[
    {
        logo:HTML
    },
    {
        logo:CSS
    },
    {
        logo:JS
    },
    {
        logo:Java
    },
    {
        logo:C
    },
    {
        logo:Python
    },
    {
        logo:React
    },
    
    
    {
        logo:Typescript
    },
    {
        logo:Solidity
    },
    {
        logo:Ethereum
    },
    {
        logo:Nodejs
    },
    {
        logo:Firebase
    },
    {
        logo:Mongodb
    },
    {
        logo:Mysql
    },
    {
        logo:Github
    },
    {
        logo:AWS
    },
    
    {
        logo:Netlify
    },
    {
        logo:Figma
    },
    {
        logo:Canva
    },
    
    
]