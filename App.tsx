import React from 'react';
import { Sidebar } from './components/Sidebar';
import { FloatingActionBar } from './components/FloatingActionBar';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { MagneticCursor } from './components/MagneticCursor';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <MagneticCursor />
      <Sidebar />
      <FloatingActionBar />
      <DarkModeToggle />

      <main className="main-content">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
