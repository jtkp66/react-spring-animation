import React from 'react'
import { Spring } from 'react-spring';

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>lorem ipsum dolor, sit amet
                wooogie boogie on the piano
                and some other stuff.
            </p>
          </div>
        </div>
      )}
    </Spring>

  )
}

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
}