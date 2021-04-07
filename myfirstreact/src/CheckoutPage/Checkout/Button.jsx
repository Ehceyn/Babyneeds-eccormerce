import React from 'react';

function Button(props) {
    return (
        <div>
            <button id='checkout-btn'>{props.btnName}</button>
        </div>
    );
}

export default Button;