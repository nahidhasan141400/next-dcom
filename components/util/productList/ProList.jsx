import React from 'react';
import ProductCard from '../ProductCard';

const ProList = ({data}) => {
  return (
    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product,i)=>{
            return (
                <ProductCard key={i} img={"img/product/pr (2).jpeg"} name="BTF-Orange"/>
            )
        })}
    </div>
  )
}

export default ProList