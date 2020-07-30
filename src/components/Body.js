import React from 'react';
import Box from './Box'
const Body = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        width: '85%',
        height:'700px',
        display: 'inline',
        float: 'right',
      }}
    >
      <div>
        <div style={{paddingBottom:'25px'}}>
          {props.image}
        </div>
        <div style={{paddingBottom:'25px'}}>
        <h1>
          {props.heading}
        </h1>
        </div>
        <div style={{paddingBottom:'25px'}}>
          {props.message}
        </div>
      </div>
      <div style={{display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
    }}>
        <Box color='green'/>
        <Box color='red'/>
        <Box color='lightblue'/>
      </div>
    </div>
  );
};

export default Body;
