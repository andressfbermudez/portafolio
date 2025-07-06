import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Education from './pages/education/Education';
import Certifications from './pages/certifications/Certifications';
import Footer from './components/footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/certifications" element={<Certifications />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
