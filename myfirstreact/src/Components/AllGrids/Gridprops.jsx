import React, {useState} from 'react';


function Gridprops(props){

    const [count,setCount]=useState(0);

    function increase(){
        setCount(count+1);
    }
    function decrease(){
        setCount(count-1);
    }


    return <div id='grids'>
        <div>
                <p id='grid-icons'>top icons</p>
                <img src={props.image} alt='' id='grid-image' />
                <p id='name-item'>{props.name}</p>
                <p id='age-item'>{props.ageRange}</p>
                <p id='price-item'>{props.price}</p>
                <h4>{count}</h4>
                <button onClick={count>0?decrease:null}>-</button>
                <button onClick={increase}>+</button>

        </div>
    </div>
}

export default Gridprops