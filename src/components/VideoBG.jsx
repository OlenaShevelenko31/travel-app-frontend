import React from 'react'
import video from '../assets/222.mp4'

function VideoBG() {
  return (
    <div>
        <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />
  </video>
    </div>
  )
}

export default VideoBG;