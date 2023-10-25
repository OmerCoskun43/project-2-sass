import React from "react";
import CardStyle from "../scss/card.module.scss";

const Card = ({ data }) => {
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        const { id, name, job, comment, img } = item;
        return (
          <div className={CardStyle.card} key={id}>
            <h2>{name} </h2>
            <h3> {job} </h3>
            <p>{comment} </p>
            <img src={img} alt="" />
            <div className="buttons">
              <button className={CardStyle["button-small"]}>Small</button>
              <button className={CardStyle["button-large"]}>Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
