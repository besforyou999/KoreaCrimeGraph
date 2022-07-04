import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route} from 'react-router-dom';
import TestComponent from './components/TestComponent';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <div>
            <Route exact path="/"><App/></Route>
            <Route path="/testComponent"><TestComponent/></Route>
        </div>
    </BrowserRouter>
);
