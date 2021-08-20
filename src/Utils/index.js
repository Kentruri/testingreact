export const findByTestData = (component, atribute) => {
    const wrapper = component.find(`[data-test='${atribute}']`)
    return wrapper
}