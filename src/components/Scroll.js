import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{
      overflowY: 'scroll',
      border: '5px solid black',
      minHeight: '800px',
      padding: '10px 0',
      margin: '0 10px 10px'
    }}>
      {props.children}
    </div>
  );
}

export default Scroll;
