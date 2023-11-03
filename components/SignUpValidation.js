function validation(values) {
	let error = {};
	const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
	const password_pattern =
		/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

	if (values.name === '') {
		error.name = 'Name should not be empty';
	} else {
		error.name = '';
	}

	if (values.email === '') {
		error.email = 'Email should not be empty';
	} else if (!email_pattern.test(values.email)) {
		error.email = "Email Din't match";
	} else {
		error.email = '';
	}

	if (values.password === '') {
		error.password = 'Password should not be empty';
	} else if (!password_pattern.test(values.password)) {
		error.password = "Password Din't match";
	} else {
		error.password = '';
	}

	if (values.passwordRepeat === '') {
		error.passwordRepeat = 'This should not be empty';
	} else if (values.passwordRepeat !== values.password) {
		error.passwordRepeat = "Passwords Din't Math";
	} else {
		error.passwordRepeat = '';
	}

	return error;
}

export default validation;
