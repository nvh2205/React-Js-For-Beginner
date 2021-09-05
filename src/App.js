import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileHeader from './components/MobileHeader';
import useScript from './utils/useScript';
import Phones from './features/Phones'
import Cart from './features/Cart';
import Oder from './features/Oder';
import ScrollToTops from './components/utils/ScrollToTop'
//const Phones = React.lazy(() => import('./features/Phones'))



function App() {


  //Use main.js custome
  //useScript('/assets/js/main.js');

  return (
    <div className="App wrapper">
      {/* <Suspense fallback={<div>Loading ...</div>}> */}
      <BrowserRouter>
       <ScrollToTops>
        <Header />
        <MobileHeader/>
        <Switch>
          <Redirect exact from="/" to="/phones" />
          <Route  path="/phones" component={Phones} />
          <Route path="/cart" component={Cart} />
          <Route path="/oder" component={Oder} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
        </ScrollToTops>

      </BrowserRouter>
      {/* </Suspense> */}
    </div >
  );
}

export default App;
