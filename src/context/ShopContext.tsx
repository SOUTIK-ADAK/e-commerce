import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext<any>({ products: [], currency: '$', delivery_fee: 10 });

const ShopContextProvider = (props: any) => {

  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any>({});
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    // Check if user was previously logged in (persist login state)
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check if user prefers dark mode
    return localStorage.getItem('isDarkMode') === 'true';
  });
  const navigate = useNavigate();

  const addToCart = (itemId: string, size: string) => {

    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          totalCount += cartItems[itemId][size];
        }
      }
    }
    return totalCount;
  }

  const updateQuantity = (itemId: string, size: string, quantity: number) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      let itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            totalAmount += itemInfo.price * cartItems[itemId][size];
          }
        }
      }
    }
    return totalAmount;
  }

  const placeOrder = (formData: any, paymentMethod: string) => {
    const orderItems = [];
    for (const itemId in cartItems) {
      let itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            orderItems.push({
              ...itemInfo,
              size,
              quantity: cartItems[itemId][size]
            });
          }
        }
      }
    }
    const order = {
      id: Date.now().toString(),
      items: orderItems,
      total: getCartAmount() + delivery_fee,
      paymentMethod,
      date: new Date(),
      status: 'Processing',
      ...formData
    };
    setOrders((prev) => [...prev, order]);
    setCartItems({});
    return order;
  }

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode.toString());
    // Apply dark mode to document
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount, updateQuantity,
    getCartAmount, navigate,
    orders, placeOrder,
    isLoggedIn, login, logout,
    isDarkMode, toggleDarkMode
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;
