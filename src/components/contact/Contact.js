import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const contactItems = [
  {
    id: 1,
    icon: <MdOutlineEmail className='contact__option-icon' />,
    label: 'Email',
    contactInfo: 'NietoSoftwareDeveloper@outlook.com',
    href: "mailto:NietoSoftwareDeveloper@outlook.com"
  },
  {
    id: 2,
    icon: <BsWhatsapp className='contact__option-icon' />,
    label: 'Whatsapp',
    contactInfo: '57 3132151939',
    href: "https://wa.me/573132151939"
  },
];

const Contact = () => {
  const formRef = useRef();
  const sendSuccess = () => {
    toast.success('Message sent successfully');
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qn83m8h',
      'template_rtgeb28',
      formRef.current, {
        publicKey: 'r2KkuLntpUusxz-TX',
      })

    sendSuccess();
    e.target.reset();
  };

  return (
    <section id='contact'>

      <h2>Contact Manuel</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {contactItems.map((contact) => (
            <article className='contact__option' key={contact.id}>
              {contact.icon}
              <h4>{contact.label}</h4>
              <h5>{contact.contactInfo}</h5>
              <a
                href={contact.href}
                target='_blank'
                rel='noreferrer'
              >
                Click Here
              </a>
            </article>
          ))}
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            placeholder='Your Full Name'
            required
          />
          <input
            type='email'
            name='user_email'
            placeholder='Your Email Address'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          />

          <button type='submit' class="neon4" value="Send" >

            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <span></span>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <span></span>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <span></span>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <span></span>
            <h3>Send</h3>

          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
