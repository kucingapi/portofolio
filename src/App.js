import { createTheme, ThemeProvider } from '@mui/material';
import { green, teal } from '@mui/material/colors';
import { Navbar } from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: green['A400'],
    },
    secondary: {
      main: teal['800'],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
