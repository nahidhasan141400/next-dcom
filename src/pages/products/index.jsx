import axios from "axios";
import React, { useEffect, useState } from 'react';
import Paginasion from '../../../components/util/paginasion/Paginasion';
import ProList from '../../../components/util/productList/ProList';
import Sort from '../../../components/util/sort/Sort';
import Layout from '../../../layout/main';



const Index = () => {
  const [Data,setData] = useState([[],[]]);
  useEffect(()=>{
    const getData = async ()=>{
      try {
        const {data} = await axios("/api/products/getProduct");
        setData(data);
        // console.log(Data);
        console.log(data);
      } catch (error) {
        console.log(error)
      }
      
    }
    getData();
  },[])
  return (
    <Layout>
        <Sort/>
        <ProList data={[...Data[0]]}/>
        <Paginasion/>
    </Layout>
  )
}

export default Index