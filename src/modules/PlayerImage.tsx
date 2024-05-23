import { images } from '../constants/images'


const PlayerImage = () => {
    return (
        <div className='text-white h-[42rem]'>
            <img src={images.cronaldo} alt="" className='w-full h-full'/>
        </div>
    )
}

export default PlayerImage