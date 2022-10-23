import { Image } from "semantic-ui-react";


export default function Categories({name, imgUrl}) {
  return (
    <div>
        <Image src={imgUrl} size={'small'}/>
        {name}
       
    </div>
  )
}

