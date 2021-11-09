import { Cloud, Code } from "@mui/icons-material";
import { Stack, Box, Card, CardContent, Grid, Typography, LinearProgress } from "@mui/material"
import { makeStyles } from "@mui/styles";
import {ReactComponent as ReactJs} from "../assets/React_js.svg";
import {ReactComponent as Azure} from "../assets/azure.svg";
import {ReactComponent as Nodejs} from "../assets/nodejs-icon.svg";

function LinearProgressWithLabel(props) {
	return (
	  <Box sx={{ display: 'flex', alignItems: 'center' }}>
		<Box sx={{ width: '100%', mr: 1 }}>
		  <LinearProgress variant="determinate" {...props} />
		</Box>
		<Box sx={{ minWidth: 35 }}>
		  <Typography variant="body2" color="primary">{`${Math.round(
			props.value,
		  )}%`}</Typography>
		</Box>
	  </Box>
	);
  }
const useStyles = makeStyles((theme) => ({
	boldText:{
		fontWeight:'700',
		color: theme.palette.secondary.main,
		display:'inline'
	},
	logo:{
		width:"25px",
		fill: theme.palette.primary.main,
	}

}));

export const SkillSection = () =>{
	const classes = useStyles();

	const SkillCard = (props) => (
		<Grid item xs={12} md={4}>
			<Card sx={{backgroundColor:"background.main"}}>
				<CardContent>
					<Stack spacing={2}>
						<Stack direction="row" spacing={2}>
							{props.firstLogo}
							{props.secondLogo}
						</Stack>
						<Typography variant="h5" fontWeight="500" color="primary">
							{props.title}
						</Typography>
						<Typography variant="body1" fontWeight="500" color="primary">
							{props.description}
						</Typography>
						<LinearProgressWithLabel value={props.value}/>
					</Stack>
				</CardContent>
			</Card>
		</Grid>
	)

	return(
		<Box
			sx={{
				backgroundColor:"primary.main",
			}}
		>
			<Typography
				variant="h3"
				align="center"
				gutterBottom={true}
				fontWeight={900}
				sx={{
					color:"background.main"
				}}
				>
				Skills 
			</Typography>
			<Box mx={3}>
				<Grid container spacing={1} >
					<SkillCard 
						firstLogo={
							<Code
								color="background"
								sx={{backgroundColor:"primary.main",borderRadius:2}}
							/>
						}
						secondLogo={
							<ReactJs className={classes.logo}/>
						}
						title="React Js"
						description="Basic React js, Routing, Bootstrap, Material ui, Redux & Clean architecture"
						value={90}
					/>
					<SkillCard 
						firstLogo={
							<Cloud
								color="primary"
								
							/>
						}
						secondLogo={
							<Azure className={classes.logo}/>
						}
						title="Cloud"
						description="Basic Docker & Basic Kubernetes. "
						value={20}
					/>
					<SkillCard 
						firstLogo={
							<Code
								color="background"
								sx={{backgroundColor:"primary.main",borderRadius:2}}
							/>
						}
						secondLogo={
							<Nodejs className={classes.logo}/>
						}
						title="Express Js"
						description="Basic Exress js, Routing, mongodb database & JWT autentication."
						value={60}
					/>
				</Grid>
			</Box>
		</Box>

	)
}
 