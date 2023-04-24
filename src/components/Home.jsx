import React from 'react';
import vg from '../assets/2.webp';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

function Home() {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>SharanSoft</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            A tech solution company develops and provides technology-based
            solutions for businesses to improve operational efficiency and
            customer experience. They leverage cutting-edge technologies and
            offer a range of services from custom software solutions to
            consulting and ongoing maintenance. Working with a tech solution
            company can save businesses time, money, and resources while staying
            competitive.
          </p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who we are? </h1>
          <p>
            Tech companies can provide a wide range of services, including
            software development, web design, mobile application development,
            data analytics, cloud computing, cybersecurity, and IT consulting.
            They may also offer ongoing maintenance and support to ensure that
            the technology solutions they provide continue to operate smoothly
            and effectively. In addition to developing and providing technology
            solutions, tech companies also invest heavily in research and
            development to stay ahead of the curve and develop new products and
            services. Some tech companies also collaborate with other
            organizations to bring new ideas and technologies to market.
            Overall, the goal of a tech company is to leverage technology to
            create solutions that help businesses and individuals achieve their
            goals more efficiently and effectively.
          </p>
        </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>
          <article>

            <div style={{
                    animationDelay: "0.3s",
                }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{
                    animationDelay: "0.5s",
                }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={{
                    animationDelay: "0.7s",
                }}>
                <AiFillYoutube />
                <p>YouTube</p>
            </div>
            <div style={{
                    animationDelay: "1s",
                }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
