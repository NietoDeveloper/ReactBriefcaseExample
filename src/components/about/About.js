import './about.css';
import Nieto1 from '../../assets/nieto1.png';
const About = () => {
  return (
    <section id='about'>

            <article className='about__card'>
              <h5>3 Years</h5>
              <small>Experience</small>
            </article>


        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Nieto1} alt='About Me' />
          </div>
        </div>



        <article className='about__card2'>
              <p>
              Welcome to my portfolio! I'm Sagar, a passionate{' '}
              <strong>MERN stack developer</strong>. My expertise lies in crafting
              dynamic and interactive web applications using cutting-edge
              technologies. With a strong web development background, I specialize
              in <strong>MongoDB, Express.js, React, & Node.js</strong>. My drive
              stems from the belief that technology can solve real-world problems.
              I continually strive to enhance my skills and stay abreast of the
              latest trends in web development. Feel free to explore my projects
              and reach out for exciting opportunities and collaborations. I'm
              always eager to take on new challenges and push the boundaries of
              web possibilities. Thank you for visiting, and enjoy your time here!
            </p>
           
            </article>
      
      </section>

  );
};

export default About;
