import React from 'react'
import "./Boxes.css"
import Box from "../../assests/box_1.png"

const Boxes = () => {
  return (
    <div className='container'>
        <div className="frst_cont">
            <img className="section" src={Box}  />
        </div>
        <div className="frst_cont">
            <img className="section" src={Box}  />
        </div>
        <div className="frst_cont">
            <img className="section" src={Box}  />
        </div>
      
    </div>
  )
}

export default Boxes
