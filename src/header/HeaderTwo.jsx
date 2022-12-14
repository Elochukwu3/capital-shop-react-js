import React, { useState } from "react";
import { Cart, Person, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Grid, Image, List } from "semantic-ui-react";
import "../css-files/header.css";

export default function HeaderTwo() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <Grid
        columns={3}
        container
        style={{
          justifyContent: "space-around",
          padding: ".6rem 0",
          alignItems: "center",
        }}
        id="menuCont"
      >
        <Grid.Column style={{ width: "auto" }} id="col">
          <Image src="../images/logo.png" size="small" id="logo" />
        </Grid.Column>
        <Grid.Column
          style={{ width: "auto", fontWeight: "bolder", fontSize: "1.9rem" }}
          className={toggle ? "Horizontal active" : " Horizontal "}
        >
          <List
            className="row"
            style={{ display: "flex", fontSize: "1rem", alignItems: "center", textTransform:'uppercase' }}
            id="roww"
          >
            
            <List.Item style={{ padding: "0" }} as={Link} to='/'>Home</List.Item>
          
            <List.Item as={Link} to='/men'>Men</List.Item>
            <List.Item as={Link} to='/women'>Women</List.Item>
            <List.Item as={Link} to='page'>Pages</List.Item>
            <List.Item>
              <details>
                <summary>Baby Collections</summary>
                <div className="dropDown">
                  <p>Cloths</p>
                  <p>Shoes</p>
                  <p>Napkin</p>
                  <p>Stockins</p>
                  <Link to={'/sweater'}><p>Sweater</p></Link>
                </div>
              </details>
            </List.Item>
            <List.Item as={Link} to='/blog'>Blog</List.Item>
            <List.Item as={Link} to='/contact'>Contact</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column
          style={{ width: "auto", display: "flex", alignItems: "center" }}
        >
          <List className="serchCo">
            <List.Item>
              <Search />
            </List.Item>
            <List.Item>
              <Person />
            </List.Item>
            <List.Item>
              <Cart />
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column className="mobileIcon" onClick={() => setToggle(!toggle)}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </Grid.Column>
      </Grid>
    </nav>
  );
}
