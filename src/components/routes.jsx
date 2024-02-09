import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from '../pages/about/about'
import Contact from '../pages/contact/contact'
import Home from '../pages/home'

import ProjetosPage from '../pages/projects/projects'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={ProjetosPage} />

    </BrowserRouter>
);

export default Routes