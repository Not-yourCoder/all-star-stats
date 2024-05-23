import { FaAngleDown } from "react-icons/fa6";
import { images } from '../constants/images';



const SelectLeague = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src={images.bpl} alt="" className='w-[4rem] rounded-full' />
            <FaAngleDown size={"24px"} className=" text-white" />
        </div>
    )
}

export default SelectLeague