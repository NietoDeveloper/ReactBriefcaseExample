import React from 'react';
import './footer.css';
import { footerItems, socialItems } from './FooterItems';

const Footer = () => {  

  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    
    const timerID = setInterval(() => {
      setDate(new Date());
      document.getElementById('date').innerHTML = date.toTimeString();
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
 
  return (
    <footer id='footer'>
      {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
      <a href='#' className='footer__logo'>
        Nieto Software Developer
      </a>
      <ul className='permalinks'>
        {footerItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className='footer__socials'>
        {socialItems.map((socialItem) => (
          <a
            key={socialItem.id}
            href={socialItem.href}
            target='_blank'
            rel='noreferrer'
          >
            {socialItem.icon}
          </a>
        ))}
      </div>
      
      <span class="footer__copy">
        <a target="_blank" href="https://github.com/NietoDeveloper" class="footer__dev-link" rel="noreferrer">Created by Manuel Nieto</a><p>®Copyrights2025</p><p id="date" />
      </span>

    </footer>
  );
};

export default Footer;
