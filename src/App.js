import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Foro from './pages/Foro';
import Donaciones from './pages/Donaciones';
import Inicio from './pages/Inicio';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/foro" element={<Foro />} />
                <Route path="/donaciones" element={<Donaciones />} />
            </Routes>
        </>
    );
}

export default App;
