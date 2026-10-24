import { useRef } from 'react';

const UncontrolledFeedbackForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name) {
      nameRef.current.focus();
      return;
    }

    if (!email.includes('@')) {
      emailRef.current.focus();
      return;
    }

    if (!message) {
      messageRef.current.focus();
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Name" />
        <input type="email" ref={emailRef} placeholder="Email" />
        <textarea ref={messageRef} placeholder="Your message" />
        <button type="submit">Send Feedback</button>
      </form>
    </>
  );
};

export default UncontrolledFeedbackForm;
