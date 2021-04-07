import React from 'react';

function Heading(){
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      
      alert('Full document height, with scrolled out part: ' + scrollHeight);
    return (<div id='header' >
        <div id='hp'><h1>Kiddies & Mommies</h1></div>
        
    </div>

    );
}
export default Heading