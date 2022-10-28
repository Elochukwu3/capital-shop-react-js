import { Container, Segment } from "semantic-ui-react";

export default function SubHeader() {
  return (
    <Segment
      textAlign="center"
      style={{
        borderRadius: "0",
        background: "#000",
        color: "#ccc",
        padding: ".4rem .5rem",
        fontSize: ".9rem",
        height: "auto",
        width: "100vw",
      }}
      className='md-subheader'
    >
      Sale upto 50% Biggest Discount.Hurry Limited Period Offer
      <span
        style={{
          color: "#cebd9c",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Shop Now
      </span>
    </Segment>
  );
}
