import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// @desc    register User & Get Token
// @route   POST /api/users/login
// @access  Public
export const signup = asyncHandler(async (req, res, next) => {
	// const errors = validationResult(req);
	// if (!errors.isEmpty()) {
	// 	next(new HttpError('Invalid inputs passed, please check your data', 422));
	// 	// return res.status(400).json({ errors: errors.array() });
	// }

	const { userName, email, name, password } = req.body;

	let exsitingUser;
	exsitingUser = await User.findOne({ email });

	if (exsitingUser) {
		res.status(422);
		throw new Error('User already exist, please login instead');
	}

	let hashedPassword;
	try {
		hashedPassword = await bcrypt.hash(password, 12);
	} catch (err) {
		res.status(500);
		throw new Error('Could not create user, please try again later');
	}

	const createdUser = new User({
		name,
		email,
		userName,
		password: hashedPassword,
	});

	try {
		// await transporter.sendMail({
		// 	to: email,
		// 	from: 'airbnb.team.iti@gmail.com',
		// 	subject: 'Signed Up Successfuly',
		// 	html: `
		// 	<div
		// 		style="
		// 			box-shadow: 0px 3px 4px #444;
		// 			border-radius: 10px;
		// 			text-align: center;
		// 			padding: 25px;
		// 			border: 3px solid #ff5a5f;
		// 			width: 80%;
		// 			margin: 10px auto;
		// 		"
		// 	>
		// 		<h2
		// 			style="
		// 				color: #ff5a5f;
		// 				border-bottom: 2px solid #ff5a5f;
		// 				display: inline-block;
		// 			"
		// 		>
		// 			Airbnb Team
		// 		</h2>
		// 		<h4>Organization: ITI <br /> <a href="https://www.iti.gov.eg" target="_blank">Information technology institue</a></h4>
		// 		<p>Hello, ${email}</p>
		// 		<p>
		// 			Congratulations! <span style="text-transform: capitalize; font-weight: 600;">${firstName} ${lastName}</span>
		// 			Registration Succeeded! Your Email address has been registered with an
		// 			<strong>Airbnb</strong> account. Please log in by Email!
		// 		</p>
		// 	</div>
		// 	`,
		// });
		await createdUser.save();
	} catch (err) {
		res.status(500);
		throw new Error('Signing up failed, please try again later');
	}

	let token;
	try {
		token = jwt.sign(
			{
				userId: createdUser.id,
				email: createdUser.email,
				userName: createdUser.userName,
			},
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '30d' }
		);
	} catch (err) {
		res.status(500);
		throw new Error('Signing up failed, please try again later');
	}

	res.status(201).json({
		message: 'Signed up successfuly',
		token: token,
		name: createdUser.name,
		userId: createdUser.id,
		email: createdUser.email,
		isAdmin: createdUser.isAdmin,
		userName: createdUser.userName,
	});
});

// @desc    Auth User & Get Token
// @route   POST /api/users/login
// @access  Public
export const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	let exsitingUser;

	try {
		exsitingUser = await User.findOne({ email });
	} catch (err) {
		res.status(500);
		throw new Error('Logging in failed, please try again later');
	}

	if (!exsitingUser) {
		res.status(422);
		throw new Error('Invalid credentails, could not login', 422);
	}

	let isValidPassword;
	try {
		isValidPassword = await bcrypt.compare(password, exsitingUser.password);
	} catch (err) {
		res.status(422);
		throw new Error(
			'Could not log you in, please check your credentails and try again'
		);
	}

	if (!isValidPassword) {
		res.status(422);
		throw new Error('Invalid credentails, could not login');
	}

	let token;
	try {
		token = jwt.sign(
			{
				userId: exsitingUser.id,
				email: exsitingUser.email,
				userName: exsitingUser.userName,
			},
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '30d' }
		);
	} catch (err) {
		res.status(500);
		throw new Error('Logging in failed, please try again later');
	}

	res.status(200).json({
		message: 'Loggedin successfuly',
		token: token,
		name: exsitingUser.name,
		userId: exsitingUser.id,
		email: exsitingUser.email,
		isAdmin: exsitingUser.isAdmin,
		userName: exsitingUser.userName,
	});
});

// @desc    GET user profile
// @route   POST /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
	const userId = req.params.id;

	const user = await User.findById(req.userData.userId);

	if (user) {
		res.status(200).json({
			message: 'Find User Profile successfuly',
			name: user.name,
			userId: user.id,
			email: user.email,
			isAdmin: user.isAdmin,
			userName: user.userName,
		});
	} else {
		res.status(404);
		throw new Error('User Not Found');
	}
});