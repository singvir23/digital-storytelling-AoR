import React from 'react';
import './App.css';
import groomingSound from './assets/sadmusic.mp3';
import groomingImage from './assets/grooming-image.png';

function App() {
  // Function to play sound
  const playSound = () => {
    new Audio(groomingSound).play();
  };

  return (
    <div className="app">
      {/* Streaming title */}
      <h1 className="chapter-title delay-1">PAIR</h1>

      <p className="streaming-text delay-1">
        These days Geryon was experiencing a pain not felt since childhood. His wings were struggling. They tore against each other on his shoulders like the little mindless red animals they were.
      </p>

      <p className="streaming-text delay-2">
        With a piece of wooden plank he’d found in the basement, Geryon made a back brace and lashed the wings tight. Then put his jacket back on. 
        <span className="highlight clickable" onClick={() => window.open("https://www.ncbi.nlm.nih.gov/books/NBK558911/", "_blank")}>
          You seem moody today
        </span>, Geryon, anything wrong? said Herakles when he saw Geryon coming up the basement stairs. His voice had an edge. He liked to see Geryon happy. 
      </p>

      <p className="streaming-text delay-3">
        Geryon felt his wings turn in, and in, and in. 
        <span className="highlight clickable" onClick={() => window.open("https://www.youtube.com/watch?v=CuNJ5j2fybo&ab_channel=ReggaeLife", "_blank")}>
          Nope, just fine
        </span>. Geryon smiled hard with half of his face. So tomorrow, Geryon. Tomorrow? Tomorrow we’ll take the car and drive out to the volcano, you’ll like that. Yes. Get some photographs. 
      </p>

      <p className="streaming-text delay-4">
        Geryon sat down suddenly. A tonight – Geryon? You okay? Yes fine, I’m listening. Tonight–? 
        <span className="highlight clickable" onClick={() => window.open("https://www.google.com/search?q=yellow+jacket", "_blank")}>
          Why do you have your jacket over your head?
        </span> 
      </p>

      <p className="streaming-text delay-5">
        Can’t hear you, Geryon. The jacket shifted. Geryon peered out. I said sometimes I need a little privacy. 
        Herakles was watching him, his eyes still as a pond. They watched each other, this odd pair.
      </p>

      {/* Streaming title */}
      <h1 className="chapter-title delay-6">GROOMING</h1>

      <p className="streaming-text delay-6">
        As in childhood, we live sweeping close to the sky, and now, what dawn is this.
        <span className="highlight clickable" onClick={() => window.open("https://en.wikipedia.org/wiki/Silk_Road", "_blank")}>
          Herakles lies like a piece of torn silk
        </span> in the heat of the blue saying, Geryon please.
      </p>

      <p className="streaming-text delay-7">
        The break in his voice made Geryon think for some reason of going into a barn first thing in the morning when the sunlight strikes a bale of raw hay still wet from the night. 
        <span className="highlight clickable" onClick={() => window.open("https://www.thecut.com/2015/10/ask-polly-should-i-tell-him-what-i-want.html", "_blank")}>
          Put your mouth on it, Geryon, please.
        </span> 
      </p>

      {/* Streaming button */}
      <button className="delayed-button" onClick={playSound}>Grooming Sound</button>

      <p className="streaming-text delay-8">
        Geryon did. It tasted sweet enough. I am learning a lot in this year of my life, thought Geryon. It tasted very young.
      </p>

      <p className="streaming-text delay-9">
        Geryon felt clear and powerful – not some wounded angel after all but a magnetic person like 
        <span className="highlight clickable" onClick={() => window.open("https://en.wikipedia.org/wiki/Henri_Matisse", "_blank")}>
          Matisse
        </span> or 
        <span className="highlight clickable" onClick={() => window.open("https://www.biography.com/musician/charlie-parker", "_blank")}>
          Charlie Parker
        </span>!
      </p>

      <p className="streaming-text delay-10">
        Afterwards, they lay kissing for a long time, then played gorillas. Got hungry. Soon they were sitting in a booth at the Bus Depot waiting for food.
      </p>

      <p className="streaming-text delay-11">
        They had started to practice their song 
        <a href="https://www.youtube.com/watch?v=30OaM6b48k8&ab_channel=ChristmasSongsandCarols-LovetoSing" target="_blank" rel="noopener noreferrer">Joy to the World</a> 
        when Herakles pulled Geryon’s head into his lap and began grooming for nits. Gorilla grunts mingled with breakfast sounds in the busy room. 
        The waitress arrived holding two plates of eggs.
      </p>

      <img src={groomingImage} alt="Grooming Scene" className="grooming-image delay-12" />

      <p className="streaming-text delay-13">
        Geryon aged up at her from under Herakles’ arm. "Newlyweds?" she asked.
      </p>

      {/* Streaming title */}
      <h1 className="chapter-title delay-14">WALLS</h1>

      <p className="streaming-text delay-14">
        That night they went out painting. Geryon did an early red-winged loveslave on the garage of the priest’s house next to the Catholic Church.
      </p>

      <p className="streaming-text delay-15">
        Then passing down Main Street, they saw fat white letters (recent) on the side of the post office: 
        <span className="highlight clickable" onClick={() => window.open("https://www.reddit.com/r/antiwork/", "_blank")}>
          Capitalism sucks
        </span>. Herakles eyed the paint supply dubiously. Well. He parked in the alley.
      </p>

      <p className="streaming-text delay-16">
        After crossing out the white letters neatly with a bar of opaque black, he encircled it in an airy red cloud of chancery script: 
        <span className="highlight clickable" onClick={() => window.open("https://www.thecut.com/2015/10/ask-polly-should-i-tell-him-what-i-want.html", "_blank")}>
          Cut here
        </span>. He was quiet as they got back into the car. Then down the tunnel to the on-ramp for the freeway.
      </p>

      <p className="streaming-text delay-17">
        Geryon was bored and said he couldn’t see any good spaces left. He got out his camera and went off toward the sound of traffic.
      </p>

      <p className="streaming-text delay-18">
        Up on the overpass, the night was wide open and blowing headlights like a sea. He stood against the wind and let it peel him clean.
      </p>

      <p className="streaming-text delay-19">
        Back at the tunnel, Herakles had finished printing his seven personal precepts in vertical black and red over a fading stenciled 
        <span className="highlight clickable" onClick={() => window.open("https://www.youtube.com/watch?v=qs35t2xFqdU&ab_channel=xGunsSaysBAANGx", "_blank")}>
          Leave the Walls Alone
        </span> and was down on one knee scraping the brush on the edge of the can. He did not look up but said, there’s some paint left – another loveslave?
      </p>

      <p className="streaming-text delay-20">
        No, let’s do something cheerful. All your designs are about captivity, it depresses me.
      </p>

      <p className="streaming-text delay-21">
        Geryon watched the top of Herakles’ head and felt his limits returning. Nothing to say. Nothing. He looked at this fact in mild surprise. 
        Once in childhood his ice cream had been eaten by a dog. Just an empty cone in a small dramatic red fist.
      </p>

      <p className="streaming-text delay-22">
        Herakles stood up. No? Let’s go then. On the way home they tried 
        <a href="https://www.youtube.com/watch?v=30OaM6b48k8&ab_channel=ChristmasSongsandCarols-LovetoSing" target="_blank" rel="noopener noreferrer">Joy to the World</a> 
        but were too tired. It seemed a long drive.
      </p>

      {/* Streaming title */}
      <h1 className="chapter-title appendix-title">APPENDIX</h1>

      <p className="streaming-text delay-23">
        Geryon feels this pull all the time, stuck as he is on the wings of the past. Yet, in the fractured space between body and earth lies the invisible tether of time; for an instant, that gets shattered: What is pain when wings form one extension of self? A reminder, perhaps, that flight carries burden, too.
      </p>

      <p className="streaming-text delay-24">
        Geryon's wings were not a part of him but memories in their own right: living, breathing, with their own weight of the choices of action in the past. What pulled was not just physical. It was the weight of choices and moments forgotten, repressed. Each of his flappings sent ripples through time, distorting his present. He was no longer able to fly freely, for each flight was a battle against himself.
      </p>

      <p className="streaming-text delay-25">
        In some sense, wings meant possibilities, an escape route. Of course, wings also meant a link to the past. Each time Geryon began to fly, the past pulled him backward, and he never reached true freedom. Was it possible that his wings had been a weight all along, weights designed in the shape of wings to weigh him down? A reminder that no matter how far he may fly, the pull of the earth is always there.
      </p>

      <p className="streaming-text delay-26">
        This is not retelling; this is reimagination of what a time traveler would try to make sense of, not just the form, but that intangible spirit of Geryon's experience. Perhaps it is in this constant struggle that his story deepens into multidimensional existence between past and present, between myth and reality.
      </p>
    </div>
  );
}

export default App;
