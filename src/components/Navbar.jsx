import { Contacts, Home, Person, Settings, Work } from "@mui/icons-material"
import { AppBar,  Box,  Tab,  Tabs,  Toolbar} from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	toolbar:{
		display:"flex",
		alignSelf:"center"
	},
	item:{
		[theme.breakpoints.up('md')]:{
			paddingLeft:"2.5vw",
			paddingRight:"2.5vw",
		},
	}
}));

export const Navbar = () =>{
	const classes = useStyles();
	const [value, setValue] = useState(1);
	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(value);
	};

	return (
		<AppBar>
			<Toolbar className={classes.toolbar}>
				<Tabs 
					value={value} 
					onChange={handleChange} 
					textColor="secondary" 
					indicatorColor="secondary"
					centered
				>
					<Tab icon={<Home fontSize="large" className={classes.item}/>}/>
					<Tab icon={<Person fontSize="large" className={classes.item}/>}/>
					<Tab icon={<Settings fontSize="large" className={classes.item}/>}/>
					<Tab icon={<Work fontSize="large" className={classes.item}/>}/>
					<Tab icon={<Contacts fontSize="large" className={classes.item}/>}/>
				</Tabs>
			</Toolbar>
		</AppBar>
	)
}