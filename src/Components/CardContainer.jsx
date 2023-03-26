import { useContext, useEffect } from "react"
import { MyContext } from "../GlobalStates/GlobalStates"
import CardProduct from "./CardProduct"
import {Link}from "react-router-dom"
import "./CardContainer.css"

const CardContainer = () => {
    const {products, fetchProducts} = useContext(MyContext)
    useEffect(()=>{
        fetchProducts()
    },[])

  return (
    <div className="container-products">
      {products && products.map(item => 
        <Link to={`/products/${item.id}`} className="alink">
            <CardProduct  item={item}/>
        </Link>
      
      )}
    </div>
  )
}
export default CardContainer