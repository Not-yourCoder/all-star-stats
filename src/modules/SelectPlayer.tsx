import { FaAngleDown } from 'react-icons/fa6'

type Props = {}

const SelectPlayer = (props: Props) => {
  return (
    <div className='bg-white w-[12rem] flex items-center justify-around py-3'>
      <div className='flex gap-2 text-lg'>
        <p>11</p>
        <p>C. Ronaldo</p>
      </div>
      <div>
        <FaAngleDown />
      </div>
    </div>
  )
}

export default SelectPlayer