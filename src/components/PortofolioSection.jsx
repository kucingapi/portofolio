import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material"
import { Box } from "@mui/system"
import Carousel from "react-material-ui-carousel"
import naga_peduli from "../assets/naga_peduli.png";
import random_quote from "../assets/random_quote.png";
import udana_slice from "../assets/udana-slice.png";

export const PortofolioSection = () => {
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
					<Typography
						variant="h2"
						color="background.main"
						textAlign="center"
						fontWeight={500}
						gutterBottom={true}
					>
						My Portofolio
					</Typography>

			<Carousel
				animation='slide'
				cycleNavigation={false}
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
		</Box>
	)
}