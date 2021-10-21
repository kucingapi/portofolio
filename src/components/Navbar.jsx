import { Contacts, Home, Person, Settings, Work } from "@mui/icons-material"
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	toolbar:{
		display:"flex",
		alignSelf:"center"
	},
}));

export const Navbar = () =>{
	const classes = useStyles();
	const [value, setValue] = useState(1);
	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(value);
	};

	return (
		<AppBar position="static">
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