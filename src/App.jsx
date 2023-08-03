import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Data from './components/Data'
import Awards from './components/Awards'
import Content from './components/Content'
import { Newsletter } from './components/Newsletter'
import { Steps } from './components/Steps'
import { Pricing } from './components/Pricing'
import { Review } from './components/Review'

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, [])

  return (
    <>
      <Header/>
      <Content/>
      <Data/>
      <Steps/>
      <Awards/>
      <Pricing/>
      <Review/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
