import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system"
import Carousel from "react-material-ui-carousel"
import naga_peduli from "../assets/naga_peduli.png";
import random_quote from "../assets/random_quote.png";
import {ReactComponent as TriangleBottom} from "../assets/trianglebottom.svg";
import {ReactComponent as TriangleTop} from "../assets/trianglebottom.svg";
import udana_slice from "../assets/udana-slice.png";

const useStyles = makeStyles((theme) => ({
	triangleBottom:{
		position:'absolute',
		left:0,
		transform: 'translateY(-50%) ',
		animation:'30s $levitateBottom infinite',
		width:'15rem'
	},
	'@keyframes levitateBottom': {
		from: {opacity: 1, transform:'translate(0%,-50%)'},
		"50%": {opacity:0.7, transform:'translate(0%,-70%)'},
		to: {opacity: 1, transform:'translate(0%,-50%)'}
	},
	'@keyframes levitateTop': {
		from: {opacity: 1, transform:'translate(0%,-50%) rotate(-180deg)'},
		"50%": {opacity:0.7, transform:'translate(0%,-30%) rotate(-180deg)'},
		to: {opacity: 1, transform:'translate(0%,-50%) rotate(-180deg)'}
	},
	triangleTop:{
		position:'absolute',
		right:0,
		transform: 'translateY(-50%) rotate(-180deg)',
		animation:'10s $levitateTop infinite',
		width:'15rem',
		zIndex:0
	},
}))

export const PortofolioSection = () => {
	const classes = useStyles();
	const CarouselItem = (props) =>(
		<Card sx={{backgroundColor:'primary.main'}}>
			<CardMedia
				component="img"
				height="560"
				image={props.image}
				alt="my portofolio"
			/>
			<CardContent>
				<Typography
					variant="h3"
					color="background.main"
					textAlign="center"
					fontWeight={500}
					gutterBottom={true}
				>
					{props.title}
				</Typography>
				<Typography
					variant="h5"
					color="background.main"
					fontWeight={500}
					gutterBottom={true}
				>
					{props.description}
				</Typography>
				<Button 
					variant="outlined" 
					color='background' 
					fullWidth 
					p={3}
					href={props.link}
					target="_blank"
				>
					<Typography
						variant="h6"
					>
						Deployment  
					</Typography>
				</Button>
			</CardContent>
		</Card>
	)

	return(
		<Box
			sx={{
				backgroundColor:'background.light'
			}}
			p={5}
		>
			<TriangleTop
				className={classes.triangleTop}
			/>
			<Typography
				variant="h2"
				color="primary.light"
				textAlign="center"
				fontWeight={700}
				gutterBottom={true}
				sx={{
					zIndex:2
				}}
			>
				My Portofolio
			</Typography>
			<Carousel
				animation='slide'
				autoPlay={true}
				indicators={false}
				cycleNavigation={false}
				interval={4000}
			>
				<CarouselItem
					title="Naga Peduli"
					image={naga_peduli}
					description="Naga Peduli is a website for crowdfunding to people in needs, the website was made when I was in compfest software engineer academy, I work in the front end with one other team mate. There is 3 type of user in this website admin, user, and fundraiser. In this project i learn a lot of working in a team because there are 3 other team mates. It use react js, redux, scss, and bootstrap"
					link="https://nagapeduli.netlify.app/"
				/>
				<CarouselItem
					title="Random Quotes Generator"
					image={random_quote}
					description="This is a random quotes generator with react js, it fetch data from an api and diplay it, this is a freecodecamp project that i make by myself, i use normal css and react js."
					link="https://kucingapi.github.io/random-quote-freecodecamp/"
				/>
				<CarouselItem
					title="Udana Slice"
					image={udana_slice}
					description="This is a slice of udana.id website, it use mui and reactjs"
					link="https://kucingapi.github.io/udana-slice"
				/>
			</Carousel>
			<TriangleBottom
				className={classes.triangleBottom}
			/>
		</Box>
	)
}