// Write your code here.
import './index.css'

const CardsItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="desc">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="imgDetails" alt={title} />
      </div>
    </li>
  )
}

export default CardsItem
