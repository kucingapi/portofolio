import { createTheme, ThemeProvider } from '@mui/material';
import { green, teal } from '@mui/material/colors';
import { HomeSection } from './components/HomeSection';
import { Navbar } from './components/Navbar';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial',
  },
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
      <HomeSection />
    </ThemeProvider>
  );
}

export default App;
