import React, { useState, useRef, useEffect } from "react";
function Order() {
  const [formData, setFormData] = useState({name: '', qty: '',deliveryInstructions: '',payment:"",shipping:"",isGift:false});
 
  const inputHandler = (e) => {
    const {name,value,type,checked}=e.target;
    setFormData({...formData, [name]: type === 'checkbox' ? checked : value});
  }
const submitHandler = (e)=>{
  e.preventDefault();


    alert("order conformed")
  
}
const place = ()=>{

alert("order placed");
}

  return (
    <div id='Order' className='order1'>
    <form onSubmit={submitHandler} className='orderform'>
        <div className='formorder'>
        <label>Name:</label> 
        
        <input  type="text" name="name" value={formData.name} onChange={inputHandler}
        placeholder="Enter name of flower" />
       
        <br/>
        <label>Quantity:</label> 
        <input type="number" name="qty" value={formData.qty} onChange={inputHandler}
        placeholder="enter quantity" />
        <br/>
         <br />
        <textarea name="deliveryInstructions" value={formData.deliveryInstructions} onChange={inputHandler}  placeholder=' Enter Delivery Instruction'/>
        <br/>
        <label>Payment Method:</label>
        <select name="payment" value={formData.payment} onChange={(e)=>setFormData({...formData,payment:e.target.value})}>
          <option value="">Select the mode of payment</option>
          <option value="credit">Credit Card</option>
          <option value="paypal">Paytm</option>
        </select>
        <br/>
        <label>
            choose shipping method: <br />
            <input type="radio" name="shipping" value="standard" onChange={inputHandler} checked={formData.shipping === 'standard'} /> Standard
            <input type="radio" name="shipping" value="express" onChange={inputHandler} checked={formData.shipping === 'express'} /> Express
        </label>  
       
       <br />
        <label>
         <i>send as gift:</i> 
        </label>

        <input type="checkbox" name="isGift" checked={formData.isGift} onChange={inputHandler} /> 
       
       <br />
         
        <h2 className='text-green'>
          Kindly confirm the checkout details before submitting the order.
        </h2>
        <p> Name: {formData.name}</p>
        <p> Quantity: {formData.qty}</p>
        <p> Delivery Instructions: {formData.deliveryInstructions}</p>
        <p> Payment Method: {formData.payment}</p>
        <p> Shipping Method: {formData.shipping}</p>
        <p> Is this a gift? {formData.isGift ? 'Yes' : 'No'}</p>
          </div><br />
        <button onClick={place} className="bg-green-300 px-6 py-2 rounded-xl border-2 border-black"><i>Place order</i></button>
    </form>
  </div>

  );
}
export default Order;