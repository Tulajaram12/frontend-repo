import { useEffect, useState } from "react";
import { getOrders } from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading orders...</h2>;
  }

  return (
    <div className="page">
      <h2>Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Total: ₹{order.total}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
