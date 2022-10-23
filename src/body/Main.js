import React from 'react'
import {Image, Segment } from 'semantic-ui-react';
import MainButton from './MainButton';
import "../css-files/Main.css";

export default function Main() {
  return (
    <div className='mainPage'>
       <section> <Image src='/images/ladyblue.png'style={{position:'absolute', zIndex:'-1', height:'100%'}}/></section>

        <section className='mainpageText'>
            <p>Fashion Sale</p>
            <b style={{textTransform:'capitalize'}}>
                minimal menz style
            </b>
            <Segment basic textAlign='center' style={{padding:'0 8rem', opacity:'.6'}}>
               Pellentesque habitant morbi tristique senectus et netus et malesuada fames
            ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
            </Segment>
            <MainButton name="shop Now"/>
        </section>
    </div>
  )
}
