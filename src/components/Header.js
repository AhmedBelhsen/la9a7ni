import React, { useEffect } from 'react';
import '../App.css';
import husky from '../img/husky.png';
import team1 from '../img/team1.png';
import team2 from '../img/team2.png';
import team3 from '../img/team3.png';
import rabiesImage from '../img/rabies.png';
import animalsImage from '../img/animals.png';
import { Routes } from '../configs/routes';
import { Link } from 'react-router-dom';

const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.frame-wrapper');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (
          rect.top < window.innerHeight &&
          rect.bottom > 0
        ) {
          el.classList.add('animate');
        } else {
          el.classList.remove('animate'); // Optionnel : enlever l'animation si l'élément sort de la vue
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="flex-header">
        <h1 className="blink">Safeguard Your Life, Shield Your Pet, Save Your Nation</h1>
        <div className="header-img">
          <img src={husky} alt="husky-and-cat" />
        </div>
      </header>

      <nav className="nav">
        <Link className="nav-link"  to={Routes.HOME}>About Us</Link>
        <Link className="nav-link"  to={Routes.SIGNUP}>Create Account</Link>
        <Link className="nav-link" to={Routes.LOGIN}>Login</Link>
        <Link className="nav-link"  to={Routes.GETVACCINATED}>Get Vaccinated</Link>
      </nav>

      <div className="title-description">
        <h2>War viruses are our deal</h2>
      </div>

      <div className='container-border'>
        <img src={rabiesImage} alt="Rabies Awareness" className="rabies-image" />
        <div className="wrapper border-frame">
          <h1>Meet Our Team</h1>
          <div className="team">
            <div className="team_member border-frame">
              <div className="team_img">
                <img src={team1} alt="Team_image" />
              </div>
              <h3>Eya</h3>
              <p className="role">Front-end</p>
              <p>Something as a description</p>
            </div>
            <div className="team_member border-frame">
              <div className="team_img">
                <img src={team2} alt="Team_image" />
              </div>
              <h3>Ahmed</h3>
              <p className="role">backend</p>
              <p>Something as a description</p>
            </div>
            <div className="team_member border-frame">
              <div className="team_img">
                <img src={team2} alt="Team_image" />
              </div>
              <h3>Yassine</h3>
              <p className="role">UI-UX</p>
              <p>Something as a description</p>
            </div>
            <div className="team_member border-frame">
              <div className="team_img">
                <img src={team3} alt="Team_image" />
              </div>
              <h3>Roua</h3>
              <p className="role">Presentation</p>
              <p>Something as a description</p>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-wrapper">
        <div className="title-presentation">
          <h2>Welcome to War Viruses</h2>
        </div>

        <div className="pageAndText-container">
          <div className="text-section">
            <p>
              At War Viruses, we are dedicated to addressing the critical issue of rabies in Tunisia through comprehensive support and resources. Our mission is to provide essential information and tools to help individuals and communities manage the rabies pandemic effectively.
              <br />
              Our initiatives include educational programs, vaccination drives, and partnerships with local health organizations. Together, we aim to reduce the incidence of rabies and ensure a safer environment for both people and animals in Tunisia.
            </p>
            <p>
              Our website offers a range of services designed to assist you in:
              <br />
              <strong>• Hygiene and Precautions:</strong> Access valuable advice on maintaining proper hygiene and taking necessary precautions to protect yourself and your pets during the rabies outbreak.
              <br />
              <strong>• Incident Response:</strong> Receive guidance on how to act in the event of a rabies-related incident, ensuring that you are prepared and informed on the best course of action.
              <br />
              <strong>• Vaccination Centers:</strong> Find the nearest vaccination centers to either vaccinate your pets or receive vaccinations for yourself. Our platform makes it easy to locate the most convenient options available.
              <br />
              <strong>• Free Vaccines:</strong> Benefit from our partnerships with volunteer veterinarians who provide free vaccines to help those in need, contributing to a collective effort to overcome this crisis.
            </p>
          </div>
          <div className="image-section">
            <img src={animalsImage} alt="Animals" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
