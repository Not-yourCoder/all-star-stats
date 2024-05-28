import { images } from '../constants/images'
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const PlayerImage = () => {
    return (
        <div className='text-white h-[42rem] relative'>
            <img src={images.cronaldo} alt="" className='w-full h-full' />
            <div className='absolute top-0 right-10'>
                <div className='text-white text-3xl flex flex-col gap-3'>
                    <CiShare2 />
                    <CiHeart />
                </div>
            </div>
        </div>
    )
}

export default PlayerImage