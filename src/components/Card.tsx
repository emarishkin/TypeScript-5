import { FC } from "react";

interface CardProps{
    width:number
    height:number
    backgroundColor:string
    children:React.ReactNode
}


const Card:FC<CardProps>= ({width,height,backgroundColor,children}) => {

    return(
        <div style={{width,height,backgroundColor}}>
          <h1>Карточка</h1>
          <img src='/components/111.jpg' alt="" />
          {children}
        </div>
    )
}
export default Card