import { createMuiTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';

// default theme values can be found here: https://material-ui.com/customization/default-theme/

const setTheme = darkMode => createMuiTheme({
  spacing: 8,
  palette: palette(darkMode),
  typography: typography(darkMode),
  overrides: overrides(darkMode),
});

export default setTheme;
