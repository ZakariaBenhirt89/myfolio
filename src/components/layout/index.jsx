import React , { useState, useEffect, useRef } from 'react';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24 dark',
  outerWrapper: 'normal',
  svg: 'hidden fixed transform right-0 top-0 z-0 xl:block',
};

const Layout = ({ children }) => {
  
  return (
    <div className={classes.outerWrapper} >
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
