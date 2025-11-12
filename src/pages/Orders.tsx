import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { orders, currency } = useContext(ShopContext);
  const [trackingOrder, setTrackingOrder] = useState<string | null>(null);

  return (
    <div className='border-t pt-16 px-4 sm:px-6 lg:px-8'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {orders.length === 0 ? (
          <p className='text-center text-gray-500 mt-8'>No orders found.</p>
        ) : (
          orders.map((order: any) => (
            <div key={order.id} className='border-t border-b py-4 my-4 rounded-lg shadow-sm'>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm text-gray-600'>Order ID: {order.id}</p>
                  <p className='text-sm text-gray-600'>Date: {order.date.toLocaleDateString()}</p>
                  <p className='text-sm text-gray-600'>Status: <span className={`font-medium ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Shipped' ? 'text-blue-600' : 'text-yellow-600'}`}>{order.status}</span></p>
                  <p className='text-sm text-gray-600'>Payment: {order.paymentMethod.toUpperCase()}</p>
                </div>
                <div className='text-right'>
                  <p className='text-lg font-medium'>{currency}{order.total}</p>
                </div>
              </div>
              <div className='mt-4'>
                <h4 className='text-sm font-medium mb-2'>Items:</h4>
                {order.items.map((item: any, index: number) => (
                  <div key={index} className='flex items-center gap-4 py-2 border-b last:border-b-0'>
                    <img src={item.image[0]} alt={item.name} className='w-12 h-12 object-cover rounded' />
                    <div className='flex-1'>
                      <p className='text-sm font-medium'>{item.name}</p>
                      <p className='text-xs text-gray-500'>Size: {item.size} | Qty: {item.quantity}</p>
                    </div>
                    <p className='text-sm'>{currency}{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className='mt-4'>
                <h4 className='text-sm font-medium mb-2'>Shipping Address:</h4>
                <p className='text-sm text-gray-600'>
                  {order.firstName} {order.lastName}<br />
                  {order.street}<br />
                  {order.city}, {order.state} {order.zipcode}<br />
                  {order.country}<br />
                  Phone: {order.phone}
                </p>
              </div>
              <div className='mt-4'>
                <button
                  onClick={() => setTrackingOrder(trackingOrder === order.id ? null : order.id)}
                  className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
                >
                  Track Order
                </button>
              </div>
              {trackingOrder === order.id && (
                <div className='mt-4 p-4 bg-gray-100 rounded'>
                  <h4 className='text-sm font-medium mb-2'>Order Tracking Details:</h4>
                  <p className='text-sm'>Order ID: {order.id}</p>
                  <p className='text-sm'>Order Date: {order.date.toLocaleDateString()}</p>
                  <p className='text-sm'>Status: {order.status}</p>
                  <p className='text-sm'>Estimated Delivery: {new Date(order.date.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Orders
