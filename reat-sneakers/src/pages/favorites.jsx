import React from 'react';
import Card from "./../components/Card/index";
import { AppContext } from './../App';

function Favorite({onFavorite }) {
  const {favorites} = React.useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((val, i) => (
          <Card
            key={i}
            favorites={true}
            onFavorite={onFavorite}
            {...val}
            // onPlus={(obj) => onAddToCart(obj)}
            // onMinus={(obj) => onRemoveFromCart(obj)}
            // onFavorite={(obj) => onFavorite(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
