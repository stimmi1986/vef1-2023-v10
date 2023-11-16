import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../components/Button.jsx';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <a
            href="https://github.com/stimmi1986"
            className="text-3xl hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/styrmir-%C3%B6rn-arnarson-106580220/"
            className="text-3xl hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/styrmir86/"
            className="text-3xl hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <Button text="Þetta url er ekki til" url="/foundNot" />
      </div>
    </footer>
  );
}

export default Footer;
