// REACT
import React from "react";

// CSS
import "./ItemCard.css";

// ICONS
import { HiArrowNarrowRight } from "react-icons/hi";

const ItemCard = (props) => {
  const { img, name } = props;
  return (
    <div className="Item">
      <img src={img} alt={img} />
      <div className="AboutItem">
        <div className="ItemName">
          <h3>{name}</h3>
          <p>Explore Now!</p>
        </div>
        <div className="ItemLink">
          <span>
            <HiArrowNarrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
