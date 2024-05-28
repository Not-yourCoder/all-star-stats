import { FaAngleDown } from 'react-icons/fa6'


const SelectPlayer = () => {
  return (
    <div className='bg-[#23232c] text-white w-[12rem] flex items-center justify-around py-3'>
      <div className='flex gap-2 text-lg'>
        <p>7</p>
        <p>C. Ronaldo</p>
      </div>
      <div>
        <FaAngleDown />
      </div>
    </div>
  )
}

export default SelectPlayer