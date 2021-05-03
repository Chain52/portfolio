import React from 'react';
import { Tab, AppBar, Tabs } from '@material-ui/core';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import navigationData from '../../services/navigation';

const Header = () => {
  const value = 0;
  return (
    <AppBar position="static">
      <Tabs variant="fullWidth" value={value} aria-label="nav tabs" centered>
        {navigationData.map((section) => (
          <NavLink to={section.url}>
            <Tab component="span" label={section.title} />
          </NavLink>
        ))}
      </Tabs>
    </AppBar>
  );
};

export default compose(withRouter)(Header);
