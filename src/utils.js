export const dynamicHandle = (event, component) => {
    return component.setState({
        [event.target.name]:event.target.value
    })
};
