import React from 'react'
import { Comment } from 'semantic-ui-react'

export default function Testimonial() {
  return (
    <div>
        <h2 style={{color:'#ddd'}}>Customer Testimonial</h2>
        <Comment style={{display:'flex'}}>
        <Comment.Avatar src='.//images/fashion1.webp' className='testimonialImg'/>
        <Comment.Content>
            <Comment.Text>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <p>Designer of colorib</p>
            </Comment.Text>
        </Comment.Content>
        </Comment>
    </div>
  )
}
