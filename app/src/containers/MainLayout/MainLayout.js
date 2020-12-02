/*
 ** The MainLayout will contain the components used on all pages
 ** such as the header, footer and background.
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import GlobalStyle from '../../global-styles';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Colin Hain | JavaScript Developer</title>
        <meta
          name="description"
          content="Colin Hain, a full-stack developer specializing in React and Node.js."
        />
      </Helmet>
      <Header />
      {children}
      <GlobalStyle />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default compose(withRouter)(MainLayout);
