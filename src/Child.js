import React from 'react';
import './Child.css';

function Child(props) {
    return (
        <div className="child">
            <h1>Child</h1>
            <button onClick={() => props.changeWord('Veronica')}>Click to change title</button>
        </div>
    )
}

export default Child;