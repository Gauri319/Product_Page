import React from 'react';
import ContainerImage from '../../images/none.png';
import './ContainerFluid.css';


function ContainerFluid() {

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='column1'>
                <div className='subColumn' >
                    <h5>SUMMER 2020</h5>
                    <h1>NEW COLLECTIONS</h1>
                   <div className='h4Container'><h4>We know how large objects will act, but things on a small scale</h4></div> 
                    <button><h3>SHOP NOW</h3></button>
                </div>
            </div>
            <div className='column2'>
              <img src={ContainerImage}></img>
            </div>

        </div>
    </div>
  )
}

export default ContainerFluid