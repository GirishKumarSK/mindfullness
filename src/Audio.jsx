import React from "react";
import './mindfulness.css';
import audio1 from "./Audio meditation/audio1.mp3";
import audio2 from "./Audio meditation/audio2.mp3";
import audio3 from "./Audio meditation/audio3.mp3";
import audio4 from "./Audio meditation/audio4.mp3";
import audio5 from "./Audio meditation/audio5.mp3";
import audio6 from "./Audio meditation/audio6.mp3";
import audio7 from "./Audio meditation/audio7.mp3";
import audio8 from "./Audio meditation/audio8.mp3";
import audio9 from "./Audio meditation/audio9.mp3";

function Audio(){
    return(
        <div className="grid-container">
        <div className="grid-item"><h3>10 min meditation for Beginners</h3>
          <audio src={audio1} type="audio/mp3" width={520} height={340} controls />
        </div>
        <div className="grid-item"><h3>Ease Anxiety</h3>
          <audio src={audio2} type="audio/mp3" width={520} height={340} controls />
        </div>
        <div className="grid-item"><h3>Meditate to have Good Day</h3>
          <audio src={audio3} type="audio/mp3" width={520} height={340} controls />
        </div>
        <div className="grid-item"><h3>Meditate to Overcome Anger</h3>
          <audio src={audio4} type="audio/mp3" width={520} height={340} controls />
        </div>
        <div className="grid-item"><h3>Meditate to Overcome Stress</h3>
        <audio src={audio5} type="audio/mp3" width={520} height={340} controls />
        </div>
        <div className="grid-item"><h3>Meditate to Overcome Depression</h3>
          <audio src={audio6} type="audio/mp3" width={520} height={340} controls />
        </div>
        <div className="grid-item"><h3>For good asleep</h3>
          <audio src={audio7} type="audio/mp3" width={520} height={340} controls />
        </div>
        <div className="grid-item"><h3>Meditition for Mindfulness</h3>
          <audio src={audio8} type="audio/mp3" width={520} height={340} controls />
        </div>
        <div className="grid-item"><h3>Ease Anxiety</h3>
          <audio src={audio9} type="audio/mp3" width={520} height={340} controls />
        </div>
      </div>
    );
}

export default Audio;