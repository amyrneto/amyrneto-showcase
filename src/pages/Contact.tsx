import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => (
  <div className="content-container">
    <h1>Contact</h1>
    <p>
      I'd love to hear from you! Whether you have questions about my work,
      want to discuss potential collaborations, or just want to say hello,
      feel free to reach out using the form below.
    </p>

    <ContactForm />

    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <p>You can also connect with me on:</p>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <li>
          <a
            href="https://github.com/amyrneto"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        {/* Add more social links as needed */}
      </ul>
    </div>
  </div>
);

export default Contact;