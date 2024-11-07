// src/App.tsx
import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Contact,
  Navigation,
  Footer,
  Project,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import StarsCanvas from './components/Stars';

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'} relative`}>
      {/* StarsCanvas como fundo fixo */}
      <div className="stars-background">
        <StarsCanvas mode={mode} /> {/* Passa o modo para StarsCanvas */}
      </div>

      {/* Conteúdo principal */}
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <div className="relative z-10">
          <Contact />
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
