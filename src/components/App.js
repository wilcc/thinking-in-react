import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './App.css';
const App = () => {
  return (
    <div style={{ width: '100%',height:'10vh' }}>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div >
          <Body
            image={
              <img src="/images/vegetables.jpg" alt="..." className="center" />
            }
            heading="Heading xxxxxxx"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </div>
      <div style={{ width: '100%',height:'10vh' }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
