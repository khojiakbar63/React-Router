import Header from './components/header'
import MainSection from './components/layouts/main-section'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Service from './pages/service'
import Contact from './pages/contact'
import Error from './pages/error'


import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Header/>
      
      <MainSection>
          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/*" element={<Error/>}/>

          </Routes>
      </MainSection>

      <Footer/>
  
    </>
  );
};

export default App;