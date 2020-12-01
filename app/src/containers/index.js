/*
 ** The IndexLayout will contain the components used on all pages
 ** such as the header, footer and background.
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import GlobalStyle from '../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const IndexLayout = (props) => {
  const { children } = props;

  return (
    <AppWrapper>
      <>
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
    </AppWrapper>
  );
};

IndexLayout.propTypes = {
  children: PropTypes.element,
};

export default compose(withRouter)(IndexLayout);
