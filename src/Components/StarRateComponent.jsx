import StarRatings from "react-star-ratings"

const StarRateComponent = ({stars}) => {
  return (
    <StarRatings
        rating={stars}
        starDimension="16px"
        starSpacing="2px"
        starRatedColor="#FB8200"
      />
  )
}

export default StarRateComponent
