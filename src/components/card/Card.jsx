import React, { useState } from 'react'
import image from '../../assets/cheeseburger.svg'
import image2 from '../../assets/coffee.png'
import image3 from '../../assets/cola.svg'
import image4 from '../../assets/fries.svg'
import image5 from '../../assets/hamburger.png'
import image6 from '../../assets/tea.svg'
import Render from '../render/Render'
import scss from './Card.module.scss'

const menuItems = [
    {
      id: 1,
      title: "Hamburger",
      price: 80,
      img: image,
    },
    {
      id: 2,
      title: "Coffee",
      price: 100,
      img: image2,
    },
    {
      id: 3,
      title: "Cola",
      price: 60,
      img: image3,
    },
    {
      id: 4,
      title: "Tea",
      price: 50,
      img: image4,
    },
    {
      id: 5,
      title: "Cheeseburger",
      price: 100,
      img:image5,
    },
    {
      id: 6,
      title: "Fries",
      price: 40,
      img:image6,
    },
  ];
const Card = () => {
    const [menuItem, setMenuItem] = useState(menuItems)
  return (
    <div className={scss.Container}>
        <Render menuItemss={menuItem} setMenuItem={setMenuItem}/>
    </div>
  )
}

export default Card