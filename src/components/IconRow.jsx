import React from "react";

import { SiFacebook, SiGithub, SiGmail, SiLinkedin, SiTwitter } from 'react-icons/si';

import '../css/icons.css';

const IconRow  = () => {
  return (
    <div className="icon-spacing">
      <a href='https://www.facebook.com/garrett.gibo/'
	 target='_blank'
	 rel='noopener noreferrer' >
	<SiFacebook className='icon' size={32} />
      </a>
      <a href='https://twitter.com/GarrettGibo'
	 target='_blank'
	 rel='noopener noreferrer' >
	<SiTwitter className='icon' size={32} />
      </a>
      <a href='mailto: garrett.gibo@gmail.com'
	 target='_blank'
	 rel='noopener noreferrer' >
	<SiGmail className='icon' size={32} />
      </a>
      <a href='https://github.com/garrettgibo'
	 target='_blank'
	 rel='noopener noreferrer' >
	<SiGithub className='icon' size={32} />
      </a>
      <a href='https://www.linkedin.com/in/garrett-gibo/'
	 target='_blank'
	 rel='noopener noreferrer' >
	<SiLinkedin className='icon' size={32} />
      </a>
    </div>
  );
};

export default IconRow;
