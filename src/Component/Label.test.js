import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });

describe('Label Component', () => {
    it('renders label with empty text when labelText is not provided', () => {
        const mockHtmlFor = 'sampleId';

        const wrapper = shallow(
            <Label
                htmlFor={mockHtmlFor}
            />
        );
        const labelElement = wrapper.find('label');
        expect(labelElement.exists()).toBe(true);
        expect(labelElement.prop('htmlFor')).toBe(mockHtmlFor);
        expect(labelElement.text()).toBe('');
    });
});
