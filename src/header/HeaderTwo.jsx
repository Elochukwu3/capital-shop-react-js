import React from "react";
import { Cart, Person, Search } from "react-bootstrap-icons";
import { Dropdown, Grid, Image, List, Popup, Button } from "semantic-ui-react";
import "./css-files/header.css";
const POPUP = {
  background: "red",
  padding: ".2rem .5rem",
  left: "0",
  borderRadius: "5px",
  border: "unset",
  position: "absolute",
  top: "-1.7rem",
};

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
            {/* <Popup
              style={POPUP}
              size="tiny"
              open
              content="new"
              trigger={<Button as={'p'} content="Baby Collection" />}
            /> */}
            <List.Item>
              <div
                role="listbox"
                aria-expanded="false"
                class="ui dropdown"
                tabindex="0"
            
                <i aria-hidden="true" class="dropdown icon"></i>
                <div class="menu transition">
                  <div role="option" class="item">
                    <span class="text">New</span>
                  </div>
                  <div role="option" class="item">
                    <span class="description">ctrl + o</span>
                    <span class="text">Open...</span>
                  </div>
                  <div role="option" class="item">
                    <span class="description">ctrl + s</span>
                    <span class="text">Save as...</span>
                  </div>
                </div>
              </div>
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
