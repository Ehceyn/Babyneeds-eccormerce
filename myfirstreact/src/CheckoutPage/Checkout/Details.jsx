import React from 'react';
import Button from './Button'

function Details(props) {
    return (
        <table id='details'>
            <p>{props.img}</p>
            <tr>
                <td>csseum</td>
                <td>colosseum</td>

            </tr>
            <tr>
                <td>colosseum</td>
                <td>colosse</td>

            </tr>
            {/* <Button btnName='Proceed to summary'/> */}

        </table>
    );
}

export default Details;