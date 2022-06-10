import React from "react";
import Info from "../Info";
import axios from "axios";
import { useCart } from "../hooks/useCart";
import styles from "./Cart.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ onCloseCart, items = [], onRemove, opened }) {
  const { setCartItems, cartItems, totalPrice } = useCart();
  const [isComplete, setIsComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://623de1a5e8fbc4f16268e28d.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const element = cartItems[i];
        await axios.delete(
          `https://623de1a5e8fbc4f16268e28d.mockapi.io/cart/${element.id}`
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onCloseCart}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className="items flex">
              {items.map((obj) => {
                return (
                  <div
                    key={obj.id}
                    className="cartItem d-flex align-center mb-20"
                  >
                    <div
                      style={{ backgroundImage: `url(${obj.urlImage})` }}
                      className="cartItemImg"
                    ></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.name}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      className="removeBtn"
                      onClick={() => onRemove(obj.id)}
                      src="/img/btn-remove.svg"
                      alt="remove"
                    />
                  </div>
                );
              })}
            </div>
            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%</span>
                  <div></div>
                  <b>{totalPrice / 0.05} руб.</b>
                </li>
              </ul>
              <button
                disable={isLoading}
                className="greenButton"
                onClick={onClickOrder}
              >
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставки`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            Image={
              isComplete ? "img/complete-order.jpg" : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
