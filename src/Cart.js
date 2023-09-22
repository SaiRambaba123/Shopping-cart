import React from 'react'
import { useCart } from 'react-use-cart';

 const Cart=()=> {
    const{items,
    isEmpty,
totalItems,updateItemQuantity,totalUniqueItems,
removeItem,cartTotal}=useCart();
  if(isEmpty) return <h3>Your cart is Empty</h3>
  return (
  <section className='py-4 container' >
      <div  className='row justify-content-center'>
       <div className='col-12'>
            <h3>cart:{totalUniqueItems} Items:{totalItems} </h3>
            <table className='table table-light table-hover m-0'>
                <tbody>
                {
                    items.map((item,index)=>{
                        return(
                            <tr key={index}>
                            <td>
                            <img src={item.img} alt='img' style={{height:"6rem"}}></img>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                              <td>
                                <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                <button className='btn btn-info ms-2'  onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                <button className='btn btn-danger ms-2'  onClick={()=>removeItem(item.id)}>Remove Item</button>
                              </td>
                           </tr>
                        )

                    })
                }
              </tbody>
            </table>
            <button className="btn btn-primary col-auto ms-auto">$Total:{cartTotal}</button>
       </div>
      </div>
  </section>
  )
}
export default Cart;
