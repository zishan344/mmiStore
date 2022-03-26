import React from "react";

const Random = ({ random }) => {
  const { img, name } = random;

  return (
    <div>
      <h4>random item</h4>
      <div className="cart-info">
        <img src={img} alt="" />
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default Random;
