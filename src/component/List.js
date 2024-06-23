import React, { Component } from "react";

export default class List extends Component {
    state = {
        data: [
            {
                id: 1,
                name: "John",
                age: 22,
            },
            {
                id: 2,
                name: "Adhi",
                age: 24,
            },
            {
                id: 3,
                name: "Manu",
                age: 26,
            }
        ],
    };
    render() {
        return <div>
            <ul>
                {this.state.data.map((value, index) => {
                    return <li key={value.id} >No:{value.id},   Name: {value.name},   Age: {value.age}</li>
                })}
            </ul>
        </div>;
    }
}
