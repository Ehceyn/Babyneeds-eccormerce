import React from'react';
import Gridprops from './Gridprops.jsx';
import GridList1 from './GridList1.jsx';
import GridList2 from './GridList2.jsx';
import GridList3 from './GridList3.jsx';


function Gridmap(x) {
    return <Gridprops 
                    key={x.id}
                    image={x.img}
                    name={x.name}
                    ageRange={x.ageRange}
                    price={x.price}  />
}

function Grid1(){
    return (
    <div id='grid-1'>{GridList1.map(Gridmap)}</div>
    )
}

function Grid2(){
    return (
    <div id='grid-2'>{GridList2.map(Gridmap)}</div>
    )
}

function Grid3(){
    return (
    <div id='grid-3'>{GridList3.map(Gridmap)}</div>
    )
}

export {Grid1, Grid2, Grid3}