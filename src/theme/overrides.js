import colors from '../config.scss';

const overrides = darkMode => ({
  MuiContainer: {
    root: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      minHeight: '100vh',
      margin: '0px',
      padding: '0px',
      textAlign: 'center',
      backgroundColor: darkMode ? colors['dark-base'] : colors['light-base'],
      // color: darkMode ? colors['dark-text'] : colors['light-text'],
    },
  },
  MuiPaper: {
    root: {
      margin: '0px',
      padding: '0px',
      borderRadius: '0px',
      color: darkMode ? colors['dark-text'] : colors['light-text'],
      backgroundColor: darkMode ? colors['dark-background'] : colors['light-background'],
    },
  },
  MuiAppBar: {
    colorPrimary: {
      color: darkMode ? colors['dark-text'] : colors['light-text'],
      backgroundColor: darkMode ? colors['dark-background'] : colors['light-background'],
    },
  },
  MuiButton: {
    label: {
      color: darkMode ? colors['dark-text'] : colors['light-text'],
    },
  },
});

export default overrides;
