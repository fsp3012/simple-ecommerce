import React, { useState } from 'react'
import { imagecomp } from './Imagecomponent'

const Imagecarousel = () => {
    const [index, setIndex] = useState(0)
  return (
    <div>
        <div>
            <img src={imagecomp[index]} alt="" />
        </div>
    </div>
  )
}

export default Imagecarousel