import React from 'react';
import Navbar from '../UI/headerUI/Navbar';
import ContainerFluid from '../UI/headerUI/ContainerFluid';

function Header(props) {
  return (
    <div>
       <Navbar count={props.count}/>
       <ContainerFluid/>
    </div>
  )
}

export default Header