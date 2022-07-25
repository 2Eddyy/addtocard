import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '../card/Card';
import './Header.css'
function Header() {
  return (
    <div>
        <div className='header'>
            <img className='bike' src='./logo.jpg' alt='' width='100px' height='63px'></img>
             <a href='add'> <AddShoppingCartIcon className='button1'/></a>
              <a href='fav'><FavoriteIcon className='button2'/></a>
              <select className='button3'>
              <option value='profile'><a href='profile'>profile</a></option>
              <option value='profile'><a href='contact'>contact</a></option>
              <option value='profile'><a href='logout'>logout</a></option>
              </select>
              </div><br/>
              <Card/>
    </div>
  )
}

export default Header