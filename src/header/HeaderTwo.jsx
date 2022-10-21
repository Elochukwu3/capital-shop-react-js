import React from 'react';
import { Cart, Person, Search } from 'react-bootstrap-icons';
import { Grid, Image, List } from 'semantic-ui-react';
import './css-files/header.css'

export default function HeaderTwo() {
  return (
    <nav>
        <Grid columns={3} container style={{justifyContent: 'space-around', padding:'1rem 0'}}>
            <Grid.Column style={{width: 'auto'}}>
              <Image src={''}/>
            </Grid.Column>
          <Grid.Column style={{width: 'auto', fontWeight:'bolder', fontSize:'1.2rem'}}>
          <List horizontal>
            <List.Item>
                Home
            </List.Item>
            <List.Item>
               Men
            </List.Item>
            <List.Item>
                Women
            </List.Item>
            <List.Item>
               Baby Collections
            </List.Item>
            <List.Item>
               Pages
            </List.Item>
            <List.Item>
               Blog
            </List.Item>
            <List.Item>
              Contact
            </List.Item>
        </List>
            </Grid.Column>  
            <Grid.Column style={{width: 'auto'}}>
                <List horizontal>
                    <List.Item>
                        <Search/>
                    </List.Item>
                    <List.Item>
                        <Person/>
                    </List.Item>
                    <List.Item>
                        <Cart />
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
    </nav>
  )
}

