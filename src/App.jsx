import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Background from './components/Background';
import Header from './components/Header';
import Main from './pages/Main';
import Catalago from './pages/Catalogo';
import Mauricinho from './pages/Mauricinho';
import Contato from './pages/Contato';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
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


    </>
  )
}

export default App
