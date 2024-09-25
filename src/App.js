// src/App.js
import React from 'react';
import './App.css';
import groomingSound from './assets/sadmusic.mp3'; 
import imageExample from './assets/grooming-image.png';

function App() {
  // Function to play sound
  const playSound = () => {
    new Audio(groomingSound).play();
  };

  return (
    <div className="app">
      <h1>Chapter XVI: Grooming</h1>

      <p>
        As in childhood we live sweeping close to the sky and now, what dawn is this.
      </p>

      <p>
        Herakles lies like a piece of torn silk in the heat of the blue saying.{' '}
        <span className="clickable" onClick={() => window.open("https://en.wikipedia.org/wiki/Geryon", "_blank")}>
          Geryon please
        </span>. The break in his voice made Geryon think for some reason of going into a barn first thing in the morning when the sunlight strikes a bale of raw hay still wet from the night.
      </p>

      <p>
        <span className="clickable" onClick={() => window.open("https://en.wikipedia.org/wiki/Heracles", "_blank")}>
          Put your mouth on it Geryon please
        </span>.
      </p>

      <p>
        Geryon did. It tasted sweet enough. I am learning a lot in this year of my life, thought Geryon. It tasted very young.
      </p>

      <p>
        Geryon felt clear and powerful – not some wounded angel after all but a magnetic person like{' '}
        <span className="clickable" onClick={() => window.open("https://www.artic.edu/artists/36926/henri-matisse", "_blank")}>
          Matisse
        </span>{' '} or{' '}
        <span className="clickable" onClick={() => window.open("https://en.wikipedia.org/wiki/Charlie_Parker", "_blank")}>
          Charlie Parker
        </span>!
      </p>

      <button onClick={playSound}>Play Grooming Sound</button> {/* Button to play sound */}

      <p>
        Afterwards, they lay kissing for a long time, then played gorillas. Got hungry. Soon they were sitting in a booth at the Bus Depot waiting for food.
      </p>

      <p>
        They had started to practice their song (<a href="https://www.youtube.com/watch?v=d-diB65scQU" target="_blank" rel="noopener noreferrer">
          Joy to the World
        </a>) when Herakles pulled Geryon’s head into his lap and began grooming for nits.
      </p>

      <img src={imageExample} alt="Grooming Scene" className="grooming-image" /> {/* Example image */}

      <p>
        Gorilla grunts mingled with breakfast sounds in the busy room. The waitress arrived holding two plates of eggs. 
        Geryon aged up at her from under Herakles’ arm. "Newlyweds?" she asked.
      </p>

      <p>
        Here's more on <a href="https://en.wikipedia.org/wiki/Henri_Matisse" target="_blank" rel="noopener noreferrer">Henri Matisse</a>, mentioned in the text.
      </p>
    </div>
  );
}

export default App;
