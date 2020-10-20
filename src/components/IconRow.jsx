import React from "react";

import { SiFacebook, SiGithub, SiGmail, SiLinkedin, SiTwitter } from 'react-icons/si';

import '../css/icons.css'

const IconRow  = () => {
  return (
    <div className="icon-spacing">
      <a href='https://www.facebook.com/garrett.gibo/' target='_blank'>
	<SiFacebook className='icon' size={32} />
      </a>
      <a href='https://twitter.com/GarrettGibo' target='_blank'>
	<SiTwitter className='icon' size={32} />
      </a>
      <a href='mailto: garrett.gibo@gmail.com' target='_blank'>
	<SiGmail className='icon' size={32} />
      </a>
      <a href='https://github.com/garrettgibo' target='_blank'>
	<SiGithub className='icon' size={32} />
      </a>
      <a href='https://www.linkedin.com/in/garrett-gibo/' target='_blank'>
	<SiLinkedin className='icon' size={32} />
      </a>
    </div>
  );
};

export default IconRow;
