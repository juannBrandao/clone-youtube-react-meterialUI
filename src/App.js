import React, { useState } from 'react';
import {ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import Home from './Home';
// import { dark } from '@material-ui/core/styles/createPalette';
function App() {
  // const usestyles = makeStyles({
  //   root:{
  //   }
  // })
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#065fd4',
      },
      background:{
        default: darkMode ? '#232323' : '#fff',
        dark:darkMode ?  '#181818'    :  '#f4f6f8' ,
        paper: darkMode ? '#232323'   :  '#fff',
      }
    },
  });

  // const classes = usestyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
      </ThemeProvider>

    </div>
  );
}

export default App;
