import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title';

interface RelatedProductsProps {
  category: string;
  subCategory: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({category, subCategory}) => {

  const {products} = useContext(ShopContext);
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item: any) => category === item.category);
      productsCopy = productsCopy.filter((item: any) => subCategory === item.subCategory);

      setRelated(productsCopy.slice(0, 5)); 
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24 px-4 sm:px-6 lg:px-8'>
      <div className='text-center text-2xl sm:text-3xl lg:text-4xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem key={index} _id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
