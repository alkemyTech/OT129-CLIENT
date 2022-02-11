import React from "react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

import "./Content.css";
import "../../index.css";

import BG1 from "../../assets/Toys/1.jpg";
import BG2 from "../../assets/Toys/2.jpg";
import BG3 from "../../assets/Toys/3.jpg";
import BG4 from "../../assets/Toys/4.jpg";
import BG5 from "../../assets/Toys/5.jpg";

//MOCKUP DATE THAT GIVES YOU A DATE 10 DAYS FROM NOW
const TARGET_DATE = new Date(new Date(new Date().setDate(new Date().getDate() + 10)));

//Splited date for being dislayed in the title
//assuming that it comes from a full string none formatted.
const [date, time] = TARGET_DATE.toLocaleString([], {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
}).split(",");

// CALCULATE THE DATE DIFFERENCE
const timeRemaining = (date) => {
  return formatDistanceToNow(date, { locale: es });
};

const Content = () => {
  return (
    <div className="container">
      <div className="content-wrapper mt-3">
        <div className="content-bg">
          <div className="col left">
            <img alt="BG Image" className="bg-image" src={BG1} />
            <img alt="BG Image" className="bg-image" src={BG2} />
          </div>
          <div className="col mid">
            <img alt="BG Image" className="bg-image" src={BG3} />
          </div>
          <div className="col right">
            <img alt="BG Image" className="bg-image" src={BG4} />
            <img alt="BG Image" className="bg-image" src={BG5} />
          </div>
        </div>
        <div className="content-text">
          <div className="content-text-title">
            <span className="__title-date">{date}</span>
            <span className="__title-time"> {time} hs </span>
            <span className="__title-address">Calle 123, Localidad, Provincia</span>
          </div>
          <span className="content-text-countdown">
            Te quedan: {timeRemaining(TARGET_DATE)} para participar
          </span>
          <p className="content-text-description">
            Descipcion de la campaña Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque nunc eros, bibendum et lobortis viverra, dapibus ut tellus. Cras luctus elit at
            leo feugiat congue. Aenean ultricies felis in accumsan accumsan. Nullam ut eros lacinia,
            molestie sem at, congue sapien. Praesent dapibus metus sit amet mi ullamcorper
            hendrerit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
