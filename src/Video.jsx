import React from "react";
import './mindfulness.css';
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import video5 from "./videos/video5.mp4";
import video6 from "./videos/video6.mp4";

function Video(){
    return(
        <div className="grid-container">
        <div className="grid-item"><h3>Tips to Improve your Mental health</h3>
          <video style={{borderRadius: 10}} src={video1} type="video/mp4" width={300} height={200} poster="https://imageio.forbes.com/specials-images/imageserve/64e52c00a997d55110fc0879/Hands-holding-green-happy-smile-face-paper-cut--good-feedback-rating-and-positive/960x0.jpg?format=jpg&width=960"controls />
        </div>
        <div className="grid-item"><h3>How to handle hard times in life</h3>
          <video style={{borderRadius: 10}} src={video2} type="video/mp4" width={280} height={200} poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAuy4nEguqicJ5ooEKpGkcdo6x_DYA5Vbmg&usqp=CAU" controls />
        </div>
        <div className="grid-item"><h3>How to remove negative thoughts</h3>
          <video style={{borderRadius: 10}} src={video3} type="video/mp4" width={280} height={200} poster="https://img.freepik.com/premium-vector/positive-negative-thinking-vector-mental-health_103044-3572.jpg"controls />
        </div>
        <div className="grid-item"><h3>How to increase Self-Confidence</h3>
          <video style={{borderRadius: 10}} src={video4} type="video/mp4" width={300} height={200} poster="https://cdn.kobo.com/book-images/633a9494-a496-4eb2-a833-7ce918fbc9f9/1200/1200/False/how-to-build-self-confidence-3.jpg"controls />
        </div>
        <div className="grid-item"><h3>Reduce Stress level</h3>
        <video style={{borderRadius: 10}} src={video5} type="video/mp4" width={300} height={200} poster="https://news.uga.edu/wp-content/uploads/2022/11/GettyImages-1349826315-scaled.jpg"controls />
        </div>
        <div className="grid-item"><h3>How Do We Handle Hard Times in Life</h3>
          <video style={{borderRadius: 10}} src={video6} type="video/mp4" width={320} height={200} poster="https://bwstewart.files.wordpress.com/2018/02/self-confidence.jpg"controls />
        </div>
      </div>
    );
}

export default Video;