import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div className='order-history'>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.order_date} - {order.order_total} ({order.payment_method})
            {order.order_status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;