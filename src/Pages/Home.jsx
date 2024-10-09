import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
const items = [1, 2, 3];
return (
<div className='mt-5 mx-auto'>
<h1 className='text-gray-700 text-[25px] mb-4'>Home</h1>
<ul className='grid grid-cols-3 gap-3'>
{items.map((item) => (
<li key={item} className='text-center px-7 py-3 bg-gray-700 text-white'>
<Link to={`/item/${item}`}>Item {item}</Link>
</li>
))}
</ul>
</div>
);
};
export default Home;