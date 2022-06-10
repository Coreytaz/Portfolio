import React from "react";
import Card from "./../components/Card/index";

function Home({
  serchValues,
  setSerchValues,
  onChangeSerchValues,
  items,
  onAddToCart,
  onFavorite,
  cartItems,
  isLoading,
}) {
  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.name.toLowerCase().includes(serchValues.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filterItems).map((val, i) => (
      <Card
        key={i}
        onPlus={(obj) => onAddToCart(obj)}
        // onMinus={(obj) => onRemoveFromCart(obj)}
        onFavorite={(obj) => onFavorite(obj)}
        isLoading={isLoading}
        {...val}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">
          {serchValues ? `Поиск по запросу: "${serchValues}"` : "Все кросовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Serch" />
          {serchValues && (
            <img
              onClick={() => setSerchValues("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSerchValues}
            value={serchValues}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
