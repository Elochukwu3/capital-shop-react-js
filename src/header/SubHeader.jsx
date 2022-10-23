import { Container } from "semantic-ui-react";

export default function SubHeader() {
  return <Container textAlign="center" fluid style={{background:'#000', color: '#ccc', padding:'.4rem 0', fontSize:'.9rem', height:'auto',}}>
    Sale upto 50% Biggest Discount.Hurry Limited Period Offer
     <span style={{color:'#cebd9c', textDecoration:'underline', cursor:'pointer'}}>Shop Now</span>
  </Container>;
}
