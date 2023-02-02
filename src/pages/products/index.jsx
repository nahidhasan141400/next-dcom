import React from 'react';
import Paginasion from '../../../components/util/paginasion/Paginasion';
import ProList from '../../../components/util/productList/ProList';
import Sort from '../../../components/util/sort/Sort';
import Layout from '../../../layout/main';

const index = () => {
  return (
    <Layout>
        <Sort/>
        <ProList data={[0,1,2,3,4,3,3,3,3,3]}/>
        <Paginasion/>
    </Layout>
  )
}

export default index