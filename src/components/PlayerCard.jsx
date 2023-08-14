import React from 'react'

const PlayerCard = ({els}) => {
  return (
    <div className='card'>
      <img src={els.post} alt="" />
      <h1>{els.name}</h1>
      <h2>{els.nationality}</h2>
    </div>
  )
}

export default PlayerCard
