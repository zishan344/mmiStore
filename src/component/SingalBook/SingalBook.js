import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SingalBook.css";
const SingalBook = ({ book, handaleCart }) => {
  const { img, price, name } = book;
  return (
    <div className="singal-Book">
      <img src={img} alt="" />
      <h3>{name} </h3>
      <h3>Price: ${price}</h3>
      <button onClick={() => handaleCart(book)} className="btn-book">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SingalBook;
