import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import cf1 from './cf1.jpg';
import cf2 from './cf2.jpg';
import cf3 from './cf3.jpg';
import cf4 from './cf4.jpg';
import extension from './extension.jpg';
import home from './home.png';
import home2 from './home2.png';
import home3 from './home3.png';
import faculty from './faculty.png';
import forum1 from './forum1.png';
import forum2 from './forum2.png';
import forum3 from './forum3.png';
import forum4 from './forum4.png';
import contactus from './contactus.png';
import profile from './profile.png';
import github from './github.png';

export default function Projects() {
  return (
    <>
        <div className='projects'>
          <h1>Projects</h1>
        </div>
        <p style={{color:'white'}}><i>Unleash the cat for a sneak peek at my projects.</i></p>
        <a href="https://github.com/Nikhil5022" rel="noreferrer" target='_blank'><img src={github} alt="" className='github' /></a>
        <div className='projectslists'>
          <div className='projectlist'>
            <p><b style={{ fontSize: "1rem", padding: "2px" }}>Aim</b>: To Develop an Interactive website empowering users to discover, explore, and rate
              movies. <br />
              <b style={{ fontSize: "1rem", padding: '2px' }}>TechStack</b>: Angular, Express JS, MongoDB, Tailwind CSS. <br />
              <b style={{ fontSize: "1rem", padding: "2px" }}>Description</b>: Developed a comprehensive IMDb clone project with user registration, search
              functionality, detailed movie/TV show pages, user reviews, and responsive design,
              showcasing adeptness in web development, teamwork, and delivering a user-friendly
              product.
            </p>
            <div className='cinefiles'>
              <Carousel fade>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={cf1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={cf2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={cf3}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={cf4}
                    alt="Second slide"
                  />
                </Carousel.Item>

              </Carousel>
            </div>
          </div>
          <hr style={{ color: "white", padding: '5px' }} />
          <div className='projectlist' id='projectextension'>
            <div className='extension'>
              <img
                className="d-block w-50"
                src={extension}
                alt="First slide"
              />

            </div>
            <p><b style={{ fontSize: "1rem", padding: "2px" }}>Aim</b>: To Develop a Chrome Extension that is used to bookmark your websites for an
              effortless daily experience. <br />
              <b style={{ fontSize: "1rem", padding: '2px' }}>TechStack</b>: Angular ,Express ,Tailwind CSS. <br />
              <b style={{ fontSize: "1rem", padding: "2px" }}>Description</b>: Created a user-friendly and efficient bookmarking Chrome extension that
              enables users to save and organize their favorite websites with ease, showcasing
              proficiency in web development and enhancing user experience.
              product.
            </p>

          </div>
          <hr style={{ color: "white", padding: '5px' }} />
          <div className='projectlist'>
            <p><b style={{ fontSize: "1rem", padding: "2px" }}>Aim</b>: To Develop a Two Interface Website to handle the events and data of ET Department. <br />
              <b style={{ fontSize: "1rem", padding: '2px' }}>TechStack</b>: Angular, Express JS, MongoDB, Tailwind CSS. <br />
              <b style={{ fontSize: "1rem", padding: "2px" }}>Description</b>:
              This project is about creating a two-interface website for the Department of Emergent Technologies (ET). The first interface handles event management, making it easier to organize, track, and engage participants in emerging technology-related activities. The second interface is for data management, ensuring the secure organization and storage of documents relevant to emergent technologies. This solution enhances departmental efficiency, promotes collaboration, and prioritizes data security in the ever-evolving field of emergent technologies.</p>
            <div className='etwebsite'>
              <Carousel fade>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={home}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={home2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={home3}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={faculty}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={forum1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={forum2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={forum3}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={forum4}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={profile}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={contactus}
                    alt="Second slide"
                  />
                </Carousel.Item>

              </Carousel>
            </div>
          </div>
        </div>
    </>
  );
}
