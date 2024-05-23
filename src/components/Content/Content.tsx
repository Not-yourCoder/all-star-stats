import PlayerHeading from '../../modules/PlayerHeading/PlayerHeading'
import PlayerImage from '../../modules/PlayerImage'
import PlayerSeason from '../../modules/PlayerSeason'
import PlayerStats from '../../modules/PlayerStats'
import SelectPlayer from '../../modules/SelectPlayer'
import { SpiderChart } from '../../modules/SpiderChart'


const Content = () => {
  return (
    <div>
      <SelectPlayer />
      <div className='grid grid-cols-[30%_25%_45%] gap-4'>
        <PlayerHeading />
        <div >
          <PlayerStats />
          <PlayerSeason />
          <div className='w-[350px] mx-auto'>
            <SpiderChart />

          </div>
        </div>
        <PlayerImage />
      </div>
    </div>
  )
}

export default Content;