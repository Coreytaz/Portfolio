import axios from "axios";
import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/favorites";
import Orders from "./pages/Orders";
import Cart from "./components/Cart/index";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [serchValues, setSerchValues] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // fetch("https://623de1a5e8fbc4f16268e28d.mockapi.io/items")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });
    async function fetchData() {
      try {
        setIsLoading(true);
        const [cartRes, favoritesRes, itemsRes] = await Promise.all([
          axios.get("https://623de1a5e8fbc4f16268e28d.mockapi.io/cart"),
          axios.get("https://623de1a5e8fbc4f16268e28d.mockapi.io/favorite"),
          axios.get("https://623de1a5e8fbc4f16268e28d.mockapi.io/items"),
        ]);
        setIsLoading(false);

        setCartItems(cartRes.data);
        setFavorites(favoritesRes.data);
        setItems(itemsRes.data);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find(
      (favObj) => Number(favObj.parentId) === Number(obj.id)
    );
    if (findItem) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.parentId) !== Number(obj.id))
      );
      await axios.delete(
        `https://623de1a5e8fbc4f16268e28d.mockapi.io/cart/${findItem.id}`
      );
    } else {
      setCartItems((prev) => [...prev, obj]);
      const { data } = await axios.post(
        "https://623de1a5e8fbc4f16268e28d.mockapi.io/cart",
        obj
      );
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            };
          }
          return item;
        })
      );
    }
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://623de1a5e8fbc4f16268e28d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://623de1a5e8fbc4f16268e28d.mockapi.io/favorite/${obj.id}
        `);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://623de1a5e8fbc4f16268e28d.mockapi.io/favorite",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка");
    }
  };

  // const onRemoveFromCart = (obj) => {
  //   setCartItems((prev) => [
  //     ...prev.filter((e) => {
  //       return !(
  //         e.name === obj.name &&
  //         e.price === obj.price &&
  //         e.scrImage === obj.scrImage
  //       );
  //     }),
  //   ]);
  // };

  const onOpenCart = () => {
    setCartOpened(true);
  };

  const onCloseCart = () => {
    setCartOpened(false);
  };

  const onChangeSerchValues = (event) => {
    setSerchValues(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Cart
          items={cartItems}
          onRemove={onRemoveToCart}
          onCloseCart={onCloseCart}
          opened={cartOpened}
        />
        <Header onOpenCart={onOpenCart} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                serchValues={serchValues}
                setSerchValues={setSerchValues}
                onChangeSerchValues={onChangeSerchValues}
                onAddToCart={onAddToCart}
                onFavorite={onFavorite}
                isLoading={isLoading}
                // onRemoveFromCart={onRemoveFromCart}
              />
            }
          />
          <Route
            exact
            path="/favorites"
            element={<Favorite onFavorite={onFavorite} />}
          />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
