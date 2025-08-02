import React, { useState } from 'react';

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
    console.log('Form submitted with data:', form);
    setStatus('sending');
    
    // Mock for local development - TEMPORARILY COMMENTED OUT FOR TESTING
    // if (process.env.NODE_ENV === 'development') {
    //   console.log('Development mode - simulating email send:', form);
    //   setTimeout(() => {
    //     setStatus('sent');
    //     console.log('Mock email sent successfully!');
    //   }, 1500);
    //   return;
    // }

    // Real API call
    try {
      console.log('Making real API call to /api/contact');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      console.log('API response status:', res.status);
      
      if (res.ok) {
        setStatus('sent');
        console.log('Real email sent successfully!');
      } else {
        const errorData = await res.text();
        console.error('API error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Your Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Your Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Subject:
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
        }}
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>
      {status === 'sent' && (
        <p style={{ color: 'green', marginTop: '1rem' }}>Message sent! Thank you.</p>
      )}
      {status === 'error' && (
        <p style={{ color: 'red', marginTop: '1rem' }}>There was an error. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;