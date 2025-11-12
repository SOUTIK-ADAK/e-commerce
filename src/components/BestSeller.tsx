import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import type { Product } from '../assets/assets';

const BestSeller = () => {
  const {products} = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState<Product[]>([]);

  useEffect(()=>{
    const bestProduct = products.filter((item: Product) => item.bestseller);
    setBestSeller(bestProduct.slice(0,5))
  },[products])

  return (
    <div className='my-10 px-4 sm:px-6 lg:px-8'>
      <div className='text-center text-2xl sm:text-3xl lg:text-4xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-full sm:w-3/4 lg:w-1/2 m-auto text-xs sm:text-sm md:text-base text-gray-600 px-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, et.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 gap-y-6' >
        {
          bestSeller.map((item,index)=>(
            <ProductItem key={index} _id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller
