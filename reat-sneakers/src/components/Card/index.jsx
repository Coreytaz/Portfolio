import styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from './../../App';

function Card({
  id,
  name,
  price,
  urlImage,
  onPlus,
  onFavorite,
  favorites = false,
  isLoading = false,
}) {
  const {isItemAdded} = React.useContext(AppContext);
  const [isFovorite, setIsFovorite] = React.useState(favorites);
  const itemObj = { id, parentId: id ,name, price, urlImage };

  const onClickPlus = () => {
    onPlus(itemObj);
  };

  // const onClickDel = (e) => {
  //   onMinus({ name, price, scrImage });
  //   setIsAdded(!isAdded);
  // };

  const onClickFavorites = () => {
    onFavorite(itemObj);
    setIsFovorite(!isFovorite);
  };
  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="150" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="188" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="222" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="218" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && <div className="favorite" onClick={onClickFavorites}>
            <img
              src={isFovorite ? "/img/liked.svg" : "/img/unliked.svg"}
              alt="unliked"
            />
          </div>}
          <img width={133} height={112} src={urlImage} alt="sneakers" />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && <img
              onClick={onClickPlus}
              className={styles.plus}
              src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="plus"
            />}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
