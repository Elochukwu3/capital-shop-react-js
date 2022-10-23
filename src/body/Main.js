import React, { useState, useEffect } from "react";
import { Image, Segment } from "semantic-ui-react";
import MainButton from "./MainButton";
import "../css-files/Main.css";
import data from "../Data";

export default function Main({children}) {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const backChange = setInterval(
      () =>
        setSlider((prev) => (prev >= data.length - 1 ? (prev = 0) : prev + 1)),
      20000
    );
    return () => clearInterval(backChange);
  }, [slider]);

  const mapItems = data.map(({ img, text, boldText }, index) => {
    return (
      <div className={slider === index ? "active" : "deactive"} key={index}>
        <section>
          {" "}
          <Image
            src={img}
            style={{ position: "absolute", zIndex: "-1", height: "100%" }}
          />
        </section>
        <section className="mainpageText">
          <p>Fashion Sale</p>
          <b style={{ textTransform: "capitalize" }}>{boldText}</b>
          <Segment
            basic
            textAlign="center"
            style={{ padding: "0 8rem", opacity: ".6" }}
          >
            {text}
          </Segment>
          <MainButton name="shop Now" />
        </section>
      </div>
    );
  });

  return(
            <>
            <div className="mainPage">{mapItems}</div>
            <div>{children}</div>
            </>
         ) 
}
