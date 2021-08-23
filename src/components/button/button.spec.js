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
        beforeEach(() => {
            const props = {

                buttonText: 'Example Button Text',
                emitEvent: () => {

                }

            }
            wrapper = shallow(<SharedButton />);
        });

        it('Should Render a button', () => {
            const button = findByTestData(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        })
    })

})