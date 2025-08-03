import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Mock for local development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        setStatus('sent');
      }, 1500);
      return;
    }

    // Real API call for production
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('sent');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Your Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter your name"
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Your Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter your email"
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Subject:
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter subject"
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className={styles.textarea}
            placeholder="Your message goes here..."
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={styles.button}
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>
      {status === 'sent' && (
        <div className={`${styles.message} ${styles.success}`}>
          Message sent! Thank you.
        </div>
      )}
      {status === 'error' && (
        <div className={`${styles.message} ${styles.error}`}>
          There was an error. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;