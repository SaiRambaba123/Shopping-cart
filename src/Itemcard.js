import React from 'react'
import { useCart } from 'react-use-cart';


 const Itemcard=(props)=> {
    const{addItem}= useCart();


  return (
    <div className='col-12 col-md-6 col-lg-3 mx-0 mb-4'>
         <div class="card p-0 overflow-hidden shadow" >
  <img src={props.img} class="card-img-top" alt="Image" style={{height:"6rem",width:"6rem",position:"relative", margin:"auto"}}/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.price}</p>
    <button class="btn btn-primary" onClick={()=>addItem(props.item)}>Add To Cart</button>
  </div>
</div>
    </div>
  )
}
export default Itemcard;
