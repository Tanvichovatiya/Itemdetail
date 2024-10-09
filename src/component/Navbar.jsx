import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
return (
<nav className='bg-gray-700 flex gap-4 w-full py-2 '>
<Link to="/" className='text-white text-[20px] '>Home</Link>
<Link to="/about" className=' text-white text-[20px]'>About</Link>
</nav>
);
};
export default Navbar;