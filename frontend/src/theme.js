// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8, // Optional: sets a base spacing unit (default is 8)
  palette: {
    primary: {
      main: '#1976d2', // Example primary color
    },
    secondary: {
      main: '#dc004e', // Example secondary color
    },
    // Add other customizations as needed
  },
});

export default theme;
