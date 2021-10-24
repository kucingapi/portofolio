import { Box, Grid, Typography } from "@mui/material"
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
// }));

export const HomeSection = () =>{
	return(
		<Box sx={{
			height:"90vh",
			backgroundColor:"primary.light",
			display:"flex",
			alignItems:{md:"center"},
			justifyContent:{md:"center"},
			padding:2,
		}}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
				<Typography variant="h4">Hello</Typography>	
				</Grid>
				<Grid item xs={12} md={6}>
					<h1>test</h1>
				</Grid>
			</Grid>
		</Box>
	)
}