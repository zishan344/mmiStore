import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingalBook from "../SingalBook/SingalBook";
import "./AllBooks.css";
const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const handlaleAddToCart = (book) => {
    const savedCart = [...cart, book];
    setCart(savedCart);
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
        <h3>Total selected items{cart.length}</h3>
        {cart.map((cart) => (
          <Cart cart={cart}></Cart>
        ))}
        <button>CHOOSE 1 FOR ME</button>
        <button>CHOOSE AGAIN</button>
      </div>
    </div>
  );
};

export default AllBooks;
