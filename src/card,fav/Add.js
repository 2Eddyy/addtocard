import React, { useEffect, useState } from 'react'
import './Add.css'
 const Add = () => {
    const[name,setItem]=useState([]);
    useEffect(()=>{
       var a= setItem(JSON.parse(localStorage.getItem("cardItem")));
       console.log(a);
    },[]);
  // var a=localStorage.getItem("cardItem").id;
  // console.log(a);
  console.log(name);
  const removeItem=(id)=>{
    const remove=name.filter((item)=>item.id!==id);
    setItem(remove);
    console.log('removeitem');
  }
  return (
    
    <div className='Container' >
        {name.map((prod,index) =>(
          <div className='product' key={index}>
            <p><img className='img' src={prod.image} alt=''></img></p> 
            <h1 className='names'>{prod.name}</h1>
            <h3 className='models'>{prod.model}</h3>
            <h4 className='ccs'>{prod.cc}</h4>
            <button className='button' onClick={()=>removeItem(prod.id)} >Remove Item</button>
          </div>
        ))}
    
  </div>
  )
}
export default Add;