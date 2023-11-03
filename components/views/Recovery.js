'use client';

import axios from 'axios';
import { useState } from 'react';

export default function Recovery() {
	const iconGoogle = '/img/icon-google-auth.png';
	const iconFacebook = '/img/icon-facebook-auth.png';
	const iconTwitter = '/img/icon-twitter-auth.png';

	return (
		<div className='flex flex-col gap-8 w-5/6 max-w-prose'>
			<h1 className='text-2xl font-medium'>Sign Up</h1>
			<form className='flex flex-col gap-8'>
				<h2 className='text-2xl font-medium'>Ingrese nueva contraseña</h2>
				<input
					className='focus:outline-purple-700 p-4 rounded-md placeholder:text-black placeholder:pl-2'
					type='password'
					placeholder='Password'
				></input>
				<input
					className='focus:outline-purple-700 p-4 rounded-md placeholder:text-black placeholder:pl-2'
					type='password'
					placeholder='Repeat Password'
				></input>
			</form>
		</div>
	);
}
