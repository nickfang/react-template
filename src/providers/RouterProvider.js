import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const RouterProvider = props => {
  const { children } = props;

  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};


RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterProvider;
