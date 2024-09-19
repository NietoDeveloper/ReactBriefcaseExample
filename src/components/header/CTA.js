import React from 'react';
import CV from '../../assets/cv.pdf';
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn' class="neon">
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <span></span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span></span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span></span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span></span>
          <h3>CV PDF</h3>
      </a>
      <a href='#contact' className='btn btn-primary' class="neon">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span></span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span></span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span></span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span></span>
          <h3>Clients</h3>
      </a>
    </div>
  );
};

export default CTA;
