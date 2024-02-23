// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li className="currency-container">
      <div className="currency-logo-name-section">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name currency-text">{currencyName}</p>
      </div>
      <div className="currency-value-section">
        <div>
          <p className="currency-usd-value currency-text currency-text-value">
            {usdValue}
          </p>
        </div>
        <p className="currency-euro-value currency-text currency-text-value">
          {euroValue}
        </p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
