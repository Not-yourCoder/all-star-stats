import { images } from '../../constants/images'
import { navBar } from '../../constants/header'
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
    const [selected, setSelected] = useState<number | null>(null)
    return (
        <div className=' header_container'>
            <div className='flex gap-10 items-center justify-around'>
                <div className='flex items-center'>
                    <img src={images.barcelona} alt="" className='w-16' />
                    <p className='text-white text-4xl font-semibold'>Barcelona</p>
                </div>
                <div className='flex gap-10 h-[100px] items-center'>
                    {navBar.map((items, index) => (
                        <Link to={items.path} key={index} className='text-white font-extralight text-xl px-6 py-9 mx-2 nav_items hover:border-b-orange-100 hover:border-b-2 hover:mix-blend-color-dodge' style={{ color: selected === index ? "red" : "white", borderBottom: selected === index ? "2px solid red" : "" }} onClick={() => setSelected(index)}>{items.label}</Link>
                    ))}
                </div>
                <div className='flex gap-6 text-white text-2xl p-6'>
                    <CiSearch />
                    <VscAccount className='font-extralight' />
                </div>
            </div>
        </div>
    )
}

export default Header