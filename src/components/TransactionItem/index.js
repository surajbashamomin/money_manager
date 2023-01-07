import './index.css'

const TransactionItem = props => {
  const {transactionItem, onDeleteItem} = props
  const {id, titleInput, amountInput, typeInput} = transactionItem

  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-transaction-items">
      <p className="title">{titleInput}</p>
      <p className="amount">Rs {amountInput}</p>
      <p className="type-input">{typeInput}</p>
      <button className="button" type="button" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteImage"
        />
      </button>
    </li>
  )
}
export default TransactionItem
