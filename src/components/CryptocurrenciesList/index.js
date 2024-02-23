// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({currenciesList: updatedData, isLoading: false})
  }

  render() {
    const {currenciesList, isLoading} = this.state
    return (
      <div className="currencies-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="main-title">Cryptocurrency Tracker</h1>
            <img
              className="cryptocurrency-logo"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="currencies-value-table">
              <li className="table-header">
                <p className="header-text">Coin Type</p>
                <div className="header-left-section">
                  <p className="header-text">USD</p>
                  <p className="header-text">EURO</p>
                </div>
              </li>
              {currenciesList.map(eachItem => (
                <CryptocurrencyItem
                  currencyDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
