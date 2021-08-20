import React from "react";
import { shallow } from "enzyme";
import Navbar from "./index";
import {findByTestData} from '../../Utils'
import '../../setupTest'


const setUp = (props = {}) => {
    const component = shallow(<Navbar {...props} />)
    return component
}



describe('Navbar component', () => {

    let component;
    beforeEach(() => {
       component = setUp();

    });
    it('It should render without errors', () => {
        const wrapper = findByTestData(component,'navbarComponent')
        //this tells us that our navbar component should only have 1 class .navbarComponent
        expect(wrapper.length).toBe(1)
    })

    it('It should render a logo', () => {
        const wrapper = findByTestData(component,'logoIMG')
        expect(wrapper.length).toBe(1)
    })
})