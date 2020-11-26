import React from "react";
import "./style.css";

const Cards = (props) => {
  return (
    <div className={props.box}>
      <img className="quotes" src={props.quotes} alt="" />
      <div className="info-container">
        <img src={props.img} alt="" />
        <div className="name-container">
          <p className="">{props.personsName}</p>
          <p className="">Verified Graduate</p>
        </div>
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Cards;
