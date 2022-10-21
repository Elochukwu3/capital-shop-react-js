import { Container } from "semantic-ui-react";

export default function SubHeader() {
  return <Container textAlign="center" fluid style={{background:'#000', color: '#ccc', padding:'.6rem 0', fontSize:'.9rem'}}>
    Sale upto 50% Biggest Discount.Hurry Limited Period Offer <a style={{color:'#cebd9c', textDecoration:'underline', cursor:'pointer'}}>Shop Now</a>
  </Container>;
}
