'use client';

import axios from 'axios';
import { useState } from 'react';
import validation from '../SignUpValidation';

export default function SignUp() {
	const iconGoogle = '/img/icon-google-auth.png';
	const iconFacebook = '/img/icon-facebook-auth.png';
	const iconTwitter = '/img/icon-twitter-auth.png';

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		passwordRepeat: '',
	});

	const [errors, setErrors] = useState({});

	const handleInput = (e) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validation(values));
	};

	return (
		<div className='flex flex-col gap-8 w-5/6 max-w-prose'>
			<h1 className='text-2xl font-medium'>Sign Up</h1>
			<form action='' onSubmit={handleSubmit} className='flex flex-col gap-8'>
				<input
					className='focus:outline-purple-700 p-4 rounded-md placeholder:text-black placeholder:pl-2'
					type='text'
					name='name'
					placeholder='Name'
					onChange={handleInput}
				></input>
				{errors.name && <span className='text-red-500'>{errors.name}</span>}
				<input
					className='focus:outline-purple-700 p-4 rounded-md placeholder:text-black placeholder:pl-2'
					type='text'
					name='email'
					placeholder='Email'
					onChange={handleInput}
				></input>
				{errors.email && <span className='text-red-500'>{errors.email}</span>}
				<input
					className='focus:outline-purple-700 p-4 rounded-md placeholder:text-black placeholder:pl-2'
					type='password'
					name='password'
					placeholder='Password'
					onChange={handleInput}
				></input>
				{errors.password && (
					<span className='text-red-500'>{errors.password}</span>
				)}
				<input
					className='focus:outline-purple-700 p-4 rounded-md placeholder:text-black placeholder:pl-2'
					type='password'
					name='passwordRepeat'
					placeholder='Repeat Password'
					onChange={handleInput}
				></input>
				{errors.passwordRepeat && (
					<span className='text-red-500'>{errors.passwordRepeat}</span>
				)}
				<button
					type='submit'
					className='bg-purple-700 hover:bg-purple-800 mb-3 p-4 text-white font-semibold rounded-md'
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}
