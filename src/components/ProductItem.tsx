import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({_id,image,name,price}:{_id:string,image:string[],name:string,price:number}) => {

  const {currency} = useContext(ShopContext);

  return (
    <>
      <Link className='text-gray-700 cursor-pointer group' to={`/product/${_id}`}>
        <div className='overflow-hidden rounded-lg'>
          <img className='hover:scale-110 transition ease-in-out duration-300 w-full h-48 sm:h-56 md:h-64 object-cover' src={image[0]} alt={name} />
        </div>
        <p className='pt-3 pb-1 text-sm sm:text-base font-medium truncate'>{name}</p>
        <p className='text-sm sm:text-base font-semibold text-gray-900'>{currency}{price}</p>
      </Link>
    </>
  )
}

export default ProductItem
