import React from 'react';
import Link from 'next/link'

const Footer = () => {
  return (
  <> 
  <div className="main-footer">
      <div className="footer-container">
        <div className="information">
              <h1> Request for more information </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, culpa saepe a ipsum atque ad!</p>
              <button>contact us</button>
              </div>

              <div className="footer-menu">
                    <ul>
                    <li><Link href={"/"}>home</Link></li>
                    <li><Link href={"/about"}>about</Link></li>
                    <li><Link href={"/product"}>product</Link></li>
                    </ul>
                
              </div>
          </div>
      </div>
  </>
  );
};

export default Footer;
