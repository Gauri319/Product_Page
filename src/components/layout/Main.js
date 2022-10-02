import React from 'react';
import Product from '../UI/mainUI/Product';

function Main(props) {
  function handleCard2( count){
     props.updatecart2(count);
  }
  return (
    <div>
       <Product updateCard1={handleCard2}/>
    </div>
  )
}

export default Main