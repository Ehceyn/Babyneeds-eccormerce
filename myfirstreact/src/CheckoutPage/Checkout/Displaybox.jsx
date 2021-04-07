import React from 'react';
import Details from './Details';
import Previewbox from './Previewbox';

function Displaybox() {
    return (
        <div id='display-box'>
            <Previewbox img=''/>
            <Details/>
        </div> 
    );
}

export default Displaybox;