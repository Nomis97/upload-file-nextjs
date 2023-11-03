'use client';

import axios from 'axios';
import { useState } from 'react';
import DropFileInput from '../DropFileInput';
//import fs from 'fs-extra';
//import * as fs from 'fs/promises';
//const fs = require('fs');
//const fse = require('fs-extra');
export default function TranslatePage() {
	const [vfData, setVFData] = useState();
	const [fileName, setFileName] = useState('');
	const [fileSave, setFileSave] = useState(null);
	const [isUpload, setIsUpload] = useState(false);
	const [isTranslate, setIsTranslate] = useState(false);
	const [isTranslating, setIsTranslating] = useState(false);

	const translateText = async (text) => {
		try {
			const result = await axios.get(
				`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=en&q=${text}`
			);
			return result.data[0][0][0];
		} catch (error) {
			console.error('Translation error:', error);
			return null;
		}
	};

	const translateJSON = async (obj, key) => {
		if (typeof obj === 'string') {
			let translation = obj;
			if (obj.trim() != '') {
				if (key.includes('variables')) {
					translation = await translateText(obj);
					translation = translation.replace(' ', '_');
				} else if (
					key.includes('name') ||
					key.includes('variable') ||
					key.includes('title') ||
					key.includes('expression') ||
					key.includes('value') ||
					key.includes('text')
				)
					translation = await translateText(obj);
			}

			return translation;
		} else if (Array.isArray(obj)) {
			const translatedArray = await Promise.all(
				obj.map((item) => translateJSON(item, key))
			);
			return translatedArray;
		} else if (typeof obj === 'object') {
			if (obj == null) return obj;
			const translatedObj = {};
			for (let key in obj) {
				if (
					key == 'project' ||
					key == 'canvasTemplates' ||
					key == 'domains' ||
					key == 'platformData'
				)
					translatedObj[key] = obj[key];
				else translatedObj[key] = await translateJSON(obj[key], key);
			}
			return translatedObj;
		} else {
			return obj;
		}
	};

	const handleTranslate = async () => {
		setIsTranslating(true);
		const result = await translateJSON(vfData, 'root');
		setIsTranslating(false);
		setIsTranslate(true);
		setVFData(result);
	};

	const handleOpenVF = async (event) => {
		setIsUpload(false);
		setIsTranslate(false);
		if (event.target.files && event.target.files[0]) {
			const vfFile = event.target.files[0];
			setFileSave(vfFile);
			setFileName(vfFile.name);
			const fileReader = new FileReader();
			fileReader.onloadend = (e) => {
				const vf = JSON.parse(fileReader.result);
				setVFData(vf);
				setIsUpload(true);
			};
			fileReader.readAsText(vfFile);
		}
	};

	const downloadVF = () => {
		const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
			JSON.stringify(vfData)
		)}`;
		const link = document.createElement('a');
		link.href = jsonString;
		link.download = fileName; // specify the filename
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	const uploadFiles = () => {
		try{
		    if (fileSave==null) {
		      alert('No files')
		    }else{
		      console.log(fileSave)
		    }
		}catch(error){
			console.log(error)
		}
	}
  const saveFile = () => {
    if (fileSave==null) {
      alert('No files')
    }else{
      console.log(fileSave)
    }
  }
	return (
		<div className='flex flex-col gap-8 w-5/6 max-w-prose'>
			<h1 className='text-2xl text-center font-medium'>
				Upload Your Voiceflow .vf File
			</h1>
			<DropFileInput fileGet={handleOpenVF} />
			{/* <div>
				<div>
					<h2>Browse or Drag and Drop the .vf file here</h2>
					<p>Supported formates: voiceflow .vf</p>
				</div>
				{/* <div className='preview'></div> */}
			{/* <label for='file'>Browse or Drag and Drop the .vf file here</label>
				<input
					type='file'
					accept='.vf'
					id='file'
					name='file'
					onChange={handleOpenVF}
					className='text-black border-stone-600 border rounded-md p-12 w-full border-dashed'
				/> 
			</div> */}
			<div>
				<label style={{fontSize: '17px',fontWeight: 500,color: 'gray'}}>Uploading - .vf template</label>
				<div style={{border: 'solid 1px #cdcdcd', padding: '5px', borderRadius: '3px'}}>{fileName}</div>
			</div>
			<button onClick={uploadFiles} className='bg-purple-700 hover:bg-purple-800 mb-3 p-4 text-white font-semibold rounded-md'>
				Upload Files
			</button>
			<button
				onClick={handleTranslate}
				className='text-black border-black border-2 rounded-md p-4 bg-blue-300 disabled:opacity-50'
				disabled={!isUpload ? 'disabled' : ''}
			>
				{isTranslating ? 'Translating...' : 'Translate'}
			</button>
			<button
				onClick={downloadVF}
				className='text-black border-black border-2 rounded-md p-4 bg-red-300 disabled:opacity-50'
				disabled={!isTranslate ? 'disabled' : ''}
			>
				Download vf
			</button>
		</div>
	);
}
