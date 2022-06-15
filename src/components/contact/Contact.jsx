import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from "react";
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4aqsr2s",
        "template_n3ydone",
        form.current,
        "VZpQxg23Nyq8tc1Da"
      )

      e.target.reset();
      
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>desaiprathamesh1411@gmail.com</h5>
            <a href="mailto:desaiprathamesh1411@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerFill className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Prathamesh Desai</h5>
            <a href="https://m.me/prathamesh.desai.752">Send a Message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>Prathamesh Desai</h5>
            <a
              href="https://wa.me/+919922611788"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* form to message */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary"> Send Message</button>
        </form>
      </div>
    </section>
  );
}
