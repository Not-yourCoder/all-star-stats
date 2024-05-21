import React from 'react'
import { images } from '../constants/images'

type Props = {}

const PlayerHeading = (props: Props) => {
    return (
        <div className='bg-white w-[28rem] grid grid-cols-4 mt-6 p-4'>
            <div className=''>
                <div className='p-2 text-center rounded-lg mb-2 text-2xl font-semibold bg-gray-500 text-white'>
                    LWF
                </div>
                <div className='bg-black flex'>
                    <img src={images.leftWeakFoot} alt="" className=' w-[100px]' />
                    <img src={images.rightStrongFoot} alt="" className=' w-[100px]' />
                </div>
            </div>
            <div className='text-6xl font-bold'>
                <p>Cristiano</p>
                <p>Ronaldo</p>
            </div>
        </div>
    )
}

export default PlayerHeading