import React from 'react';

import Navigation from './NavB';
import classes from './Header.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['header']}>
      <h1>Exam</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;