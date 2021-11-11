import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import BoredNovel from "../../assets/bored_novel.png";
import {ReactComponent as CircleBottom} from "../../assets/CircleBottom.svg";
import {ReactComponent as CircleTop} from "../../assets/CircleTop.svg";
import { FormGroup } from "./FormGroup";

const useStyles = makeStyles((theme) => ({
	circleBottom:{
		position:'absolute',
		right:0,
		filter: 'blur(58px)',
		zIndex:-2,
		animation:'10s $levitateTop infinite',
		// top: 0,
		transform: 'translateY(50%) ',
		overflowY:'hidden'
	},
	'@keyframes levitateTop': {
		from: {opacity: 1, transform:'translate(0%,-50%) rotate(-180deg)'},
		"50%": {opacity:0.7, transform:'translate(0%,-30%) rotate(-180deg)'},
		to: {opacity: 1, transform:'translate(0%,-50%) rotate(-180deg)'}
	},
}))

export const ContactmeSection = () =>{
	const classes = useStyles();
	return(
		<Box 
			sx={{
				background: 'rgba(0, 182, 134, 0.3)',
				backdropFilter: 'blur(9px)'
			}}
			p={10}
		>
			<CircleBottom 
				className={classes.circleBottom}
			/>

			<Grid container >
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
						<IconButton 
							color="background" 
							size="large"
							href="mailto:novelbafagih09@gmail.com"
							target="_blank"
						>
							<Mail fontSize="inherit"/>
						</IconButton>
						<IconButton 
							color="background" 
							size="large"
							href="tel:+62895328079912"
							target="_blank"
						>
							<Phone fontSize="inherit"/>
						</IconButton>
					</Stack>
					<Typography 
						variant="h4" 
						color="background.main"
						fontWeight={500}
					>
						Feel free to contact me, because i have too much free time. see you in my email :)
					</Typography>
					<FormGroup/>
				</Grid>			  
				<Grid item xs={12} md={6}>
					<img 
						src={BoredNovel} 
						alt="bored person"
						style={{
							maxWidth:'80vw'
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
