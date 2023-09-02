import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_awkbiet', 'template_sbbx63o', form.current, 'FkQjZq9pVqTF0BJoj')

    e.target.reset()
};




  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ulushbey@gmail.com</h5>
            <a href='mailto:ulushbey@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href='https://m.me/profile.php?id=100009411748710' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>010-3526-8925</h5>
            <a href='https://api.telegram.org/send?phone=+821035268925' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END of Contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


      </div>



    </section>
  )
}

export default Contact