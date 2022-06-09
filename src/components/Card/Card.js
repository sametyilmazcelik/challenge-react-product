import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  const { id, title, brand, images } = props;
  return (
    <div className='card'>
      <Link to={`/product/${id}`} state={props}>
        <img src={images[0]} alt='product' />
        <h2>{title}</h2>
        <p>{brand}</p>
      </Link>
    </div>
  );
};

export default Card;
