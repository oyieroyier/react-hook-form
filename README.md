# React Hook Form with Yup Validation and Next UI

This is a simple demonstration of form state management using React Hook Form and Yup for validation. The example showcases a login form with email and password fields.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/oyieroyier/react-hook-form.git
   ```

2. Install dependencies:

   ```bash
   cd react-hook-form-yup-nextui
   npm install
   ```

3. Start the development server and launch in the browser:

   ```bash
   npm run dev
   ```

## Technologies Used

- [React](https://react.dev/) - A JavaScript library for building user interfaces.
- [React Hook Form](https://react-hook-form.com/) - A library for managing forms in React.
- [Yup](https://github.com/jquense/yup) - A JavaScript schema builder for value parsing and validation.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework to build designs directly in your markup.
- [Next UI](https://nextui.org/) - A React UI library that provides a set of customizable components.

## Form Validation

Validation is handled using Yup schema validation. The validation schema is defined in `src/validation.js`. Any validation errors are displayed below the corresponding input field.

## Usage of React Hook Form

The example demonstrates the usage of React Hook Form for managing form state, handling form submissions, and integrating with Yup for validation.

## Project Structure

- `src/components/FormInputField.jsx`: A reusable input field component for the form.
- `src/validation.js`: Contains the Yup validation schema for the login form.
- `src/App.jsx`: The main component where the form is rendered and handled.

## How to Customize

Feel free to customize the form, styling, or include additional form fields based on your application requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Hook Form Documentation](https://react-hook-form.com/)
- [Yup Documentation](https://github.com/jquense/yup)
- [Next UI Documentation](https://nextui.org/)

Feel free to explore and build upon this example for your own projects!