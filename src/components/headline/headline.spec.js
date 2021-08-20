import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import {findByTestData} from '../../Utils'
import '../../setupTest'


const setUp = (props={}) => {
    const wrapper = shallow(<Headline {...props} />)
    return wrapper
}

describe('Headline component', () => {
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