import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import Label from './Label';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });

describe('Input Component', () => {
    it('renders input field with Label component', () => {
        const mockOnChangeAmount = jest.fn();
        const mockAmount = '100';

        const wrapper = shallow(
            <Input
                onChangeAmount={mockOnChangeAmount}
                amount={mockAmount}
            />
        );
        expect(wrapper.find(Label).exists()).toBe(true);
        const inputField = wrapper.find('input.input-field');
        expect(inputField.exists()).toBe(true);
        expect(inputField.prop('type')).toBe('text');
        expect(inputField.prop('name')).toBe('amount');
        expect(inputField.prop('value')).toBe(mockAmount);
        inputField.simulate('change', { target: { value: '200' } });
        expect(mockOnChangeAmount).toHaveBeenCalledWith(expect.objectContaining({ target: { value: '200' } }));
    });
});
