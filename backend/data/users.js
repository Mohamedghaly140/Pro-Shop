import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		username: 'admin1',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 12),
		isAdmin: true,
	},
	{
		name: 'John Doe',
		username: 'johndoe99',
		email: 'john@example.com',
		password: bcrypt.hashSync('123456', 12),
	},
	{
		name: 'Jane Doe',
		username: 'jane2021',
		email: 'jane@example.com',
		password: bcrypt.hashSync('123456', 12),
	},
];

export default users;
