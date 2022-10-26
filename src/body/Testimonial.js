import React from 'react'

export default function Testimonial() {
  return (
    <div className='commentWrapper'>
      <div className='contnts'>
      <div className='commentInner'>
      <h2>Customer Testimonial</h2>
        <div>
         <p>Great product/wears inspires greatness, love and great shinout which sets out</p>
          <p>Yes this product is awesome have used it more</p>
          <p>than three times</p>
        </div>
        <div  style={{display:'flex', alignItems:'center'}}>
        <div>
          <img src='./images/wearingglass.png' alt=''/>
        </div>
        <div style={{padding:'0 .5rem',}}>
          <p>John Paschal</p>
          <p style={{fontSize:'.905rem', opacity:'.7'}}>Designer Coloo</p>
        </div>
        </div>
      </div>
      
      </div>

       
    </div>
  )
}
