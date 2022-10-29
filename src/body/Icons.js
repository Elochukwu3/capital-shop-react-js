import React from 'react'
const iconStyle={
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    textAlign:'center',
    padding:'0 2rem',
    boxShadow:'0px 0px 1px 2px #ff',
    borderRight:'1px solid #ccc'
}
export default function Icons({icons, captions, msg}) {
  return (
    <div style={iconStyle}>
        <div><img src={icons} alt={msg} style={{width:'3.2rem'}}/></div>
        <h4 style={{padding:'1rem 0 .6rem 0', margin:'0'}}>{msg}</h4>
        <p style={{color:'#000', fontWeight:'bold', opacity:'.5', textTransform:'capitalize'}}>{captions}</p>
    </div>
  )
}
