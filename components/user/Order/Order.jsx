import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';

const Order = () => {
    const {color} = useSelector((s)=>s.Theme)
  return (
    <div className='w-full relative p-2 shadow-sm rounded-sm'>
        <div className={`h-full relative text-center text-${color}-600 text-2xl `}>
            Orders
        </div>
        <div className='w-full pt-2 '>
            <Table/>
        </div>
    </div>
  )
}

export default Order