import React from "react";

const Random = (props) => {
  const { img, name } = props.random;
  const { isChoose } = props;
  console.log(isChoose);
  return (
    <div>
      {isChoose && (
        <div>
          <h4>random item</h4>
          <div className="cart-info">
            <img src={img} alt="" />
            <h5>{name}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Random;
