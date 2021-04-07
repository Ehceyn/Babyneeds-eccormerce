import React from 'react';

function Searchbox(){
    return (
        <div id='searchdiv'>
            <input type='text' placeholder='search the entire store' id='search' name='search'/>
            <button>Let's go!</button>
        </div>
    )
}

export default Searchbox