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
      <h2>Subscribe to our free newsletter!</h2>
      <form onSubmit={handleSubmit} className='subscribe-form'>
        <label htmlFor='firstName' className='visually-hidden'>
          First Name:
        </label>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          ref={firstNameRef}
          aria-required='true'
        />
        <label htmlFor='lastName' className='visually-hidden'>
          Last Name:
        </label>
        <input type='text' id='lastName' placeholder='Last Name' />
        <label htmlFor='email' className='visually-hidden'>
          Email:
        </label>
        <input
          type='email'
          id='email'
          placeholder='Email'
          ref={emailRef}
          aria-required='true'
        />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  );
}

export default Subscribe;
