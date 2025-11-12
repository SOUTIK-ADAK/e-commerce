import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState<any>(null);
  const [image, setImage] = useState<string>('');
  const [size, setSize] = useState<string>('');

  const fetchProductData = async () => {
    const product = products.find((item: any) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-6 lg:px-8'>
      {/* Product Data */}
      <div className='flex gap-8 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2 sm:gap-0'>
            {
              productData.image.map((item: string, index: number) => (
                <img
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg hover:opacity-80 transition-opacity'
                  alt={`Product image ${index + 1}`}
                  onClick={() => setImage(item)}
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto rounded-lg' src={image} alt={productData.name} />
          </div>
        </div>

        {/* ..........Product Info.......... */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl sm:text-3xl mt-2'>
              {productData.name}
            </h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="Star" className='w-4 h-4' />
              <img src={assets.star_icon} alt="Star" className='w-4 h-4'/>
              <img src={assets.star_icon} alt="Star" className='w-4 h-4'/>
              <img src={assets.star_icon} alt="Star" className='w-4 h-4'/>
              <img src={assets.star_dull_icon} alt="Star" className='w-4 h-4'/>
              <p className='pl-2 text-sm'>(122)</p>
            </div>
            <p className='mt-5 text-2xl sm:text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 text-sm sm:text-base md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
                <p className='text-sm sm:text-base font-medium'>Select Size :</p>
                <div className='flex gap-2 flex-wrap'>
                  {productData.sizes.map((item:string,index:number)=>(
                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors text-sm sm:text-base ${item === size ? 'border-orange-500 bg-orange-50' : ''}`} key={index}>{item}</button>
                  ))}
                </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-6 sm:px-8 py-3 text-sm active:bg-gray-700 hover:bg-gray-800 transition-colors rounded'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Original Product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>

      {/* Description & review Section */}
      <div className='mt-20'>
            <div className='flex border-b'>
                <b className='border-r px-5 py-3 text-sm cursor-pointer'>Description</b>
                <p className='px-5 py-3 text-sm cursor-pointer'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo officiis nesciunt reprehenderit, omnis aperiam ullam consequuntur asperiores corporis sapiente quasi?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium repellat voluptatum voluptatibus tempore quod quam facilis corrupti obcaecati perspiciatis.</p>
            </div>
      </div>

      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
