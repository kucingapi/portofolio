import { Box, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import MyPicture from "../assets/My_Picture.png";

const useStyles = makeStyles((theme) => ({
	boldText:{
		fontWeight:'700',
		color: theme.palette.secondary.main,
		display:'inline'
	},
	mypicture:{
		width:'30vw',
		[theme.breakpoints.down('sm')]:{
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

}));

export const AboutmeSection = () =>{
	const classes = useStyles();
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
					color:"text.secondary"
				}}
				>
				Me Myself and I 
			</Typography>
			<Box
				sx={{
					height:{md:"83vh",sm:"50vh"},
					backgroundColor:"primary.main",
					padding:2,
				}}
				className={classes.itemMiddle}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} className={`${classes.itemMiddle} ${classes.itemText}`}>
						<Box>
							<Typography
								variant="h4"
								fontWeight={500}
								sx={{
									color: "background.main"
								}}
								gutterBottom={true}>
									I’m a student that major in <Box className={classes.boldText}>Information Technnology.</Box> 
									I really like <Box className={classes.boldText}>backend</Box> and <Box className={classes.boldText}>cloud computing </Box>but my <Box className={classes.boldText}>frontend </Box>has <Box className={classes.boldText}>more experience</Box>.
									I really like programming and i’ve been learning <Box className={classes.boldText}>software engineer</Box>. 
									I can do a little bit of web design and project management but have little experience.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={6} className={`${classes.itemMiddle} ${classes.itemImage}`}>
						<img className={classes.mypicture} src={MyPicture} alt="my_photo"/>
					</Grid>
				</Grid>
			</Box>
		</Box>

	)
}
