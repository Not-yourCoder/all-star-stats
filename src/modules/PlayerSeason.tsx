import React from 'react'

type Props = {}

const PlayerSeason = (props: Props) => {
    return (
        <div className=''>
            <div className='p-4'>
                <p className='font-extralight text-white'>Season 2021 / 2022</p>
                <div className='grid grid-cols-4 text-center p-2'>
                    <div className=''>
                        <p className='text-2xl text-white font-bold'>8.2</p>
                        <p className='text-white'>Average Rating</p>
                    </div>
                    <div className=''>
                        <p className='text-2xl text-white font-bold'>7</p>
                        <p className='text-white'>Assists</p>
                    </div>
                    <div className=''>
                        <p className='text-2xl text-white font-bold'>12</p>
                        <p className='text-white'>Goals</p>
                    </div>
                    <div className=''>
                        <p className='text-2xl text-white font-bold'>24</p>
                        <p className='text-white'>Matches</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PlayerSeason