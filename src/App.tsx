import './App.scss'
import Cards from './cards/Cards';
import Footer from './footer/Footer';
// import MainEvent from './main-event/MainEvent'
import Navbar from './navbar/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <MainEvent></MainEvent> */}
      <Cards></Cards>
      <Footer></Footer>
    </>
  )
}

export default App;
