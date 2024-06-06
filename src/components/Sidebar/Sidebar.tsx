import { Link } from "react-router-dom"
import { teams } from "../../constants/teams"
import SelectLeague from "../../modules/SelectLeague"
import { useState } from "react"


const Sidebar = () => {
    const [selected, setSelected] = useState<number | null>(null)
    return (
        <div className="flex flex-col min-h-screen">
            <SelectLeague />
            <div className='h-full'>
                {teams.map((item, index) => (
                    <div className='mb-[1rem] px-5 pt-4 opacity-40' style={{ borderRight: selected === index ? "2px solid red" : "", opacity: selected === index ? "1" : "" }} key={index}>
                        <Link to={item.path} onClick={() => setSelected(index)} >
                            <img src={item.logo} alt="" className="w-[6rem] " />
                            <p className='text-center text-teal-400 font-semibold text-lg'>{item.team}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar

