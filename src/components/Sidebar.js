import React from 'react';

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        width: '15%',
        height:'700px',
        display: 'inline',
        float: 'left',
      }}
    >
      <ul style={{listStyleType:'none'}}>
        Sidebar
        <li>jelly</li>
        <li>beans</li>
        <li>corns</li>
        <li>carrots</li>
      </ul>
    </div>
  );
};

export default Sidebar;
