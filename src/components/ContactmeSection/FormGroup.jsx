import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';

const sendEmail = (data) => {
	const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;
	emailjs.send(serviceID, templateID, data, userID)
		.then(() => {
			alert('email successfully send');
		})
		.catch(() => {
			alert('there has been error try again later');
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

export const FormGroup = () => {
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