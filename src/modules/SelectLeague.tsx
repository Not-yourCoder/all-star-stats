import { FaAngleDown } from "react-icons/fa6";
import { images } from '../constants/images';



const SelectLeague = () => {
    return (
        <div className='mx-auto my-5'>
            <div className="flex items-center gap-2">
                <img src={images.laliga} alt="" className='w-[3.5rem] rounded-full' />
                <FaAngleDown size={"24px"} className="text-white text-extralight" />
            </div>
            <div className="text-white text-center font-semibold my-2 text-lg">
                LaLiga
            </div>
        </div>
    )
}

export default SelectLeague