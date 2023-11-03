'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from '../LoginValidation';

export default function Login() {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({});

	const handleInput = (e) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validation(values));
	};

	const iconGoogle = '/img/icon-google-auth.png';
	const iconFacebook = '/img/icon-facebook-auth.png';
	const iconTwitter = '/img/icon-twitter-auth.png';

	return (
		<div className='flex flex-col gap-8 w-5/6 max-w-prose'>
			<h1 className='text-2xl font-medium'>Login To Your Account</h1>
			<form
				action=''
				onSubmit={handleSubmit}
				className='flex flex-col gap-8 after:content-[" "] after:mx-auto after:inline-block after:w-2/3 after:h-px after:bg-black'
			>
				<input
					className='focus:outline-purple-700 p-4 rounded-md placeholder:text-black placeholder:pl-2'
					type='email'
					placeholder='Email'
					name='email'
					onChange={handleInput}
				/>
				{errors.email && <span className='text-red-500'>{errors.email}</span>}
				<input
					className='focus:outline-purple-700 p-4 rounded-md placeholder:text-black placeholder:pl-2'
					type='password'
					placeholder='Password'
					name='password'
					onChange={handleInput}
				/>
				{errors.password && (
					<span className='text-red-500'>{errors.password}</span>
				)}
				<a
					className='text-right text-purple-700 hover:text-purple-900'
					href='#'
				>
					Forget Password?
				</a>
				<button
					type='submit'
					className='bg-purple-700 hover:bg-purple-800 mb-3 p-4 text-white font-semibold rounded-md'
				>
					Sign In
				</button>
			</form>
			<h3 className='text-center'>Or sign in with</h3>
			<div className='flex justify-center gap-5 mb-9'>
				<a href='#'>
					<img src={iconGoogle} alt='Google icon' />
				</a>
				<a href='#'>
					<img src={iconFacebook} alt='Facebook icon' />
				</a>
				<a href='#'>
					<img src={iconTwitter} alt='Twitter icon' />
				</a>
			</div>
			<p className='text-center'>
				Don't have an account?{' '}
				<Link
					to='/signup'
					className='text-right text-purple-700 hover:text-purple-900'
				>
					Sign Up
				</Link>
			</p>
		</div>
	);
}
