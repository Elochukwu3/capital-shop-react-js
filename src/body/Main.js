import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react';
import MainButton from './MainButton';
import './main.css';

export default function Main() {
  return (
    <div className='mainPage' style={{position:'relative', display:'flex'}}>
       <section> <Image src='/images/ladyblue.png'style={{position:'absolute', zIndex:'-1'}}/></section>

        <section className='mainpageText'>
            <p>Fashion Sale</p>
            <Header style={{textTransform:'capitalize'}} size='huge' as={'h2'}>
                minimal menz style
            </Header>
            <Segment basic textAlign='center' container>
               Pellentesque habitant morbi tristique senectus et netus et malesuada fames
            ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
            tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
            ultricies mi vitae est. Mauris placerat eleifend leo.
            </Segment>
            <MainButton name="shop Now"/>
        </section>
    </div>
  )
}
