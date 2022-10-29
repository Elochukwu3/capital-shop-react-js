import React from "react";

export function Image({ image, cap }) {
  return (
    <div className="dispalyImg">
      <img src={image} alt="sweater" />
      <p>{cap}</p>
    </div>
  );
}

 function Sweater() {
  return (
    <div style={{background:'grey', minHeight:'100vh'}}>
      <h3>Sweaters</h3>
      <div className="display-items">
        <Image
        cap={"Sweater Wool"}
          image={
            "https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?s=2048x2048"
          }
        />
        <Image
        cap={"Sweater Ianion"}
          image={
           "https://media.istockphoto.com/id/594451448/photo/orange-sweater.webp?s=612x612&w=is&k=20&c=uw4GS5csS4lpnoQMXmcHxDjLB30hJINmdWMoVSaCZ_M="
          }
        />
        <Image
        cap="Hoody Hood"
          image={
            "https://media.istockphoto.com/id/1174257526/vector/realistic-white-hoodie-or-hoody-for-man-sweatshirt.webp?s=612x612&w=is&k=20&c=G0j0DR5iwvS9JAhYcQHa8mL-fQGrXv_noALNOAUEysw="
          }
        />
        <Image
        cap={"Hoody Devil"}
          image={
            "https://media.istockphoto.com/photos/mens-black-blank-hoodie-templatefrom-two-sides-natural-shape-on-for-picture-id1167815189?k=20&m=1167815189&s=612x612&w=0&h=qiUBQ_wTGF_N7bxEu_3xCK3Nf2_QWNMfURFbQxtpML8="
          }
        />
      </div>
    </div>
  );
}
export default Sweater;
