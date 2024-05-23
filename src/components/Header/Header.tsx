import React from 'react'
import { images } from '../../constants/images'
import { navBar } from '../../constants/header'
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='h-24'>
            <div className='flex gap-10 items-center justify-between'>
                <div className='flex p-6 items-center'>
                    <img src={images.barcelona} alt="" className='w-16' />
                    <p className='text-white text-4xl font-semibold'>Barcelona</p>
                </div>
                <div className='flex gap-10 p-6'>
                    {navBar.map((items, index) => (
                        <p key={index} className='text-white font-extralight text-xl'>{items}</p>
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