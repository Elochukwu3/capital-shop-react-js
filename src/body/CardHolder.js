import React from "react";
export default function CardHolder({ header, image, description }) {
  return (
    <div
      className="ui card"
      style={{ boxShadow: "none", textAlign: "left", margin: "0 0" }}
    >
      <div className="image" style={{ borderRadius: "0" }}>
        <img src={image} style={{ borderRadius: "0" }} alt={description}/>
      </div>
      <div className="content" style={{ padding: "0 .4rem" }}>
        <div className="meta" style={{ padding: "1em .4rem" }}>
          <span className="date">Fashion Tips</span>
        </div>
        <div
          className="header"
          style={{ fontSize: "1.2rem", textTransform: "capitalize" }}
        >
          {header}
        </div>

        <div className="description" style={{ fontSize: ".9rem" }}>
          {description}
        </div>
      </div>
      <div>
        <a
          style={{
            textDecoration: "underline",
            color: "#000",
            fontWeight: "bolder",
            padding: ".6rem .4rem",
            fontSize: "1.1em",
          }}
          href='/'
        >
          Read More
        </a>
      </div>
    </div>
  );
}
