import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route} from 'react-router-dom';
import TestComponent from './components/CrimeSpec';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path="/"><App/></Route>
            <Route path="/CrimeSpec"><TestComponent/></Route>
        </div>
    </BrowserRouter>
);
