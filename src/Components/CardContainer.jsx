import { useContext, useEffect } from "react"
import { MyContext } from "../GlobalStates/GlobalStates"
import CardProduct from "./CardProduct"

const CardContainer = () => {
    const {products, fetchProducts} = useContext(MyContext)
    useEffect(()=>{
        fetchProducts()
    },[])
    console.log(products)
  return (
    <div>
      {products && products.map(item => 
        <CardProduct key={item.id} item={item}/>
      )}
    </div>
  )
}
export default CardContainer