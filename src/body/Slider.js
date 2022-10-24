import React from 'react'
import { Card} from 'semantic-ui-react';
import {  ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';
export default function Slider({handleEvent, counter, handleEventDec, slider,}) {
  return (
    <>
    {
      slider.length > 0? slider.map(({img, price, discount, text, id}, index)=>{
        return (
          <Card className={counter=== index ? 'active-slide sliderContainer':'deactive-slide sliderContainer'} key={id} style={{transform: `translateX(-${counter}00%)`}}>
          <img src={img}/>
          <p>{text}</p>
          <span>{price}</span> <span>{discount}</span>
      </Card>
        )
      }): ''
    }
  <span className='arrow left' onClick={handleEventDec}> <ArrowLeftCircle/></span>
    <span className='arrow right' onClick={handleEvent}><ArrowRightCircle/></span>
    </>
  )
}
