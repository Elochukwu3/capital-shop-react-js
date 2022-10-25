import React, { useState, useEffect } from "react";
import { Image, Segment } from "semantic-ui-react";
import MainButton from "./MainButton";
import "../css-files/Main.css";
import { data } from "../Data";

export default function Main({ children, stying, counter }) {
  const [slider, setSlider] = useState(0);
useEffect(() => {
  let tags = stying.current.children
  tags=[...tags]
  tags.forEach((element, index )=> {
    element.style.borderBottom='none'
   if (counter === index) {
   element.style.borderBottom='4px solid red'
  
   }
   
  });
}, [counter])

 const changeColor =(m)=>{
  return{
    backgroundImage: 
    `url(${m})`,
    height:'100%',
    marginTop:'-70px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position:'absolute',
    display:'none'
};
 }


  useEffect(() => {
    const backChange = setInterval(
      () =>
        setSlider((prev) => (prev >= data.length - 1 ? (prev = 0) : prev + 1)),
      1000
    );
    return () => clearInterval(backChange);
  }, [slider]);

  const mapItems = data.map(({ img, text, boldText }, index) => {
    return (
      <div className={slider === index ? "active" : "deactive"} key={index} style={changeColor(img)}>
        {/* <section style={{height:'100%'}}>
          {" "}
          <Image
            src={img}
            style={{ position: "absolute", zIndex: "-1", height: "100%", width:'100%',  }}
          />
        </section> */}
        {/* <section className="mainpageText">
          <p>Fashion Sale</p>
          <b style={{ textTransform: "capitalize" }}>{boldText}</b>
          <Segment
            basic
            textAlign="center"
            style={{
              padding: "0 .1rem",
              opacity: ".6",
              widih: "140px",
              minWidth: "120px",
            }}
          >
            {text}
          </Segment>
          <MainButton name="shop Now" />
        </section> */}
      </div>
    );
  });

  return (
    <>
      <div className="mainPage">{mapItems}</div>
      <div className="outFits">{children}</div>
      <div className="trendinSection">
        <div>Trending This Week</div>
        <div className="middleMenu">
          <ul style={{ display: "flex" }} ref={stying}>

            <li>Men</li>
            <li>Women</li>
            <li>Baby</li>
            <li>Fashion</li>

          </ul>
        </div>
      </div>
    </>
  );
}
