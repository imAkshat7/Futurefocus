import { useState, useMemo } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;