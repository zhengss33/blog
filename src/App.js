import React from 'react';
import Header from './component/header';
import { BrowserRouter, Route } from "react-router-dom";
import { Globalstyle } from './style';
import Home from './page/home';
import Detail from './page/detail';

function App() {
  return (
    <div>
      <Globalstyle/>
      <Header/>
      <BrowserRouter>
        <div>
          <Route path="/" exact render={() => <Home/>}></Route>
          <Route path="/detail" exact render={() => <Detail/>}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
