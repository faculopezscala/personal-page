import React from 'react';

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media">
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
  );
};

export default SocialMedia;