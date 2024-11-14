import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import image from "../assets/images/image.png";

interface CipheredTextProps {
  textArray: string[];
  speed?: number;
  delay?: number;
}

const CipheredText: React.FC<CipheredTextProps> = ({ textArray, speed = 100, delay = 3000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const symbols = "0189!@#$%^*";

  useEffect(() => {
    const text = textArray[currentTextIndex];
    let currentText = Array(text.length).fill(""); 
    let currentIndex = 0; 
    const revealSpeed = speed * 8; // Controla a velocidade de revelação final do caractere
    const randomSpeed = speed / 2; // Controla a frequência de exibição dos caracteres aleatórios

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        // Exibir caracteres aleatórios por um curto período
        const randomizeInterval = setInterval(() => {
          const randomText = currentText.map((char, idx) =>
            idx === currentIndex ? symbols[Math.floor(Math.random() * symbols.length)] : char
          );
          setDisplayedText(randomText.join(""));
        }, randomSpeed);

        // Revelar o caractere final após um pequeno intervalo
        setTimeout(() => {
          clearInterval(randomizeInterval);
          currentText[currentIndex] = text[currentIndex];
          setDisplayedText(currentText.join(""));
          currentIndex += 1;

          // Se finalizado, alterna para o próximo texto após `delay`
          if (currentIndex >= text.length) {
            clearInterval(intervalId);
            setTimeout(() => {
              setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
            }, delay);
          }
        }, revealSpeed); // Tempo antes de revelar o caractere final
      }
    }, revealSpeed);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, textArray, speed, delay]);

  return <span>{displayedText}</span>;
};

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={image} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/skaduhs5232" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/thiago-de-oliveira-sampaio-0085a8239/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>Thiago Sampaio</h1>
          <p>
            <CipheredText 
              textArray={[
                "Software Developer",
                "Front-End Developer",
                "Back-End Developer",
                "Data Analyst"
              ]} 
              speed={50} // Ajustado para ser mais rápido
              delay={3000} 
            />
          </p>
          <div className="mobile_social_icons">
            <a href="https://github.com/skaduhs5232" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/thiago-de-oliveira-sampaio-0085a8239/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
