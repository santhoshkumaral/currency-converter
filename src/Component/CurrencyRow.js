import React from 'react'
export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency
    } = props
    return (
        <div>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {Object.keys(currencyOptions).map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

        </div>
    )
}