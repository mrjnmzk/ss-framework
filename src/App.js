import './App.css';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
// import NumberList from './components/catalogPage/catalogPage';
import CatalogPage from './components/catalogPage/catalogPage'


function App() {
  return (
    <>
      
      <Nav />
      
      <CatalogPage />
      {/* <Main /> */}
      {/* <NumberList  /> */}
      <Footer /> 
    </>
  ); 

}

export default App;
