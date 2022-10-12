import React from 'react'
import "./Header.css"
import Menu from "../../assests/Menu.png"
import Location from "../../assests/Location.png"
import Filter from "../../assests/Filter (2).png"
import search from "../../assests/Search (2).png"
import Close from "../../assests/Close (2).png"
import Trending from "../../assests/Trending (2).png"
import Bag from "../../assests/bag (2).png"
import Martha from "../../assests/Martha (2).png"
import Nav from "../../assests/nav.jpg"
import Log from "../../assests/Log.jpg"


const Header = () => {
  return (
    <div className='header'>
      <picture>
  <source media="(max-width: 700px)" srcset={Log} />
  <source media="(min-width: 800px)" srcset={Nav} />
  <img src={Nav}  />
</picture>
    
      
    </div>
  )
}

export default Header
