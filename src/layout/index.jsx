import React from 'react';
import Nav from './header/navBar';
import Content from './content/content';

function MainLayout() {
  return (
         <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <Nav />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;