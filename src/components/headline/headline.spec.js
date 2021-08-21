import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import {findByTestData, checkProps} from '../../Utils'

import '../../setupTest'


const setUp = (props={}) => {
    const wrapper = shallow(<Headline {...props} />)
    return wrapper
}

describe('Headline component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {

            const expectedProps = {
                header: ' Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@hotmail.com',
                    age: 19,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline, expectedProps, 'props');
           //if this fails is cuz there's a alert from the propTypes, and will not be undefined
            expect(propsErr).toBeUndefined();

        })
    })

    describe('Have props',() => {
        let wrapper;
        beforeEach(() => {
            const props ={
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props)
        });

        it('Should render without errors',() => {
           const component = findByTestData(wrapper,'HeadlineComponent')
           expect(component.length).toBe(1)
        });

        it('Should render a H1',() => {
            const h1 = findByTestData(wrapper,'header')
            expect(h1.length).toBe(1)
         });


    })

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should not render', () => {
            const component = findByTestData(wrapper,'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    })
})
