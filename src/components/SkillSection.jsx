import { Cloud, Code, Storage } from "@mui/icons-material";
import { Stack, Box, Card, CardContent, Grid, Typography, LinearProgress, Collapse } from "@mui/material"
import { makeStyles } from "@mui/styles";
import {ReactComponent as ReactJs} from "../assets/React_js.svg";
import {ReactComponent as Azure} from "../assets/azure.svg";
import {ReactComponent as Nodejs} from "../assets/nodejs-icon.svg";
import {ReactComponent as Mysql} from "../assets/mysql-icon.svg";
import {ReactComponent as Java} from "../assets/java-icon.svg";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

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

	const SkillCard = (props) => 
	{
		const [show, setShow] = useState(false)
		const [progress, setProgress] = useState(0)
		const handleChange = () => setShow(!show);
		useEffect(() => {
			if(show){
				setProgress(props.value)
			}
			else{
				setProgress(0);
			}
		}, [show])
		return (
			<Grid item xs={12} md={4}>
				<Card sx={{
					backgroundColor:"background.main",
					cursor:"pointer"	
				}}
					onClick={handleChange}
				>
					<CardContent>
							<Stack spacing={2}>
									{props.firstLogo}
								<Stack direction="row" spacing={2}>
									<Typography variant="h5" fontWeight="500" color="primary">
										{props.title}
									</Typography>
									{props.secondLogo}
								</Stack>
								<Collapse in={show}>
									<Typography variant="body1" fontWeight="500" color="primary">
										{props.description}
									</Typography>
									<LinearProgressWithLabel value={progress}/>
								</Collapse>
							</Stack>
					</CardContent>
				</Card>
			</Grid>
		)
	}

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
				<Grid container spacing={1} justifyContent="center" >
					<SkillCard 
						firstLogo={
							<Code
							color="background"
							sx={{backgroundColor:"primary.main",borderRadius:2,p:0.5}}
							/>
						}
						secondLogo={
							<ReactJs className={classes.logo}/>
						}
						title="React Js"
						description="Basic React js, Routing, Bootstrap, Material ui, Redux and Clean architecture"
						value={90}
					/>
					<SkillCard 
						firstLogo={
							<Cloud
								color="background"
								sx={{backgroundColor:"primary.main",borderRadius:2,p:0.5}}
							/>
						}
						secondLogo={
							<Azure className={classes.logo}/>
						}
						title="Cloud"
						description="Basic Docker and Basic Kubernetes. "
						value={20}
					/>
					<SkillCard 
						firstLogo={
							<Code
								color="background"
								sx={{backgroundColor:"primary.main",borderRadius:2,p:0.5}}
							/>
						}
						secondLogo={
							<Nodejs className={classes.logo}/>
						}
						title="Express Js"
						description="Basic Express js, RESTFUL API, Routing, mongodb database, and JWT autentication."
						value={60}
					/>
					<SkillCard 
						firstLogo={
							<Storage
								color="background"
								sx={{backgroundColor:"primary.main",borderRadius:2,p:0.5}}
							/>
						}
						secondLogo={
							<Mysql className={classes.logo}/>
						}
						title="Database"
						description="CRUD table, User defined function, and Trigger"
						value={80}
					/>
					<SkillCard 
						firstLogo={
							<Code
							color="background"
							sx={{backgroundColor:"primary.main",borderRadius:2,p:0.5}}
							/>
						}
						secondLogo={
							<Java className={classes.logo}/>
						}
						title="Java"
						description="Basic programming and Object Oriented Programming"
						value={85}
					/>
				</Grid>
			</Box>
		</Box>

	)
}
 