import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar1 from './components/Calendar1';
import Foro from './Foro';
import Donaciones from './Donaciones';
import CardsQS from './components/CardsQS';
import Carousel from './components/Carousel';

function App() {
    return (
        <>
                <Routes>
                    <Route path="/calendario" element={<Calendar1 />} />
                    <Route path="/foro" element={<Foro />} />
                    <Route path="/donaciones" element={<Donaciones />} />
                    <Route path="/quienes-somos" element={<CardsQS />} />
                    <Route path="/colaboradores" element={<Carousel />} />
                </Routes>
        </>
    );
}

export default App;
