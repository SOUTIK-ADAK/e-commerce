import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Profile = () => {
  const { orders } = useContext(ShopContext);

  // Mock user data - in a real app, this would come from user context or API
  const userData = {
    name: 'Soutik Adak',
    email: 'soutikadak@gamil.com',
    phone: '+91 8637375098',
    address: 'panskura, purbamedinipur, west bengal',
    joinDate: 'January 2025'
  };

  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum: number, order: any) => sum + order.total, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <span className="text-3xl font-bold text-white">{userData.name.charAt(0)}</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Welcome back, {userData.name}!
          </h1>
          <p className="text-gray-600 text-lg">Manage your account and view your order history</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <label className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Name</label>
                    <p className="text-gray-800 font-medium mt-1">{userData.name}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                    <label className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Email</label>
                    <p className="text-gray-800 font-medium mt-1">{userData.email}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl">
                    <label className="text-sm font-semibold text-green-600 uppercase tracking-wide">Phone</label>
                    <p className="text-gray-800 font-medium mt-1">{userData.phone}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl">
                    <label className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Address</label>
                    <p className="text-gray-800 font-medium mt-1">{userData.address}</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl">
                    <label className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Member Since</label>
                    <p className="text-gray-800 font-medium mt-1">{userData.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Account Summary</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Total Orders</span>
                    <span className="text-2xl font-bold">{totalOrders}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-xl text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Total Spent</span>
                    <span className="text-2xl font-bold">${totalSpent.toFixed(2)}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-xl text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-green-100">Account Status</span>
                    <span className="text-lg font-bold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Preview */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Recent Orders</h2>
          </div>
          {orders.length > 0 ? (
            <div className="space-y-4">
              {orders.slice(0, 3).map((order: any) => (
                <div key={order.id} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-100 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-lg">Order #{order.id.slice(-6)}</p>
                      <p className="text-sm text-gray-600 mt-1">{new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                      <div className="flex items-center mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-800">${order.total.toFixed(2)}</p>
                      <p className="text-sm text-gray-600 mt-1">{order.items?.length || 0} items</p>
                    </div>
                  </div>
                </div>
              ))}
              {orders.length > 3 && (
                <div className="text-center mt-8">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    View All Orders
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No orders yet.</p>
              <p className="text-gray-400 mt-2">Start shopping to see your order history here!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
