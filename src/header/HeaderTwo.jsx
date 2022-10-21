import React from 'react';
import { Menu, List } from 'semantic-ui-react';
import './css-files/header.css'

export default function HeaderTwo() {
  return (
    <nav>
        <Menu widths={3} fluid>
            <Menu.Item name='Home' />
            <Menu.Item>
                Home
                <Menu.Item name='Men'/>
                <Menu.Item name='Women'/>
                <Menu.Item name='Baby Collection'/>
                <Menu.Item name='Page'/>
                <Menu.Item name='Blog'/>
            </Menu.Item>
            <Menu.Item name='Home' />
             
        </Menu>
    </nav>
  )
}

