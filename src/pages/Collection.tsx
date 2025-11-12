import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

interface Product {
  _id: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  image: string;
}

const Collection = () => {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterProducts, setFilterProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const [subCategory, setSubCategory] = useState<any[]>([]);
  const [sortType, setSortType] = useState<any>('relavent');

  const toggleCategory =(e:any)=>{
      if(category.includes(e.target.value)){
          setCategory(prev=> prev.filter(item => item !== e.target.value))
      }else{
        setCategory(prev => [...prev,e.target.value])
      }
  }

  const toggleSubCategory =(e:any)=>{
    if(subCategory.includes(e.target.value)){
          setSubCategory(prev=> prev.filter(item => item !== e.target.value))
      }else{
        setSubCategory(prev => [...prev,e.target.value])
      }
  }

  const applyFilter =()=>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter((item: Product)=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }

    if(search){
      productsCopy = productsCopy.filter((item: Product)=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter((item: Product)=> category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy =productsCopy.filter((item: Product)=> subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy);

  }

  const sortProduct =()=>{
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;

    }
  }
  
  useEffect(()=>{
    applyFilter();
  },[category, subCategory, search, showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])


  return (
    <>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t px-4 sm:px-6 lg:px-8'>
        {/* Filter Option */}
        <div className='min-w-60 w-full sm:w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-lg sm:text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Toggle filters" />
          </p>
          {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
              </p>
            </div>
          </div>
            {/* SubCategory Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
              </p>
            </div>
          </div>
        </div>
         {/* Right Side */}
      <div className='flex-1'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-2xl mb-4 gap-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e:any)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-3 py-2 rounded w-full sm:w-auto'>
            <option value="relavent"> Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index)=>(
              <ProductItem key={index} name={item.name} _id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
      </div>
    </>
  )
}

export default Collection
