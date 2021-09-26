import './App.css';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
// import NumberList from './components/catalogPage/catalogPage';
import CatalogPage from './components/catalogPage/catalogPage';
import Filter from "./components/catalogPage/filter";


function App() {
  return (
    <>
      
      <Nav />
      <Filter />
      <CatalogPage />
      {/* <Main /> */}
      {/* <NumberList  /> */}
      <Footer /> 
    </>
  ); 

}

export default App;
