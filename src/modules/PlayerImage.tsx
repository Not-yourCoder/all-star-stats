import React from 'react'
import { images } from '../constants/images'

type Props = {}

const PlayerImage = (props: Props) => {
    return (
        <div className='text-white h-[42rem]'>
            <img src={images.cronaldo} alt="" className='w-full h-full'/>
        </div>
    )
}

export default PlayerImage