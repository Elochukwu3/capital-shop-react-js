import React from "react";
import { Image } from "./Sweater";

export default function Men() {
  return (
   <div style={{background:'#ddd', minHeight:'100vh'}}>
   <h3>Men Wear</h3>
   <div className="display-items">
      <Image
        image={
          "https://media.istockphoto.com/id/1423943626/photo/two-black-t-shirts-isolated-on-white.webp?s=612x612&w=is&k=20&c=wRwCc9YncvAsee3yRIkAhqHE3x091tGSV6IU6bvh8JU="
        }
        cap={"T - Shirt"}
      />
      <Image
        image={"https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
        cap={"Shirt"}
      />
      <Image
        image={
          "https://media.istockphoto.com/id/1423943626/photo/two-black-t-shirts-isolated-on-white.webp?s=612x612&w=is&k=20&c=wRwCc9YncvAsee3yRIkAhqHE3x091tGSV6IU6bvh8JU="
        }
        cap={"wears"}
      />
      <Image
        image={"https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=400"}
          
        cap={"wears"}
      />
      <Image
        image={"https://is4.fwrdassets.com/images/p/fw/z/AMIF-MS190_V1.jpg"}
          
        cap={"wears"}
      />
    </div>
   </ div>
  );
}
