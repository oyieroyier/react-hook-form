import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import FormInputField from './components/FormInputField';
import { Button } from '@nextui-org/react';
import { loginValidationSchema } from './validation';

export default function App() {
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginValidationSchema),
	});

	function onSubmit(data) {
		const { email, password } = data;
		alert(
			`Form data successfully validated.\n\nEmail: ${email} \nPassword: ${password}`
		);
		reset();
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="h-screen w-3/4 md:w-1/3 m-auto flex flex-col justify-center gap-4"
		>
			<p className="text-3xl md:text-6xl">Login Here</p>
			<Controller
				name="email"
				control={control}
				render={({ field }) => <FormInputField label={'Email'} {...field} />}
			/>
			{errors.email && (
				<p className="text-red-400 text-xs">{errors.email.message}</p>
			)}
			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<FormInputField label={'Password'} type="password" {...field} />
				)}
			/>
			{errors.password && (
				<p className="text-red-400 text-xs">{errors.password.message}</p>
			)}
			<Button type="submit" radius="md" variant="flat">
				Login
			</Button>
		</form>
	);
}
