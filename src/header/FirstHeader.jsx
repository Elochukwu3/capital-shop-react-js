import {Facebook, Instagram, Twitter, Youtube, Pinterest } from 'react-bootstrap-icons';
import { List, Grid } from 'semantic-ui-react';
import './css-files/header.css';

export default function FirstHader() {
  return (
    <>
       <header className='firstHeader'>
        <Grid columns={2} container>
            <Grid.Row>
            <Grid.Column>
            <List horizontal animated>
            <List.Item>
                About us
            </List.Item>
            <List.Item>
                Privacy
            </List.Item>
            <List.Item>
                FAQ
            </List.Item>
            <List.Item>
               Career
            </List.Item>
        </List>
            </Grid.Column>
            <Grid.Column>
            <List horizontal animated>
            <List.Item>
                Whilist
            </List.Item>
            <List.Item>
                Track your order
            </List.Item>
            <List.Item>
               <Facebook/>
            </List.Item>
            <List.Item>
              <Instagram/>
            </List.Item>
            <List.Item>
             <Twitter/>
            </List.Item>
            <List.Item>
             <Youtube/>
            </List.Item>
            <List.Item>
            <Pinterest/>
            </List.Item>
        </List>
            </Grid.Column>
            </Grid.Row>

        </Grid>
       
        
        
      
       </header>
    </>
  )
}
