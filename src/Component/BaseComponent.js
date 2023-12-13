import React, { useState, useEffect } from 'react';
import fetchCurrencyRates from './mockAPI';
import CurrencyRow from './CurrencyRow'
import Input from './Input'
import Label from './Label'
import '../App.css';

const BaseComponent = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [rates, setRates] = useState({});
    const [error, setError] = useState('');


    // Fetch mock currency rates
    useEffect(() => {
        fetchCurrencyRates().then((data) => {
            setRates(data);
        });
    }, []);

    //  handle currency conversion
    const convertCurrency = () => {
        if (rates[fromCurrency] && rates[toCurrency]) {
            const converted = (amount / rates[fromCurrency]) * rates[toCurrency];
            setConvertedAmount(converted.toFixed(2));
        } else {
            setConvertedAmount(0); // Invalid conversion, set converted amount to 0
        }
    };
    const handleAmountChange = (e) => {
        const inputAmount = e.target.value;
        setAmount(inputAmount);
        if (/^\d*\.?\d*$/.test(inputAmount) || inputAmount.trim() === '') {
            setAmount(inputAmount);
            setError('');
        } else {
            setError('Please enter Input Values');
        }

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        convertCurrency();
        if (amount === '') {
            setError('Please enter an amount');
            return;
        } else {
            setError('');
            return;
        }
    };


    const handleFromCurrencyChange = (value) => {
        setFromCurrency(value);
        if (value === toCurrency) {
            setError('Source and Target currencies cannot be the same');
        } else {
            setError('');
        }
    };

    const handleToCurrencyChange = (value) => {
        setToCurrency(value);
        if (value === fromCurrency) {
            setError('Source and Target currencies cannot be the same');
        } else {
            setError('');
        }
    };
    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>


            <div className="currency-row-container">
                <div>
                    <Label htmlFor={'source_Currency'} labelText={'Source Currency'} />
                    <CurrencyRow
                        currencyOptions={rates}
                        selectedCurrency={fromCurrency}
                        onChangeCurrency={(e) => handleFromCurrencyChange(e.target.value)}
                        onChangeAmount={handleAmountChange}
                        amount={amount}
                    />
                </div>
                <div>
                    <Label htmlFor={'to_Currency'} labelText={'Target Currency'} />
                    <CurrencyRow
                        currencyOptions={rates}
                        selectedCurrency={toCurrency}
                        onChangeCurrency={(e) => handleToCurrencyChange(e.target.value)}
                        onChangeAmount={handleAmountChange}
                        amount={amount}
                    />
                </div>
            </div>
            <Input onChangeAmount={handleAmountChange} amount={amount} />
            <button type="submit" className='convert-button' onClick={handleSubmit} disabled={error}>
                Convert
            </button>

            <div className="converted-amount">
                {convertedAmount !== 0 && !error && (
                    <>
                        <Label htmlFor={'convertedAmount'} labelText={`Converted Amount: ${convertedAmount} ${toCurrency}`} />
                    </>
                )}
            </div>
            <div className='error'>
                {error && <p>{error}</p>}
            </div>
        </div>

    );
};

export default BaseComponent