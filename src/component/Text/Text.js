import React, { Component } from 'react'
import { dynamicHandle } from '../../utils';

export default class Text extends Component {
    state = {
        name: ""
    }

    render() {
        const { name } = this.state;
        console.log(name);
        return (
            <div>
                <input type="text" value={name} name='name' onChange={(event) => dynamicHandle(event, this)} />
            </div>
        )
    }
}
