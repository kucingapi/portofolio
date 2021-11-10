import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"
import BoredNovel from "../assets/bored_novel.png";
import * as yup from 'yup';
import { useFormik } from "formik";
import emailjs from 'emailjs-com';
import { useRef } from "react";

const sendEmail = (data) => {
	const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;
	emailjs.send(serviceID, templateID, data, userID)
		.then((result) => {
			alert('email successfully send');
		})
		.catch((err) => {
			alert('email has an error try again later');
		}) 	
}
const validationSchema = yup.object({
	name: yup
	  .string('Enter your name')
	  .required('name is required'),
	email: yup
	  .string('Enter your email')
	  .email('Enter a valid email')
	  .required('Email is required'),
	subject: yup
	  .string('Enter your subject')
	  .required('Subject is required'),
	description: yup
	  .string('Enter your description')
	  .required('description is required'),
});

const FormGroup = () => {
	const form = useRef();
	const formik = useFormik({
		initialValues: {
			name:'',
			email:'',
			subject:'',
			description:'',
		},
		validationSchema: validationSchema,
		onSubmit: (values, {resetForm}) => {
			sendEmail(values);
			resetForm();
		},
	  });
	return(
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1 },
				py:3
			}}
			noValidate
			autoComplete="off"
			onSubmit={formik.handleSubmit}
			ref={form}
		>
			<Grid spacing={2} container>
				<Grid item xs={12} md={6}>
					<TextField
						id="name"
						label="Name"
						placeholder="Enter Your Full Name"
						multiline
						value={formik.values.name}
						onChange={formik.handleChange}
						error={formik.touched.name && Boolean(formik.errors.name)}
						helperText={formik.touched.name && formik.errors.name}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						id="email"
						label="Email"
						placeholder="Enter Your Email Address"
						multiline
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
				</Grid>
				<Grid item md={12}>
					<TextField
						id="subject"
						label="Subject"
						placeholder="Enter The Topic of The Subject"
						multiline
						fullWidth
						value={formik.values.subject}
						onChange={formik.handleChange}
						error={formik.touched.subject && Boolean(formik.errors.subject)}
						helperText={formik.touched.subject && formik.errors.subject}
					/>
				</Grid>
				<Grid item md={12}>
					<TextField
						id="description"
						label="Description"
						multiline
						rows={4}
						fullWidth
						value={formik.values.description}
						onChange={formik.handleChange}
						error={formik.touched.description && Boolean(formik.errors.description)}
						helperText={formik.touched.description && formik.errors.description}
					/>
				</Grid>
				<Grid 
					sx={{
						display:'flex',
						alignItems:'center',
						justifyContent:'center'
					}} 
					item 
					md={12}
				>
					<Button 
						color="primary" 
						variant="contained" 
						sx={{width:"40%"}}
						type="submit"
					>
						Submit
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export const ContactmeSection = () =>{
	console.log(process.env);
	return(
		<Box 
			sx={{
				background: 'rgba(0, 182, 134, 0.3)',
				backdropFilter: 'blur(59px)',
			}}
			p={10}
		>
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
