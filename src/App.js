import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [displayText, setDisplayText] = useState("");
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        const key = event.key.toUpperCase();
        if (keys.includes(key)) {
          handleClick(key);
        }
      },
      [handleClick, keys]
    );
  });
  const drums = [
    {
      keyCode: 81,
      keyText: "Q",
      soundName: "Heater 1",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyText: "W",
      soundName: "Heater 2",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyText: "E",
      soundName: "Heater 3",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyText: "A",
      soundName: "Heater 4",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyText: "S",
      soundName: "Clap",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyText: "D",
      soundName: "Open HH",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyText: "Z",
      soundName: "Kick n' Hat",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyText: "X",
      soundName: "Kick",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyText: "C",
      soundName: "Closed HH",
      soundSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  async function handleClick(selector) {
    const audio = document.getElementById(selector);
    const soundText = drums.find((drum) => drum.keyText === selector).soundName;

    // set the display text
    // console.log(soundText);
    audio.type = "audio/mp3";
    // audio.load();
    try {
      audio.currentTime = 0; //rewind audio
      await audio.play();
      setDisplayText(soundText);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="header">
          <h1 id="brand">SOUNDMASTER</h1>
          <h1 id="model">DM-919</h1>
        </div>
        <div className="machine-wrapper">
          <div id="display">
            <div className="display-text">{displayText}</div>
          </div>
          <div className="drum-pads">
            {drums.map((drumpad) => (
              <div className="button-wrapper" key={drumpad.keyText}>
                <div
                  id={drumpad.soundSrc}
                  className="drum-button"
                  onClick={() => handleClick(drumpad.keyText)}
                >
                  {drumpad.keyText}
                  <audio
                    id={drumpad.keyText}
                    className="clip"
                    src={drumpad.soundSrc}
                  ></audio>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer">
          <p>Created by David Lucas</p>
          <p>Inspired by Roland TR-909</p>
        </div>
      </div>
    </div>
  );
}

export default App;
