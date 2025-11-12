import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const Placeorder = () => {

  const { navigate, getCartAmount, delivery_fee, cartItems, placeOrder } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const [paymentMethod, setPaymentMethod] = useState('cod')

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({...data, [name]: value}))
  }

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      // Validate form
      if (getCartAmount() === 0) {
        toast.error('Your cart is empty')
        return
      }
      // Place order
      placeOrder(formData, paymentMethod)
      toast.success('Order placed successfully!')
      navigate('/orders')
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-6 lg:px-8'>
      {/* ......left side......... */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="text" placeholder='First name' />
            <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="text" placeholder='Last name' />
          </div>
          <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="email" placeholder='Email address' />
          <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="text" placeholder='Street' />
          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="text" placeholder='City' />
            <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="text" placeholder='State' />
          </div>
          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="number" placeholder='Zipcode' />
            <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="text" placeholder='Country' />
          </div>
          <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-2 px-4 w-full text-sm sm:text-base' type="number" placeholder='Phone' />
      </div>

      {/* ......right side......... */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => toast.error('This option is currently not available. Payment only by Cash on Delivery.')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded hover:border-gray-400 transition-colors'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe payment" />
            </div>
            <div onClick={() => toast.error('This option is currently not available. Payment only by Cash on Delivery.')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded hover:border-gray-400 transition-colors'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay payment" />
            </div>
            <div onClick={() => setPaymentMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded hover:border-gray-400 transition-colors'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-8 sm:px-16 py-3 text-sm rounded hover:bg-gray-800 transition-colors'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
