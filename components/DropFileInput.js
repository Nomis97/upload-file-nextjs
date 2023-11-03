import React from 'react';

function DropFileInput(props) {
	const uploadIcon = '/img/upload-icon.png';
	return (
		<div className='relative p-12 border-2 border-stone-500 border-dashed flex justify-center flex-col items-center'>
			<div className='flex justify-center flex-col items-center'>
				<img className='m-auto mb-8' src={uploadIcon} alt='upload image' />
				<p className='mb-2'>Browse or Drag and Drop the .vf file here</p>
				<span className='text-sm text-gray-700'>
					Supported formates: voiceflow .vf
				</span>
			</div>
			<input
				className='absolute top-0 left-0 w-full h-full cursor-pointer opacity-0'
				type='file'
				name=''
				id=''
				onChange={props.fileGet}
			/>
		</div>
	);
}

export default DropFileInput;
