import PlayerHeading from '../../modules/PlayerHeading'
import PlayerImage from '../../modules/PlayerImage'
import PlayerStats from '../../modules/PlayerStats'
import SelectPlayer from '../../modules/SelectPlayer'

type Props = {}

const Content = (props: Props) => {
  return (
    <div>
      <SelectPlayer />
      <div className='grid grid-cols-3 gap-4'>
        <PlayerHeading />
        <PlayerStats />
        <PlayerImage />
      </div>
    </div>
  )
}

export default Content