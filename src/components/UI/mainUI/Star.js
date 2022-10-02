import React from 'react';
import MySvg from '../MySvg';

const styles={
   display:'flex',
}

function Star() {
  return (
    <div>
        <div style={styles}>
            {MySvg.star}
            {MySvg.star}
            {MySvg.star}
            {MySvg.star}
            {MySvg.star}
        </div>
    </div>
  )
}

export default Star