import { useState, useRef } from 'react';

const ControlledFeedbackForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      nameRef.current.focus();
      return;
    }

    if (!form.email.includes('@')) {
      emailRef.current.focus();
      return;
    }

    if (!form.message) {
      messageRef.current.focus();
      return;
    }

    console.log('Form submitted:', form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          ref={nameRef}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          ref={emailRef}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          value={form.message}
          name="message"
          onChange={handleChange}
          ref={messageRef}
          placeholder="Your message"
        />
        <button type="submit">Send Feedback</button>
      </form>
    </>
  );
};

export default ControlledFeedbackForm;
