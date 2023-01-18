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
import { ContactmeSection } from './components/ContactmeSection';
import { Element, Events } from 'react-scroll/modules';

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
  Events.scrollEvent.register('begin', function (to, element) {
    console.log('begin', arguments);
  });
  return (
    <ThemeProvider theme={responsiveTheme}> 
      <Navbar />
      <Element name="home">
        <HomeSection />
      </Element>
      <CurveDivider />
      <Element name="aboutMe">
        <AboutmeSection />
      </Element>
      <Element name="skill">
        <SkillSection />
      </Element>
      <CurveDividerOpacity />
      <Element name="timeline">
        <TimelineSection />
      </Element>
      <Element name="contact">
        <ContactmeSection />
      </Element>
    </ThemeProvider>
  );
}

export default App;
