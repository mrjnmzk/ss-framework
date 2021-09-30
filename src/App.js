import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import CatalogPage from './components/catalogPage/catalogPage';
import PageItem from './components/catalogPage/pageItem';



function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/catalog' component={CatalogPage} />
        <Route exact path='/product' component={PageItem} />
        <Redirect to='/' />  
      </Switch>
      <Footer />
      </BrowserRouter>
    </>
  ); 

}

export default App;
