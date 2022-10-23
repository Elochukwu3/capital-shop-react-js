import React from "react";
import { Cart, Person, Search } from "react-bootstrap-icons";
import { Grid, Image, List,} from "semantic-ui-react";
import "../css-files/header.css";


export default function HeaderTwo() {
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
      >
        <Grid.Column style={{ width: "auto" }}>
          <Image src="../images/logo.png" size="small" />
        </Grid.Column>
        <Grid.Column
          style={{ width: "auto", fontWeight: "bolder", fontSize: "1.9rem" }}
        >
          <List horizontal>
            <List.Item>Home</List.Item>
            <List.Item>Men</List.Item>
            <List.Item>Women</List.Item>
            <List.Item>
              Pages
            </List.Item>
            <List.Item>
            <details>
              <summary>Baby Collections <span>New</span></summary>
              <div className="dropDown">
              <p>Cloths</p>
              <p>Shoes</p>
              <p>Napkin</p>
              <p>Stockins</p>
              <p>Sweater</p>
              </div>
            </details>
            </List.Item>
            <List.Item>Blog</List.Item>
            <List.Item>Contact</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column style={{ width: "auto" }}>
          <List horizontal>
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
      </Grid>
    </nav>
  );
}
