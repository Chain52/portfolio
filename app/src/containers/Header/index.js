import React from 'react';
import Pill from '../../components/Header/Pill';
// import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';

export default function Header() {
  return (
    <StyledHeader>
      <Pill>Home</Pill>
      <Pill>Blog</Pill>
      <Pill>Projects</Pill>
      <Pill>Resume</Pill>
      <Pill>Contact</Pill>
    </StyledHeader>
  );
}
