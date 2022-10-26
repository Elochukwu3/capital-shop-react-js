// import React, from 'react'

import { useReducer } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { testiMonialData } from "../Data";
const initial ={
  testimonial: 0
}
const reducer =(state, action)=>{
  switch (action.type) {
    case 'forward':
      return{
       testimonial: (state.testimonial < testiMonialData.length -1 )? state.testimonial + 1: state.testimonial = -1
      };
    case 'previous':
      return{
        testimonial: (state.testimonial >   0)? state.testimonial - 1: testiMonialData.length -1
      };
  
    default:
      return{
        state
      };
  }

}

export default function Testimonial() {
  const[state, dispatch]=useReducer(reducer, initial);
  function increaseSlide() {
    dispatch({type:'forward'})
  }
  function decreaseSlide() {
    dispatch({type:'previous'})
  }
  return (
    <>
     <span className="testimonial-Icon Right">
        {" "}
        <ChevronLeft onClick={decreaseSlide}/>
      </span>
    <div className='commentWrapper'>
      {
        testiMonialData.length > 0? testiMonialData.map((m, index)=>{
          return(
            <div className= {index === state.testimonial? 'testimonial-active': 'inactive'}>
      <div className='commentInner'>
      <h2>Customer Testimonial</h2>
        <div>
         <p>{m.sents1}</p>
          <p>{m.sent2}</p>
          <p>{m.sent3}</p>
        </div>
        <div  style={{display:'flex', alignItems:'center', justifyContent:'center', paddingTop:'.4rem'}}>
        <div>
          <img src={m.pics} alt=''/>
        </div>
        <div style={{padding:'0 .6rem',}}>
          <p>{m.testifiier}</p>
          <p style={{fontSize:'.905rem', opacity:'.7'}}>{m.occupation}</p>
        </div>
        </div>
      </div>
      
      </div>
          )
        }):'' 
      }
      

       
    </div>
    <span className="testimonial-Icon Right">
        <ChevronRight onClick={increaseSlide}/>
      </span>
    </>
  )
}
