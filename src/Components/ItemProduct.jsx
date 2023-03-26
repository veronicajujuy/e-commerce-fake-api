import { useEffect, useContext } from "react"
import { MyContext } from "../GlobalStates/GlobalStates"
import StarRateComponent from "./StarRateComponent"
import { useParams } from "react-router-dom"
import "./ItemProduct.css"

const ItemProduct = () => {
    const {id} = useParams()
    const {product, fetchProduct} = useContext(MyContext)
    useEffect(()=>{
        fetchProduct(id)
    },[])
  return (
    <div className="item-container">
      <div className="item-left">
        <div className="item-photo">
            <img className="photo" src={product?.image} alt={product?.description} />
        </div>
        <div className="item-descripcion">
            <div className="descripcion">
             Descripcion: </div>
            {product?.description}
        </div>
      </div>
      <div className="item-detalle">
        <div className="item-detalle-top">
            <div className="categoria">{product?.category}</div>
        <div className="stars"><StarRateComponent stars={product.rating?.rate}/> {product.rating?.rate}</div>
        </div>
        <div className="titulo">{product?.title}</div>
        <div className="precio">$ {product?.price}</div>
        <button className="boton">Agregar al carrito</button>
      </div>
    </div>
  )
} 

export default ItemProduct
