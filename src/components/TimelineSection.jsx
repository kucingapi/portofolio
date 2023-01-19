import {
  AddModerator,
  Code,
  Groups,
} from '@mui/icons-material';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as Arrows } from '../assets/arrows.svg';

const useStyles = makeStyles((theme) => ({
  blackText: {
    fontWeight: '700 !important',
    display: 'inline',
    fontFamily: 'Poppins',
    color: 'black',
  },
  arrows: {
    position: 'absolute',
    animation: '3s $upDown infinite',
  },
  '@keyframes upDown': {
    from: { opacity: 0.5, transform: 'translateY(-25%)' },
    '50%': { opacity: 1, transform: 'translateY(10%)' },
    to: { opacity: 0.5, transform: 'translateY(-25%)' },
  },
}));

export const TimelineSection = () => {
  const classes = useStyles();
  const TimelineElement = (props) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'hsl(151, 100%, 45%)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  hsl(151, 100%, 45%)' }}
      date={props.date}
      dateClassName={classes.blackText}
      iconStyle={{ background: 'hsl(151, 100%, 45%)', color: '#fff' }}
      icon={props.icon}
    >
      <Typography variant="h3" className="vertical-timeline-element-title">
        {props.title}
      </Typography>
      <Typography variant="h5" className="vertical-timeline-element-title">
        {props.location}
      </Typography>
      <Typography variant="body1" className="vertical-timeline-element-title">
        {props.description}
      </Typography>

      {props.link ? (
        <Button
          href={props.link}
          target="_blank"
          variant="outlined"
          color="background"
        >
          Click Me
        </Button>
      ) : (
        ''
      )}
    </VerticalTimelineElement>
  );
  return (
    <Box
      sx={{
        backgroundColor: 'background.light',
      }}
    >
      <Arrows className={classes.arrows} style={{ right: 0 }} />
      <Arrows className={classes.arrows} style={{ position: 'absolute' }} />
      <VerticalTimeline>
        <TimelineElement
          title="Feel It"
          location="University Brawijaya"
          description=" Feel It is an orientation for new students at the University of Brawijaya Information Technology. What I've done: Lead a supporting team consisting of 8 divisions with 60 people, Creating an Offline event for the first time in 2 year"
          icon={<Groups />}
          date="Apr 2022 - Nov 2022"
        />
        <TimelineElement
          title="IFEST"
          location="Unpad - Online"
          description="This project is form a competition that held by Unpad. Rentall is a mobile app that focus on renting car and
					motorcycle. I've won and got 3rd place in this competition. This mobile app use kotlin jetpack compose, and use
					firebase as backend."
          icon={<Groups />}
          date="Aug 2022 - Nov 2022"
          link="https://github.com/novelbafagih/RentAll"
        />
        <TimelineElement
          title="Udana.id"
          location="Jakarta"
          description="Udana.id is a start-up that aims for Indonesian SME & Startup company growth to the next level. It is a
					crowdfunding platform for small businesses. I was a part of the front-end developer team."
          icon={<Groups />}
          date="Apr 2022 - Nov 2022"
          link="https://udana.id/"
        />
        <TimelineElement
          title="Naga Peduli"
          location="COMPFEST UI (Work From Home)"
          description="Compfets is a festival for computer science from universitas indonesia, i'm a part of software engineer academy in compfest, i learn a lot of software engineer espacially front end, the final project is making crowd funding app like kitabisa click the button bellow to see the project."
          icon={<AddModerator />}
          date="8 Aug 2021 - 22 Aug 2021"
          link="https://nagapeduli.netlify.app/"
        />
        <TimelineElement
          title="Basic Computing Community"
          location="University Brawijaya (Work From Home)"
          description=" I'm a computational intelligence department in bcc with the sub department of competitive programming. I'm also deputy heade of the talent development division."
          icon={<Code />}
          date="Mar 2021 - Present"
        />
      </VerticalTimeline>
    </Box>
  );
};
