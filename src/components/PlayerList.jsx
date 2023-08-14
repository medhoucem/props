import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerList = ({players}) => {
  return (
    <div className='list'>
      {players.map(el=><PlayerCard els={el}/>)}
    </div>
  )
}

export default PlayerList

