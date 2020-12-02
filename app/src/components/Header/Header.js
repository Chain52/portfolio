import React from 'react';
import { Typography, Tab, AppBar, Tabs } from '@material-ui/core';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import navigationData from '../../services/navigation';

const Header = () => {
  const value = 0;
  return (
    <AppBar position="static">
      <Typography>Colin Hain</Typography>
      <Tabs variant="fullWidth" value={value} aria-label="nav tabs example">
        {navigationData.map((section) => (
          <Link to={section.url}>
            <Tab component="div" label={section.title} />
          </Link>
        ))}
      </Tabs>
    </AppBar>
  );
};

export default compose(withRouter)(Header);
