import React, { Component } from 'react';
import { Spring } from 'react-spring';

export default class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component 2</h1>
                            <p>lorem ipsum dolor, sit amet
                                wooogie boogie on the piano
                                and some other stuff.</p>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}