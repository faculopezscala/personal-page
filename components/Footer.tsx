import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="social-media-links">
        <a href="https://twitter.com/faculopezscala" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/faculopez/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://www.instagram.com/faculopezsala" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Instagram" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Facu Lopez</p>
    </footer>
  );
};

export default Footer;