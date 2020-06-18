import colors from '../config.scss';

const palette = darkMode => ({
  type: darkMode ? 'dark' : 'light',
  primary: {
    main: colors.primary,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.secondary,
    contrastText: colors.white,
  },
  text: {
    primary: darkMode ? colors['dark-text'] : colors['light-text'],
  },
  tonalOffset: 0.25,
  constrastThreshold: 3,
});

export default palette;
