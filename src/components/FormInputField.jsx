/* eslint-disable react/prop-types */
import { Input } from '@nextui-org/react';

const FormInputField = ({ ...props }) => {
	return (
		<div className="flex w-full flex-wrap md:flex-nowrap gap-4">
			<Input {...props} />
		</div>
	);
};

export default FormInputField;
