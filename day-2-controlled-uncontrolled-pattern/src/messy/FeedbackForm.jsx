import { useState, useRef } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const messageRef = useRef(); // using ref for message

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Name required');
      return;
    }
    if (!email.includes('@')) {
      alert('Valid email required');
      return;
    }
    if (!messageRef.current.value) {
      messageRef.current.focus();
      return;
    }
    console.log('Form submitted:', {
      name,
      email,
      message: messageRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea ref={messageRef} placeholder="Your message" />
      <button type="submit">Send Feedback</button>
    </form>
  );
}
