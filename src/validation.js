import * as Yup from 'yup';

export const getCharacterValidationError = (str) => {
	return `Your password must have at least 1 ${str} character`;
};

const passwordSchema = Yup.string()
	.required('Password is required')
	.matches(/[0-9]/, getCharacterValidationError('digit'))
	.matches(/[a-z]/, getCharacterValidationError('lowercase'))
	.matches(/[A-Z]/, getCharacterValidationError('uppercase'))
	.matches(/[!@#$%&*]/, getCharacterValidationError('special character'))
	.min(8, 'Password must have at least 8 characters');

const emailSchema = Yup.string()
	.required('Email is required')
	.email('Please enter a valid email address')
	.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format');

export const loginValidationSchema = Yup.object().shape({
	password: passwordSchema,
	email: emailSchema,
});
