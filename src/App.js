import { createTheme, ThemeProvider } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { green, teal } from '@mui/material/colors';
import { HomeSection } from './components/HomeSection';
import { Navbar } from './components/Navbar';
import { AboutmeSection } from './components/AboutmeSection';
import { CurveDivider } from './components/CurveDivider';
import { SkillSection } from './components/SkillSection';
import { CurveDividerOpacity } from './components/CurveDividerOpacity';
import { TimelineSection } from './components/TimelineSection';
import { PortofolioSection } from './components/PortofolioSection';
import { ContactmeSection } from './components/ContactmeSection';

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
      light: '#57FFE4',
      main: '#DFFFEC',
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <Navbar />
      <HomeSection />
      <CurveDivider />
      <AboutmeSection />
      <SkillSection />
      <CurveDividerOpacity />
      <TimelineSection />
      <PortofolioSection />
      <ContactmeSection />
    </ThemeProvider>
  );
}

export default App;
