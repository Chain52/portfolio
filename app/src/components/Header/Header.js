import React from 'react';
import { Typography, Tab, AppBar, Tabs } from '@material-ui/core';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import navigationData from '../../services/navigation';

const Header = () => {
  const value = 0;
  return (
    <AppBar position="static">
      <Typography>Colin Hain</Typography>
      <Tabs variant="fullWidth" value={value} aria-label="nav tabs example">
        {navigationData.map((section) => (
          <Tab component="a" href={section.url} label={section.title}>
            {section.title}
          </Tab>
        ))}
      </Tabs>
    </AppBar>
  );
};

export default compose(withRouter)(Header);
