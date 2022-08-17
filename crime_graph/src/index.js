import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route} from 'react-router-dom';
import CrimeSpec from './components/CrimeSpec';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
          <Route exact path="/"><App/></Route>
          <ScrollToTop/>
          <Route path="/CrimeSpec"><CrimeSpec/></Route>
      </BrowserRouter> 
    </Provider>
);
