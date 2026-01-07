import {useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Background from './components/Background';
import Header from './components/Header';
import Main from './pages/Main';
import Catalago from './pages/Catalogo';
import Mauricinho from './pages/Mauricinho';
import Contato from './pages/Contato';
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
        <Background />
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Main />
                <Catalago/>
                <Contato/>
                <Footer/>
                <Analytics/>
              </>
            }
          />
          <Route
            path='/mauricinho'
            element={<Mauricinho/>}
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
