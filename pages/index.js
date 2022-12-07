import { useEffect, useRef, useState } from 'react';
import { profiles } from "../data/constants";

import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  const [userInput, setUserInput] = useState('');   //?

  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')
  const [basePromptPrefix, setBasePromptPrefix] = useState(null)  //? used in /api/generate
  // const [callPrompt, setCallPrompt] = useState('')  //?

  let currentProfile = profiles[0]
  const selectorDefault = currentProfile.promptType




  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    console.log("Calling OpenAI...")

    console.log("basePromptPrefix:", basePromptPrefix)
    console.log("userInput:", JSON.stringify({ userInput }))
    const combinedPrompt = (basePromptPrefix + userInput)
    console.log("combinedPrompt:",combinedPrompt)

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        prompt: combinedPrompt,
        model: currentProfile.model,
        temperature: currentProfile.temperature,
        max_tokens: currentProfile.max_tokens
      }),
    });
    
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }


  const onUserChangedText = (event) => {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  };


  const selectChange = (event) => {
    setPrompt(event.target.value)
  }


  const setPrompt = (selection) => {
    currentProfile = profiles.find(profile => profile.promptType == selection) // find rather than filter as returns found object instead of array of object(s)
    console.log(currentProfile)
    setTitle(selection)
    setCaption(currentProfile.caption)
    setBasePromptPrefix(currentProfile.basePrompt)
  }


  const renderPromptSelector = () => {
    return (
    <div className="propmtSelector">
        <select className='selectBox' defaultValue={selectorDefault} onChange={selectChange}>
          {profiles.map((profile) => (
            <option value={profile.promptType}>{profile.promptType}</option>
          ))}
        </select>
    </div>
    )
  }

  useEffect(() => {
    console.log('useEffect')
    setPrompt(selectorDefault);

    const el = document.getElementById('prompt-box');
    console.log("el",el);
   
  }, [])

  return (
    <div className="root">
      <Head>
        <title>Agony Auntie</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>{title}</h1>
          </div>
          <div className="header-subtitle">
            <h2>{caption}</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea
            className="prompt-box"
            placeholder="start typing here"
            value={userInput}
            onChange={onUserChangedText}
          />; 
        </div>

        <div className="prompt-buttons">
          {renderPromptSelector()}
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
          <div className="generate">
            {isGenerating ? <span className="loader"></span> : <p>ask</p>}
          </div>
          </a>
        </div>
      </div>


      {apiOutput && (
        <div className="output">
          <div className="output-header-container">
          </div>
          <div className="output-content">
            <p>{apiOutput}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
