import './App.css';
import Header from './components/Header/Header';
import { Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MobileBottomBar from "./components/MobileBottomBar/MobileBottomBar"
import SideBar from './components/SideBar/SideBar';
import NavbarLinksSlider from './components/NavbarLinksSlider/NavbarLinksSlider';



function App() {
  return (
    <div className='w-full h-[100vh] bg-red-300 flex flex-col items-center justify-start 
    
    ' >
      <Header />


      <div className="bg-red-500 w-full h-[90vh] flex flex-col mt-[10vh]
       lg:h-[90vh] lg:w-full lg:flex-row lg:justify-center lg:items-start
       ">

        <SideBar />

        <div className='w-full h-[80vh] flex flex-col justify-start items-center
        lg:h-[90vh]
        '>
          <NavbarLinksSlider />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>

         <MobileBottomBar />
      </div>
      
    </div>
  );
}

export default App;
