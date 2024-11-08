import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://github.com/skaduhs5232" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/thiago-de-oliveira-sampaio-0085a8239/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon fontSize="large" />
        </a>
      </div>
      <p className="footer__text">
        A portfolio designed & built by <a href="https://github.com/skaduhs5232" target="_blank" rel="noreferrer">Thiago Sampaio</a>
      </p>
    </footer>
  );
}

export default Footer;
