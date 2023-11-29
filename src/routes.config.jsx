import Header from './components/Header';
import About from './components/About';

import Project from './components/Project';

import Work from './components/Work';

import Footer from './components/Footer';

export const  NavLinks=[
    {
        route:'About',
        path:'#about',
        component:<><Header/><About/></>
    },
    {
        route:'Project',
        path:'#project',
        component:<Project/>
    },
    {
        route:'Work',
        path:'#work',
        component:<Work/>
    },
    {
        route:'Contact',
        path:'#footer',
        component:<Footer/>
    }
]