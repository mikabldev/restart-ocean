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
import Profile from './components/Login/Profile.js';
import Context from './context/Context'
import useDeveloper from './context/hooks/useDeveloper.js'
import Footer from './components/Footer/Footer.js';
import MapaSVG from './components/Mapa/MapaSVG.js'
import NewPost from './Views/NewPost.js';


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
                    <Route path='/perfil' element={<Profile />} />
                    <Route path='/mapa' element={<MapaSVG/>} />
                    <Route path="*" element={<NotFound />} />
                    <Route path='/nuevo-post' element={<NewPost/>} />
                


                </Routes>
                <Footer />
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
