import React from 'react'
import { images } from '../constants/images'

type Props = {}

const PlayerStats = (props: Props) => {
  return (
    <div className='text-white'>
      <div className='p-4'>
        <p className='font-extralight'>Career Trophies</p>
        <div className='flex items-center'>
          <div className='relative'>
            <img src={images.uefatrophy} alt="" className='w-11' />
            <div className='bg-white w-7 absolute top-12 left-5 border-2 border-black rounded-full'>
              <p className='text-pink-500 text-center font-semibold'>4</p>
            </div>
          </div>
          <div className='relative'>
            <img src={images.copaTrophy} alt="" className='w-20' />
            <div className='bg-white w-7 absolute top-11 border-2 border-black left-10 rounded-full'>
              <p className='text-pink-500 text-center font-semibold'>2</p>
            </div>
          </div>
          <div className='relative'>
            <img src={images.laligaTrophy} alt="" className='w-12' />
            <div className='bg-white w-7 absolute top-10 border-2 border-black left-6 rounded-full'>
              <p className='text-pink-500 text-center font-semibold'>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerStats