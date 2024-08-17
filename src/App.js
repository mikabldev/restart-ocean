import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeForo from './Views/HomeForo.js'
import Donaciones from './Views/Donaciones';
import Inicio from './Views/Inicio';
import Calendar1 from './Views/Calendar1';
import Navba from './components/Navbar';
import CardsNosotros from './components/cardsNosotros/CardsNosotros';
import NotFound from './Views/NotFound.js'
import Colaboradores from './Views/Colaboradores.js';


function App() {
    return (
        <>
        <Navba/>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/foro" element={<HomeForo />} />
                <Route path="/donaciones" element={<Donaciones />} />
                <Route path="/calendario" element={<Calendar1/>} />
                <Route path="/quienes-somos" element={<CardsNosotros/>} />
                <Route path="/colaboradores" element={<Colaboradores />} />
                <Route path="/*" element={<NotFound />} />


            </Routes>

        </>
    );
}

export default App;
