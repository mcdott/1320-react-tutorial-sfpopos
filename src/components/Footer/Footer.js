import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className='FooterWrapper'>
      <footer className='Footer'>
        <ul className='FooterLinks'>
          <li>
            <a href='https://sf.gov/location/san-francisco-city-hall'>
              SF City Hall
            </a>
          </li>
          <li>
            <a href='https://www.accuweather.com/en/us/san-francisco/94103/weather-forecast/347629'>
              SF Weather
            </a>
          </li>
          <li>
            <a href='https://www.bart.gov/'>BART</a>
          </li>
        </ul>
        <p className='FooterCopy'>
          &copy; {date} <a href='http://corndog.io/'>M. McDott</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
