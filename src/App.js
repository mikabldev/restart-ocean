import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Foro from './Views/Foro'
import Donaciones from './Views/Donaciones';
import Inicio from './Views/Inicio';
import Calendar1 from './Views/Calendar1';
import Navba from './components/Navbar';


function App() {
    return (
        <>
        <Navba/>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/foro" element={<Foro />} />
                <Route path="/donaciones" element={<Donaciones />} />
                <Route path="/calendario" element={<Calendar1/>} />
            </Routes>

        </>
    );
}

export default App;
