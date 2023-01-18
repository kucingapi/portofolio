import { Contacts, Home, Person, Settings, Work } from "@mui/icons-material"
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { scroller } from "react-scroll/modules";

const useStyles = makeStyles((theme) => ({
	toolbar:{
		display:"flex",
		alignSelf:"center",
	},
}));

const scrollHandler = (index) => {
	const listOfSection = ['home', 'aboutMe', 'skill', 'timeline', 'contact'];
	scroller.scrollTo(listOfSection[index], {
		duration: 1500,
		delay: 100,
		smooth: true,
		
		offset: -100
	})
}

export const Navbar = () =>{
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
		scrollHandler(newValue);
		console.log(newValue);
	};

	return (
		<AppBar 
			position="fixed" 
			sx={{zIndex:'2'}}>
			<Toolbar className={classes.toolbar}>
					<Tabs 
						value={value} 
						onChange={handleChange} 
						textColor="secondary" 
						indicatorColor="secondary"
					>
						<Tab 
							sx={{minWidth:{sm:"0px",xs:"0px",md:"200px"}}} 
							icon={<Home fontSize="large" />}
						/>
						<Tab 
							sx={{minWidth:{sm:"0px",xs:"0px",md:"200px"}}} 
							icon={<Person fontSize="large" />}
						/>
						<Tab 
							sx={{minWidth:{sm:"0px",xs:"0px",md:"200px"}}} 
							icon={<Settings fontSize="large" />}
						/>
						<Tab 
							sx={{minWidth:{sm:"0px",xs:"0px",md:"200px"}}} 
							icon={<Work fontSize="large" />}
						/>
						<Tab 
							sx={{minWidth:{sm:"0px",xs:"0px",md:"200px"}}} 
							icon={<Contacts fontSize="large" />}
						/>
					</Tabs>
			</Toolbar>
		</AppBar>
	)
}