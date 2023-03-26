import "./CardProduct.css"

const CardProduct = ({item}) => {
  return (
    <div className="card-container">
      <div className="card-top">
        <img src={item.image} alt={item.description} />
      </div>
      <div className="card-bottom">
        <div className="title">
        {item.title}
        </div>
        <div className="price">
            {item.price}
        </div>
        <div className="category">
            {item.category}
        </div>
        <div className="rate">
            {item.rating.rate}
        </div>
      </div>
    </div>
  )
}
export default CardProduct
