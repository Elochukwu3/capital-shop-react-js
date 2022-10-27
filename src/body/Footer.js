import React from "react";
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";
import { Image } from "semantic-ui-react";
import "../css-files/footer.css";

export default function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footer-inner">
        <div className="suscribe">
          <h3>Suscribe Newsletter</h3>
          <p>Suscribe newletter to get 50% on all producte</p>
        </div>
        <div className="inputContainer">
          <input type={"email"} placeholder="Enter your Email" />
          <button>Suscribe</button>
        </div>
        <div className="footer-iconss">
          <span>
            <Facebook />
          </span>
          <span>
            <Instagram />
          </span>
          <span>
            <Youtube />
          </span>
        </div>
      </div>
      <div className="footerIn">
        <div>
          <Image src="./images/logo.png" style={{ width: "auto" }} />
        </div>
        <div className="gridNewsletter">
          <ul>
            <li>
              <h5>Shop Men</h5>
            </li>
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
          </ul>
          <ul>
            <li>
              <h5>Shop Women</h5>
            </li>
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>
              <h5>Babby Collection</h5>
            </li>
            <li>Clothing Fashion</li>

            <li>Summer</li>
            <li>Support</li>
          </ul>
          <ul>
            <li>
              <h5>Quick Links</h5>
            </li>
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>
              {" "}
              <h5>Quick Links</h5>
            </li>
            <li>Casual</li>
            <li>Casual</li>
            <li>Casual</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div style={{textAlign:'center', fontSize:'.8rem', color:' rgb(85, 85, 85)',padding:'1.6rem .5rem 1rem .5rem'}}>
        <p>
          Copyright 2022 All rights reserved | This Template is made{" "}
          <span style={{ color: "red" }}>&#10084;</span> with by{" "}
          <span style={{ color: "red" }}>Romauld</span>
        </p>
      </div>
    </div>
  );
}
