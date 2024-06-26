import React, { PureComponent } from 'react'
// import Button from '../Button';

export default class Text extends PureComponent {

    sendClick = (data) => (event) => {
        console.log(data, event);
    }

    render() {

        return (
            <div>
                {/* <Button className="btn-primary" id="btn" onClick={this.sendClick("data")} >
                    Send Click
                </Button> */}
            </div>
        )
    }
}
