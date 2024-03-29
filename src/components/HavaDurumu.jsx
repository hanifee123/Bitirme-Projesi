import React from "react";
import Row from "react-bootstrap/Row";
import Karacabey from "../HavaDurumu/Karacabey";
import Mudanya from "../HavaDurumu/Mudanya";
import Gemlik from "../HavaDurumu/Gemlik";
import Iznik from "../HavaDurumu/Iznik";
import '../styles/WeatherCard.css'; 


const HavaDurumu = () => {
  return (
    <Row className="container mx-auto my-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">

      <div className="col">
        <div className="weather-card">
          <div className="weather-card-header">Karacabey</div>
          <div className="weather-card-body"><Karacabey /></div>
        </div>
      </div>
      <div className="col">
        <div className="weather-card">
          <div className="weather-card-header">Mudanya</div>
          <div className="weather-card-body"><Mudanya /></div>
        </div>
      </div>
      <div className="col">
        <div className="weather-card">
          <div className="weather-card-header">Gemlik</div>
          <div className="weather-card-body"><Gemlik /></div>
        </div>
      </div>
      <div className="col">
        <div className="weather-card">
          <div className="weather-card-header">Iznik</div>
          <div className="weather-card-body"><Iznik /></div>
        </div>
      </div>
    </Row>
  );
};

export default HavaDurumu;
