import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "./hooks/useCart";

function Header({ onOpenCart }) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="headerLeft cu-p">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex">
        <li onClick={onOpenCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span className="ml-15">{totalPrice} руб.</span>
        </li>
        <Link to="/favorites">
          <li className="mr-15 cu-p">
            <img width={18} height={18} src="/img/heart.svg" alt="favorites" />
          </li>
        </Link>
        <Link to="/orders">
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
