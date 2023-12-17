import Header from './components/Header';
import About from './components/About';

import Project from './components/Project';

import Work from './components/Work';

import Footer from './components/Footer';

export const  NavLinks=[
    {
        route:'About',
        id:'about',
        component:<><Header/><About/></>
    },
    {
        route:'Project',
        id:'project',
        component:<Project/>
    },
    {
        route:'Work',
        id:'work',
        component:<Work/>
    },
    {
        route:'Contact',
        id:'contact',
        component:<Footer/>
    }
]