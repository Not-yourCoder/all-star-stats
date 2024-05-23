import { teams } from "../../constants/teams"
import SelectLeague from "../../modules/SelectLeague"


const Sidebar = () => {
    return (
        <div className="flex flex-col px-4 pt-4 gap-[4rem] max-h-screen">
            <SelectLeague />
            <div className='h-full'>
                {teams.map((item, index) => (
                    <div className='mb-[2.8rem]' key={index}>
                        <img src={item.logo} alt="" className="w-[6rem] " />
                        <p className='text-center text-teal-400 font-semibold text-lg'>{item.team}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Sidebar

