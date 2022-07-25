import React, {useState}from 'react'
import Products from '../Products.json'
import './Card.css';
function Card() {

    const[name,setName]=useState([]);
          console.log(name);
  const  addtocard=(prod)=>{
    
localStorage.setItem("cardItem",JSON.stringify([prod]));


    }
   
  return (
    <div className='main1'>
 <div className='container'>
        {Products.map((prod,index) =>(
          <div className='main' key={index}>
            <p ><img className='image' src={prod.image} alt=''></img></p>
            <h1 className='name'>{prod.name}</h1>
            <h3 className='model'>{prod.model}</h3>
            <h4 className='cc'>{prod.cc}</h4>
            <button className='btn1' onClick={()=>addtocard(prod)}>Add To Card</button>
            <button className='btn2' onClick={()=>addtocard(prod)}>Favourite</button>
          </div>
        ))}
    </div><br/>
  </div>
)
        }
export default Card;