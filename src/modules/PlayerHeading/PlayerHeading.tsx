import { images } from '../../constants/images'


const PlayerHeading = () => {
    return (
        <div className='text-white'>
            <div className='rounded-md flex gap-4 my-6 p-4 items-center'>
                <div className=' flex flex-col gap-4'>
                    <div className='p-2 w-20 text-center rounded-lg mb-2 text-xl font-bold bg-[#23232c] text-white'>
                        LWF
                    </div>
                    <div className='w-20'>
                        <img src={images.rightFoot} alt="" className=' w-[100px]' />
                    </div>
                </div>
                <div className='text-8xl font-semibold'>
                    <p>Cristiano</p>
                    <p>Ronaldo</p>
                </div>
            </div>
            <div className='mb-4'>
                <img src={images.ronaldo} />
            </div>
            <div className='text-lg'>
                <p>Cristiano Ronaldo is a part of Real Madrid's legacy and will forever remember as one of the great icons throughout the club's history. He was unveiled at the Santiago Bernabéu on 6 July 2009, where he was joined by Eusebio and Alfredo Di Stéfano, and since that day, the just-to-goals came.</p>
            </div>
        </div>
    )
}

export default PlayerHeading