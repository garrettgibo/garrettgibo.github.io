import React from 'react';
import './css/App.css';
import myDogs from './images/kuma_mimi.jpg';
import githubLogo from './images/toppng.com-github-logo-png-2000x665.png';

function App() {
  return (
    <div className="h-center">
      <h1>Hi, I'm Garrett</h1>
      <p>One day I will fill this in with all my projects, passions, and pursuits,
      but for now enjoy this picture of my dogs</p>
      <div>
        <img src={myDogs} alt="My dogs Kuma and Mimi" />
      </div>

      I do some work here and there, so check out what I do
      <div>
        <a href="https://github.com/garrettgibo" target="_blank">
          <img src={githubLogo} alt="Github" />
        </a>
      </div>
    </div>
  );
}

export default App;
