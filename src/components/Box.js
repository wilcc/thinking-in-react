import React from 'react'

const Box = (props)=>{
    return(
<div
      style={{
          width: '100px',
          height: '100px',
          backgroundColor: `${props.color}`,
          border: '1px solid black',
          marginBottom: '20px'
      }}
      
    ></div>
    )
}

export default Box