import {useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Main from './pages/Main';
import Mauricinho from './pages/Mauricinho';
import Footer from './components/Footer';
import Intro from './components/Intro';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';

 

function App() {
  
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro />}
      </AnimatePresence>

    {!showIntro && (

      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Main />
                <Mauricinho />
                <Footer/>
                <Analytics/>
              </>
            }
          />
        </Routes>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"/>

      </BrowserRouter>

    )}
    </>
  )
}

export default App
