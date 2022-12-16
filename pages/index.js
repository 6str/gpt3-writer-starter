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
  const [basePromptPrefix, setBasePromptPrefix] = useState(null)
  const [counter, setCounter] = useState(0)
  const [showCounter, setShowCounter] = useState(false)

  let currentProfile = profiles[0]
  const selectorDefault = currentProfile.title
  const timeout = 20
  const timeoutMsg = "timed out?"
  

  useEffect(() => {

    if(isGenerating && counter < timeout) {
      setTimeout(() => setCounter(counter + 1), 1000);
    } else if (isGenerating && counter != timeoutMsg) { 
      setIsGenerating(false)
      setCounter(timeoutMsg);
    } else if (!isGenerating && counter != timeoutMsg) { 
      setShowCounter(false)
    }

  }, [counter]);


  const callGenerateEndpoint = async () => {

    // if(!isGenerating) {
      setCounter(0) // initiates counting
      setShowCounter(true)
    // }

    // setIsGenerating(!isGenerating);
    // return

    setIsGenerating(true);
    console.log("Calling OpenAI...")

    console.log("userInput:", JSON.stringify({ userInput }))
    const combinedPrompt = (basePromptPrefix + userInput)

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
  
    setApiOutput(`${output.text.trim()}`);
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
    currentProfile = profiles.find(profile => profile.title == selection) // find rather than filter as returns found object instead of array of object(s)
    console.log(currentProfile.title)
    setTitle(selection)
    setCaption(currentProfile.caption)
    setBasePromptPrefix(currentProfile.basePrompt)
  }


  const renderPromptSelector = () => {
    return (
    <div className="propmtSelector">
        <select className='selectBox' defaultValue={selectorDefault} onChange={selectChange}>
          {profiles.map((profile, index) => (
            <option  style={{lineHeight: '20px'}} value={profile.title} key={index}>{profile.title}</option>
          ))}
        </select>
        <input id="counter" type="text" hidden={!showCounter} value={counter}></input>
    </div>
    )
  }


  useEffect(() => {
    setPrompt(selectorDefault);

  }, [])

  return (
    <div className="root">
      <Head>
        <title>GPT Genie</title>
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
            placeholder="type input here"
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
            {isGenerating ? <span className="loader"></span> : <p>go</p>}
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
