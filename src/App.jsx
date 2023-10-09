import React from 'react';
import './mindfulness.css'; // Import your custom stylesheet here
import meditate2 from "./meditate2.JPG";
import meditate from "./meditate.JPG";
import Audio from './Audio';
import Header from './Header';
import Video from './Video.jsx';
import video7 from "./videos/video7.mp4";
import Manual_meditation from "./videos/Manual.txt";

function App() {
      return (
        <div style={{ backgroundColor: '#d5ccf8' }}>
        <Header/>
    
          <br /><br /><br /><br /><br />
          <main>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={meditate} width="80%" style={{ borderRadius: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: -8, display: 'block' }} alt="Meditation" />
              <div className="cs"><p>Mindfulness</p></div>
            </div>
            <br />
    
            <h2 style={{ textAlign: 'center', fontSize: 45 }}><b>BENEFITS OF MEDITATION</b></h2>
            <ul style={{ textIndent: 10, marginLeft: 200 }}>
              <li style={{ fontSize: 30, textIndent: 10 }}>Gaining a new perspective on stressful situations.</li>
              <img src={meditate2} style={{ float: 'right', width: 250, marginRight: 200 }} alt="Stressful situations" />
              <li style={{ fontSize: 30, textIndent: 10}}>Building skills to manage your stress.</li>
              <li style={{ fontSize: 30, textIndent: 10}}>Increasing self-awareness.</li>
              <li style={{ fontSize: 30, textIndent: 10}}>Focusing on the present.</li>
              <li style={{ fontSize: 30, textIndent: 10}}>Reducing negative emotions.</li>
              <li style={{ fontSize: 30, textIndent: 10}}>Increasing imagination and creativity.</li>
              <li style={{ fontSize: 30, textIndent: 10}}>Increasing patience and tolerance.</li>
            </ul>
            <br />
            <h2 style={{ fontSize: 45, textAlign: 'center' }}>How to Meditate?</h2>
            <center>
             <video src={video7} type="video/mp4" width={520} height={340} controls style={{ backgroundColor: 'black', borderRadius: 10 }} poster="https://media.istockphoto.com/id/1313456479/photo/man-and-soul-yoga-lotus-pose-meditation-on-nebula-galaxy-background.jpg?b=1&s=170667a&w=0&k=20&c=p_EQSpHfArCOvibKe7ypoyFZERAiEFHuFx4weXiHd0g=" />
            </center>
            <a href={Manual_meditation} download="Manual.txt" style={{ textAlign: 'center', fontSize: '0.7cm', color: '#513ba1' }}>
            <p>Meditation Manual<span style={{fontSize:'0.4cm'}}>(Click to Download)</span></p>
            </a>
        <br /><hr />
        
        <h2 style={{ fontSize: 45, textAlign: 'center' }}>Meditation Sessions</h2>
          <Audio/><br/><hr />
        <h2 style={{ fontSize: 45, textAlign: 'center' }}>Videos</h2>
          <Video/>
          </main>
        </div>
      );
    }

export default App;