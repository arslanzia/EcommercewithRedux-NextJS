import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Banner = () => {
  return (
  
  <>
      <div className="main-banner">
        <div className="container">
          <div className="wrapper">
            <div className="text">
              <h1>Get medicine free fruits at your doorstep</h1>
              <p>Get 100% authentic and formaline free fruits in this summer with lots of discount.</p>
             <button>OrderNow <ArrowForwardIcon/></button>
            </div>
            <div className="img">
              <img src="./images/1.png" alt="images" />
              <div className="img-leaf">
              <img src="./images/1a.png" alt="images" />
              
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  
  );
};

export default Banner;
