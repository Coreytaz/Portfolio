import React from "react";
import Card from "./../components/Card/index";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://623de1a5e8fbc4f16268e28d.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, item) => [...prev, ...item.items], []));
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="">Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(10)] : orders).map((item, i) => (
          <Card key={i} isLoading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
