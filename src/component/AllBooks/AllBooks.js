import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Random from "../Random/Random";
import SingalBook from "../SingalBook/SingalBook";
import "./AllBooks.css";
const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [randome, setRandom] = useState([]);
  const [isChoose, setIsChoose] = useState(false);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const handlaleAddToCart = (book) => {
    const savedCart = [...cart, book];
    setCart(savedCart);
    setIsChoose(false);
  };
  // random book genarotor
  const randomBook = () => {
    setIsChoose(true);
    setRandom(cart[Math.floor(Math.random() * cart.length)]);
  };
  // choose again function
  const emptyCart = () => {
    setIsChoose(false);
    setCart([]);
    setRandom([]);
  };

  return (
    <div className="full-container">
      <div className="all-books">
        {books.map((book) => (
          <SingalBook
            book={book}
            key={book.id}
            handaleCart={handlaleAddToCart}
          ></SingalBook>
        ))}
      </div>

      <div className="orderCart">
        <div className="cart">
          <h3>Total selected items{cart.length}</h3>
          {cart.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}

          <Random random={randome} isChoose={isChoose}></Random>
          <div className="btn-box">
            {cart.length > 1 ? (
              <button onClick={randomBook} className="choose-btn">
                CHOOSE 1 FOR ME
              </button>
            ) : (
              ""
            )}
            <button onClick={emptyCart} className="choose-btn">
              CHOOSE AGAIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
