import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const transactionNameAmount = [
  {
    text: 'Your Balance',
    image:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    alt: 'balance',
    backgroundColor: 'green',
    id: 1,
    balanceAmount: 0,
  },
  {
    text: 'Your Income',
    image:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    alt: 'income',
    backgroundColor: 'blue',
    id: 2,
    IncomeAmount: 0,
  },
  {
    text: 'Your Expenses',
    image:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    alt: 'expenses',
    backgroundColor: 'violet',
    id: 3,
    expensesAmount: 0,
  },
]
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: '',
    totalResultList: [],
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state

    const amountObject = {
      id: v4(),
      titleInput,
      amountInput,
      typeInput,
    }

    this.setState(prevstate => ({
      totalResultList: [...prevstate.totalResultList, amountObject],
      titleInput: '',
      amountInput: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onchangeDropDown = event => {
    this.setState({typeInput: event.target.value})
  }

  onDeleteItem = id => {
    const {totalResultList} = this.state

    const filteredItem = totalResultList.filter(eachObject => {
      if (id !== eachObject.id) {
        this.setState({totalResultList: filteredItem})
      }
    })
  }

  render() {
    const {totalResultList} = this.state

    return (
      <div className="app-container">
        <div className="name-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="description">
            Welcome back to your
            <span className="money-manager"> Money Manager</span>
          </p>
        </div>
        <ul className="list-container">
          {transactionNameAmount.map(eachObject => (
            <MoneyDetails moneyDetails={eachObject} key={eachObject.id} />
          ))}
        </ul>
        <div className="form-result-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="form-heading">Add Transaction</h1>
            <label htmlFor="title" className="form-title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="title-input"
              placeholder="Title"
              onChange={this.onChangeTitle}
            />
            <label htmlFor="amount" className="form-amount">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="amount-input"
              placeholder="Amount"
              onChange={this.onChangeAmount}
            />
            <p className="form-type">Type</p>
            <select className="drop-down" onChange={this.onchangeDropDown}>
              <option value="income" selected>
                Income
              </option>
              <option value="expenses">expenses</option>
            </select>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="result-container">
            <h1 className="result-heading">History</h1>
            <div className="title-amount-type-container">
              <h1 className="result-title">Title</h1>
              <h1 className="result-title">Amount</h1>
              <h1 className="result-title">Type</h1>
            </div>
            <ul className="list-title-amount-type-container">
              {totalResultList.map(eachObject => (
                <TransactionItem
                  transactionItem={eachObject}
                  key={eachObject.id}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
