import { Box, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import MyPicture from "../assets/My_Picture.png";

const useStyles = makeStyles((theme) => ({
	boldText:{
		fontWeight:'700',
		color: theme.palette.secondary.main,
		display:'inline'
	},

}));

export const SkillSection = () =>{
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
					color:"background.main"
				}}
				>
				Skills 
			</Typography>
		</Box>

	)
}
 