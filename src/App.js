import { createTheme, ThemeProvider } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { green, teal } from '@mui/material/colors';
import { HomeSection } from './components/HomeSection';
import { Navbar } from './components/Navbar';
import { Aboutmesection } from './components/AboutmeSection';
import { CurveDivider } from './components/CurveDivider';

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
    background: {
      main: '#DFFFEC',
    },
    // text: {
    //   secondary: '#6EFFE8',
    // },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <Navbar />
      <HomeSection />
      <CurveDivider />
      <Aboutmesection />
    </ThemeProvider>
  );
}

export default App;
