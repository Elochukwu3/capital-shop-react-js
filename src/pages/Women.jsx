import React from 'react'
import { Image } from './Sweater'

export default function Women() {
  return (
    <div style={{background:'grey', minHeight:'100vh'}}>
       <h3> Women Wears</h3>
       <div className="display-items">
        <Image image={'https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=400'} cpa={'Italiano Wear'} />
        <Image image={'https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=400'} cpa={'Italiano Wear'} />
        <Image image={'https://images.pexels.com/photos/983569/pexels-photo-983569.jpeg?auto=compress&cs=tinysrgb&w=400'} cpa={'Vegas Veind'} />
        <Image image={'https://images.pexels.com/photos/2312223/pexels-photo-2312223.jpeg?auto=compress&cs=tinysrgb&w=400'} cpa={'Indiana Vailn'} />
        <Image image={'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=400'} cpa={'Ammerian Black'} />
        <Image image={'https://images.pexels.com/photos/1038040/pexels-photo-1038040.jpeg?auto=compress&cs=tinysrgb&w=400'} cpa={'Africanos Trad'} />
        <Image image={'https://images.pexels.com/photos/1038040/pexels-photo-1038040.jpeg?auto=compress&cs=tinysrgb&w=400'} cpa={'Ellian Redis'} />
       </div>
    </div>
  )
}
