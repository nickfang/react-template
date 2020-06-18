import React from 'react';
import PropTypes from 'prop-types';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { default as MuiThemeProvider } from '@material-ui/styles/ThemeProvider';
import setTheme from '../theme/theme';

const ThemeProvider = props => {
  const { darkMode, children } = props;
  // let darkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // if (userDarkMode !== -1) {
  //   darkMode = userDarkMode;
  // }
  // const theme = setTheme(darkMode);
  const theme = setTheme(darkMode);
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  darkMode: true,
};

ThemeProvider.propTypes = {
  darkMode: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
