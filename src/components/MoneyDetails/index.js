import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {text, image, alt, backgroundColor} = moneyDetails

  return (
    <li className={`list-items ${backgroundColor}`}>
      <img src={image} alt={alt} className="image" />
      <div className="heading-container">
        <p className="paragraph">{text}</p>
        <h1 className="amount">RS </h1>
      </div>
    </li>
  )
}
export default MoneyDetails
