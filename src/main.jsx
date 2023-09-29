import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
 

// Create a theme with custom font family
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", '-apple-system', '"Segoe UI"'].join(','),
  }
});

// Render the app with the custom theme and BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ThemeProvider to apply custom theme */}
    <ThemeProvider theme={theme}>
      {/* BrowserRouter for client-side routing */}
      <BrowserRouter>
        {/* App component as the main entry point */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
