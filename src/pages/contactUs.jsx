import React , { useRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    console.log('Form Data:', {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
    });

    emailjs
    .sendForm('service_wnf6xop', 'template_81voyr7', form.current, {
      publicKey: 'N7Jt9f8IOVwYcKsQq',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        alert("Request has send!");
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    
  };

  return (
    <div>
      <Navbar/>

      <div className='register'>
        <form className='register_form' ref={form} onSubmit={sendEmail}>
          <label><em>Name</em></label>
          <input className='contact_textarea' type="text" name="user_name"  placeholder='name ... '/>
          <label><em>Email</em></label>
          <input className='contact_textarea' type="email" name="user_email"placeholder='email ... ' />
          <label><em>Message</em></label>
          <textarea className='contact_textarea' name="message" placeholder='message ... '/>
          <br />
          <input className='form_btn' type="submit" value="Send" />
          <br />
        </form>
      </div>
    
    </div>
  );

};

export default Contact;