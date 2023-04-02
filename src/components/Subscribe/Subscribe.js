import React, { useRef, useEffect } from "react";
import "./Subscribe.css";

function Subscribe() {
  const firstNameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: handle form submission
  }

  return (
    <div className='subscribe-container'>
      <h3>Subscribe to our free newsletter!</h3>
      <form onSubmit={handleSubmit} className='subscribe-form'>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          ref={firstNameRef}
        />
        <input type='text' id='lastName' placeholder='Last Name' />
        <input type='email' id='email' placeholder='Email' ref={emailRef} />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  );
}

export default Subscribe;
