import React from 'react';
import './portfolio.css';
import { data } from './PortfolioData';

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h2>Clients and Proyect</h2>

      <div className='proyects'>
        {data.map((item) => (
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
<article className='proyect' >
            <div className='img'>
              <img src={item.image} alt={item.title} />
            </div>

            <h2>{item.title}</h2>
            
            <h1>{item.typeproyect} </h1>

            <p>{item.description}</p>

            <div className='portfolio__item-cta'>

              {/* biome-ignore lint/a11y/noBlankTarget: <explanation> */}
              <a href={item.github} target='_blank' className='code' class="neon3">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                <h3>Code</h3>
              </a>
              {/* biome-ignore lint/a11y/noBlankTarget: <explanation> */}
              <a target='_blank' href={item.demo} className='online' class="neon3">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                <h3>On Line</h3>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
