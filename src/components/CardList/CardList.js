import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ products }) => {
  return (
    <div className='cardList'>
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CardList;
