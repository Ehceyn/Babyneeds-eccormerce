import React from 'react';
import digitalbg8 from './images/digitalbg8.jpg';
import Searchbox from '../Components/Searchbox';
import {RiShoppingBasketLine} from 'react-icons/ri';
import {RiBearSmileLine} from 'react-icons/ri';



function Navbar(){
    return (
        <div id='navbar'  >
            <div>
                <img src={digitalbg8} alt='' id='logo'/>
                <span>k&m</span>
            </div>
            <div><Searchbox/></div>
            <div id='nav-item-div'>
                <ul>
                    <li className='nav-items'><a href=''><RiBearSmileLine className='basket'/>login</a></li>
                    <li className='basket'><RiShoppingBasketLine /></li>
                    <li className='basket'><RiBearSmileLine /></li>
    
    
                </ul>
            </div>
        </div> );

  
 

//   function myFunction(){
//     var nav=document.getElementById('navbar');
//     var sticky=navbar.offsetTop;

//       if(window.pageYOffset>=sticky){
//           nav.classList.add('sticky');
//       }else{
//           navbar.classList.remove('sticky');
//       }
//   };

 
}

export default Navbar