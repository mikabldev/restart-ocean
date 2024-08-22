import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Foro from './Views/Foro'
import Donaciones from './Views/Donaciones';
import Inicio from './Views/Inicio';
import Calendar1 from './Views/Calendar1';
import Navigation from './components/Navigation';
import CardsNosotros from './components/cardsNosotros/CardsNosotros';
import NotFound from './Views/NotFound.js'
import Colaboradores from './Views/Colaboradores.js';
import Register from './components/Login/Register.js';
import Profile from './components/Login/Profile.js';
import Pills from './components/Login/Pills.js'
import Context from './context/Context'
import useDeveloper from './context/hooks/useDeveloper.js'


function App() {
    const globalState = useDeveloper()
    return (
        <Context.Provider value={globalState}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/foro" element={<Foro />} />
                    <Route path="/donaciones" element={<Donaciones />} />
                    <Route path="/calendario" element={<Calendar1 />} />
                    <Route path="/quienes-somos" element={<CardsNosotros />} />
                    <Route path="/colaboradores" element={<Colaboradores />} />
                    <Route path='/registrarse' element={<Register />} />
                    <Route path='/login' element={<Pills />} />
                    <Route path='/perfil' element={<Profile />} />
                    <Route path="*" element={<NotFound />} />


                </Routes>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;