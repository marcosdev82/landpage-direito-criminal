'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';


export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ text: string; success: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Simulação de envio
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log('Enviado:', formData);
      setSubmitMessage({ text: 'Mensagem enviada com sucesso!', success: true });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitMessage({ text: 'Erro ao enviar. Tente novamente.', success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.InputGroup}>
        <label htmlFor="name">Nome</label>
        <input 
          className={styles.formInput}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Seu nome completo"
        />
      </div>

      <div className={styles.InputGroup}>
        <label htmlFor="email">E-mail</label>
        <input
          className={styles.formInput}
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="seu@email.com"
        />
      </div>

      <div className={styles.InputGroup}>
        <label htmlFor="subject">Assunto</label>
        <input
          className={styles.formInput}
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Sobre o que você precisa?"
        />
      </div>

      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea
          className={styles.text}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Escreva sua mensagem aqui..."
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {submitMessage && (
        <div className={styles.message}>
          {submitMessage.text}
        </div>
      )}
    </div>
  );
}