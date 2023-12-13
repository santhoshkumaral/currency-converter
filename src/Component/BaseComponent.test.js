import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import BaseComponent from './BaseComponent';
import CurrencyRow from './CurrencyRow';
import Input from './Input';
import Label from './Label';
import fetchCurrencyRates from './mockAPI';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('./mockAPI');
describe('BaseComponent', () => {
    let wrapper;
    beforeAll(() => {
        fetchCurrencyRates.mockResolvedValue({
            USD: 1,
            EUR: 0.85,
            GBP: 0.73,
            AUD: 1.37,
            INR: 0.83,
        });
    });


    it('renders correctly', () => {
        wrapper = shallow(<BaseComponent />);
        expect(wrapper.exists()).toBe(true);
    });

    it('initializes with default values', () => {
        expect(wrapper.find(CurrencyRow).length).toBe(2); 
        expect(wrapper.find(Input).length).toBe(1);
        expect(wrapper.find(Label).length).toBe(2); 
    });
});
