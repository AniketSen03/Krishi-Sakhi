import { Routes, Route } from "react-router-dom";
import './App.css'
import Cursor from './Cursor'
import About from './Components/About'
import Header  from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Services from "./Components/Services";
import Home from "./Components/Home";
import Chatbot from "./Components/Chatbot";
import FarmSection from "./Components/FarmSection";
import Dashboard from "./Components/Dashboard";
import WeatherSection from "./Components/WeatherSection";
import KrishiStore from "./Components/KrishiStore";
import DashboardHome from "./Components/Dashboardhome";

function App() {

  return (
    <>
    <Cursor/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/farm-section' element={<FarmSection/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/weather-forecast' element={<WeatherSection/>}/>
        <Route path='/krishi-store' element={<DashboardHome/>}/>
        <Route path='/products' element={<KrishiStore/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
