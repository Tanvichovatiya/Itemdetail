import React from 'react';
import { useParams } from 'react-router-dom';
const ItemDetail = () => {
const { id } = useParams();
return <h1 className='mt-12 text-gray-600 '>Details for Item {id}</h1>;
};
export default ItemDetail;