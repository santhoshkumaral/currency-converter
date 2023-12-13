import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import CurrencyRow from './CurrencyRow';
import fetchCurrencyRates from './mockAPI';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./mockAPI');

describe('CurrencyRow', () => {
    const currencyOptions = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        AUD: 1.37,
        INR: 0.83,
    };

    const selectedCurrency = 'USD';
    const onChangeCurrency = jest.fn();

    it('renders select element with options', () => {
        const wrapper = shallow(
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={selectedCurrency}
                onChangeCurrency={onChangeCurrency}
            />
        )
        expect(wrapper.find('select').exists()).toBe(true);
        const options = wrapper.find('option');
        expect(options).toHaveLength(Object.keys(currencyOptions).length);
        expect(wrapper.find('select').prop('value')).toBe(selectedCurrency);
        wrapper.find('select').simulate('change', { target: { value: 'EUR' } });
        expect(onChangeCurrency).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'EUR' } }));
    });
});
