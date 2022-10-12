import React from 'react'
import "./ThirdBox.css"
import three from "../../assests/3.png"
import group from "../../assests/Group 3336.png"
import one from "../../assests/1.png"
import two from "../../assests/2.png"
import Main from "../../assests/main.png"
import stars from "../../assests/stars.jpg"
import current from "../../assests/current.jpg"

const ThirdBox = () => {
  return (
    <>
    <div className="ost">

    
    <div className="sec">
       <div className="sideBar">
       
        <div className="frstBan"><img src={three}  /></div>
        <div className="secndBan"><img src={group}  /></div>
        <div className="ThirdBan"><img src={one} /></div>
        <div className="FourthBan"><img src={two}  /></div>
       </div>
       <div className="main">
        <img className='todo' src={Main} />

       </div>
      
       </div>
       <div className="par">
        <h2>SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone New 64GB Orange</h2>
    </div>
    <div className="stars">
        <img className='store' src={stars}  />
    </div>
    
    <div className="para">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam vel aliquid debitis ipsam amet quod?
    </div>
      
    </div>
    
    </>
  )
}

export default ThirdBox
