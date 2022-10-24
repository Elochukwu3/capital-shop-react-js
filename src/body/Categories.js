import { Image } from "semantic-ui-react";


export default function Categories({name, imgUrl}) {
  return (
    <div className="category">
        <Image src={imgUrl}/>
        <span>{name}</span>
       
    </div>
  )
}

