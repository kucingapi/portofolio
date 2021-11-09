import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import BoredNovel from "../assets/bored_novel.png";

const useStyles = makeStyles((theme) => ({

}));

export const ContactmeSection = () =>{
	return(
		<Box 
			sx={{
				height:'100vh',
				background: 'rgba(0, 182, 134, 0.3)',
				backdropFilter: 'blur(59px)',
			}}
			p={10}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography 
						variant="h3" 
						color="background.main"
						fontWeight={700}
					>
						Contact Me
					</Typography>
					<Stack direction="row">
						<IconButton 
							color="background" 
							size="large"
							href="https://github.com/kucingapi"
							target="_blank"
						>
							<GitHub fontSize="inherit"/>
						</IconButton>
						<IconButton 
							color="background" 
							size="large"
							href="https://www.linkedin.com/in/novel-bafagih/"
							target="_blank"
						>
							<LinkedIn fontSize="inherit"/>
						</IconButton>
					</Stack>
					<Typography 
						variant="h4" 
						color="background.main"
						fontWeight={500}
					>
						Feel free to contact me, because i have too much free time. see  you in my email :)
					</Typography>
				</Grid>			  
			</Grid>

		</Box>
	)
}
