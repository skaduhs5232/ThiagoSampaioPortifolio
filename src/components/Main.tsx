import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import image from "../assets/images/image.png"

interface CipheredTextProps {
  textArray: string[];
  speed?: number;
  delay?: number;
}

const CipheredText: React.FC<CipheredTextProps> = ({ textArray, speed = 100, delay = 3000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const symbols = "0123456789!@#$%^&*";

  useEffect(() => {
    const text = textArray[currentTextIndex];
    let currentText = Array(text.length).fill(""); 
    let currentIndex = 0; // Índice atual da letra a ser revelada
    let randomizing = true; // Indica se estamos no modo aleatório

    const randomizeInterval = setInterval(() => {
      // Gera caracteres aleatórios até o próximo caractere correto ser revelado
      if (randomizing) {
        const randomText = currentText.map((char, idx) =>
          idx === currentIndex ? symbols[Math.floor(Math.random() * symbols.length)] : char
        );
        setDisplayedText(randomText.join(""));
      }
    }, speed); // Velocidade de troca de caracteres aleatórios

    const revealInterval = setInterval(() => {
      if (randomizing && currentIndex < text.length) {
        // Parar a aleatoriedade e revelar o próximo caractere correto
        currentText[currentIndex] = text[currentIndex];
        setDisplayedText(currentText.join(""));
        currentIndex += 1;

        // Quando o caractere correto é revelado, pausa aleatoriedade temporariamente
        if (currentIndex >= text.length) {
          randomizing = false;
          clearInterval(randomizeInterval);
          clearInterval(revealInterval);

          // Após uma pausa, exibe a próxima frase
          setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          }, delay);
        }
      }
    }, speed * 3); // Mais lento para dar o efeito de revelação gradual e pausada

    return () => {
      clearInterval(revealInterval);
      clearInterval(randomizeInterval);
    };
  }, [currentTextIndex, textArray, speed, delay]);

  return <span>{displayedText}</span>;
};

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img
            src={image} // Use a imagem importada
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/skaduhs5232"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-de-oliveira-sampaio-0085a8239/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Thiago Sampaio</h1>
          <p>
            <CipheredText 
              textArray={[
                "Desenvolvedor de Software",
                "Desenvolvedor Front-End",
                "Desenvolvedor Back-End",
                "Analista de Dados"
              ]} 
              speed={100} 
              delay={3000} 
            />
          </p>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/skaduhs5232"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-de-oliveira-sampaio-0085a8239/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
