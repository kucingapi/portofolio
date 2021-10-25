import { Box, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import Logo from "../assets/Logo.svg";

const useStyles = makeStyles((theme) => ({
	boldText:{
		fontWeight:'900',
		color: theme.palette.primary.main,
		display:'inline'
	},
	logo:{
		width:'30vw',
		[theme.breakpoints.down('md')]:{
			width:'70vw'
		}
	},
	itemMiddle:{
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		[theme.breakpoints.down('md')]:{

			alignItems:'flex-start',
		}

	}
}));

export const HomeSection = () =>{
	const classes = useStyles();
	return(
		<Box 
			sx={{
				height:"83vh",
				backgroundColor:"background.main",
				padding:2,
			}}
			className={classes.itemMiddle}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} className={classes.itemMiddle}>
					<Box>
						<Typography 
							variant="h4" 
							align="center" 
							gutterBottom={true}>
							Hi My name is <Box className={classes.boldText}>Novel Bafagih</Box>
						</Typography>	
						<Typography 
							variant="h4" 
							align="center" 
							gutterBottom={true}>
							I’m a <Box className={classes.boldText}>student</Box> in University of <Box className={classes.boldText}>Brawijaya </Box>and i’m a <Box className={classes.boldText}>Fullstack web developer </Box>enthusiast
						</Typography>	
						<Typography 
							variant="h4" 
							align="center" 
							gutterBottom={true}>
							Welcome to my <Box className={classes.boldText}>website</Box>
						</Typography>	
					</Box>
				</Grid>
				<Grid item xs={12} md={6} className={classes.itemMiddle}>
					<img className={classes.logo}src={Logo}/>
				</Grid>
			</Grid>
		</Box>
	)
}