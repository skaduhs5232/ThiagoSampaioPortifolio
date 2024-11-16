import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
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
  const [showConfetti, setShowConfetti] = useState<boolean>(true);

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // Configura o confete para desaparecer após alguns segundos
    const timer = setTimeout(() => {
      setShowConfetti(false); // Desativa o confete após 4.8 segundos
    }, 10000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []); // Executa apenas uma vez no carregamento

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'} relative`}>
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={400} // Número de peças de confete
          gravity={0.7} // Controla a gravidade para confetes mais lentos
          initialVelocityY={9} // Ajusta a posição inicial vertical para "mais embaixo"
          recycle={false} // Impede que os confetes sejam reciclados
        />
      )}

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
          <Contact mode={mode} /> {/* Passando 'mode' para Contact */}
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
