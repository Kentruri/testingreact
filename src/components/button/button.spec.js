import { shallow } from 'enzyme';
import React from 'react';
import { findByTestData, checkProps } from './../../Utils/index'
import SharedButton from './index'
import "../../setupTest"

describe('SharedButton component', () => {
    describe('Checking proptypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button text',
                emitEvent: () => {

                }
            };

            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Renders', () => {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {

                buttonText: 'Example Button Text',
                emitEvent: mockFunc

            }
            wrapper = shallow(<SharedButton {...props} />);
        });

        it('Should Render a button', () => {
            const button = findByTestData(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        })

        it('Should emit callback on click event', () => {
            const button = findByTestData(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    })

})