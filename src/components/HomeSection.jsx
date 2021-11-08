import { Box, Grid, Stack, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import Logo from "../assets/Logo.svg";
import {ReactComponent as Arrows} from "../assets/arrows.svg";
import { CurveDivider } from "./CurveDivider";

const useStyles = makeStyles((theme) => ({
	boldText:{
		fontWeight:'700',
		color: theme.palette.primary.main,
		display:'inline'
	},
	logo:{
		width:'30vw',
		position:'relative',
		animation:'30s $levitate infinite',
		[theme.breakpoints.down('sm')]:{
			width:'70vw'
		}
	},
	'@keyframes levitate': {
		from: {opacity: 1, transform:'translate(0%,0%)'},
		"25%": {opacity:0.5, transform:'translate(10%,10%)'},
		"50%": {opacity:0.7, transform:'translate(10%,-20%)'},
		"75%": {opacity:0.9, transform:'translate(-20%,-20%)'},
		to: {opacity: 1, transform:'translate(0%,0%)'}
	},
	itemMiddle:{
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		[theme.breakpoints.down('md')]:{
			alignItems:'flex-start',
		}
	},
	itemText:{
		order:'1',
		[theme.breakpoints.down('sm')]:{
			order:'2'
		},
	},
	itemImage:{
		order:'2',
		[theme.breakpoints.down('sm')]:{
			order:'1'
		},
	},
	arrows:{
		position:'relative',
		animation: '3s $upDown infinite'
	},
	'@keyframes upDown': {
		from: {opacity: 0.5, transform:'translateY(-25%)'},
		"50%": {opacity:1, transform:'translateY(10%)'},
		to: {opacity: 0.5, transform:'translateY(-25%)'}
	},
	

}));

export const HomeSection = () =>{
	const classes = useStyles();
	return(
		<Box>
			<Box
				sx={{
					height:{md:"83vh",sm:"50vh"},
					backgroundColor:"background.main",
					padding:2,
				}}
				className={classes.itemMiddle}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} className={`${classes.itemMiddle} ${classes.itemText}`}>
						<Box>
							<Typography
								variant="h4"
								gutterBottom={true}
								
								>
								Hi My name is <Box className={classes.boldText}>Novel Bafagih</Box>
							</Typography>
							<Typography
								variant="h4"
								gutterBottom={true}>
								I’m a <Box className={classes.boldText}>student</Box> in University of <Box className={classes.boldText}>Brawijaya </Box>and i’m a <Box className={classes.boldText}>Fullstack web developer </Box>enthusiast
							</Typography>
							<Typography
								variant="h4"
								gutterBottom={true}>
								Welcome to my <Box className={classes.boldText}>website</Box>
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={6} className={`${classes.itemMiddle} ${classes.itemImage}`}>
						<img className={classes.logo} src={Logo}/>
					</Grid>
				</Grid>
			</Box>
			<Stack
				sx={{
					backgroundColor:"background.main",
					alignItems:"center"
					
				}}
			>
				<Typography
					variant="h6"
					align="center"
					sx={{
						color:"#1DE9B6",
						fontWeight:"700"
					}}
					className={classes.arrows}
					>
					Scroll down
				</Typography>
				<Arrows 
					style={{width:'80px'}}
					className={classes.arrows}
				/>
			</Stack>
		</Box>

	)
}
