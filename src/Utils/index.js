 import checkPropTypes from 'check-prop-types'
 
export const findByTestData = (component, atribute) => {
    const wrapper = component.find(`[data-test='${atribute}']`)
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name );
    return propsErr
}