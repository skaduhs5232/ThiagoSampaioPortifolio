import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; 
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

interface ContactProps {
  mode: string; // Recebendo a prop de modo
}

const Contact: React.FC<ContactProps> = ({ mode }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado para o loader

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos
    const isNameValid = name.trim() !== '';
    const isEmailValid = email.trim() !== '' && /\S+@\S+\.\S+/.test(email);
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      setErrorMessage('Please fill out all fields correctly.');
      return;
    }

    // Lógica de envio de e-mail
    if (form.current) {
      setIsLoading(true); // Ativando o loader
      emailjs
        .sendForm(
          'service_pz8i87r', // Service ID
          'template_xj17ilb', // Template ID
          form.current, // Referência ao formulário
          'l0_NWAXxX9SmqjzIw' // Public Key
        )
        .then(
          (result) => {
            console.log('Email sent:', result.text);
            setSuccessMessage('Email sent successfully!');
            setErrorMessage('');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.error('Email error:', error.text);
            setErrorMessage('An error occurred while sending the email. Please try again.');
            setSuccessMessage('');
          }
        )
        .finally(() => {
          setIsLoading(false); // Desativando o loader
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className={`contact_wrapper ${mode}-mode`}>
          <h1>Get in Touch</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail} // Submit do formulário
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                error={emailError}
                helperText={emailError ? 'Please enter a valid email address' : ''}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />
            <Button
              variant="contained"
              endIcon={!isLoading && <SendIcon />} // Mostrar ícone apenas quando não estiver carregando
              type="submit"
              disabled={isLoading} // Desativar o botão durante o envio
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Send'} {/* Loader */}
            </Button>
          </Box>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
