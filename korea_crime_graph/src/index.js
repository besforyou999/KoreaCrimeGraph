import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route} from 'react-router-dom';
import TestComponent from './components/CrimeSpec';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='korea_crime_graph'>
        <div>
            <Route exact path="/"><App/></Route>
            <ScrollToTop/>
            <Route path="/CrimeSpec"><TestComponent/></Route>
        </div>
    </BrowserRouter>
);
