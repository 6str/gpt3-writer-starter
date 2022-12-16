import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const basePromptPrefix = "";

const generateAction = async (req, res) => {
  // Run first prompt

  const baseCompletion = await openai.createCompletion({
    model: req.body.model,              // `${req.body.model}`, // origonal code like this but not needed
    prompt: req.body.prompt,            // `${req.body.prompt}`,
    temperature: req.body.temperature,  // and the ${} pattern does not work here for numbers
    max_tokens: req.body.max_tokens,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();
  res.status(200).json({ output: basePromptOutput });

// note: not using two prompts as it takes too long and free tier on Vercel only 10s for server processes
  //   // build Prompt #2.
  // const secondPrompt = 
  // `
  // Take the table of contents and title of the blog post below and generate a blog post written in thwe style of Paul Graham. Make it feel like a story. Don't just list the points. Go deep into each one. Explain why.

  // Title: ${req.body.userInput}

  // Table of Contents: ${basePromptOutput.text}

  // Blog Post:
  // `

  // // call the OpenAI API a second time with Prompt #2
  // const secondPromptCompletion = await openai.createCompletion({
  //   model: 'text-davinci-003',
  //   prompt: `${secondPrompt}`,
  //   // I set a higher temperature for this one. Up to you!
  //   temperature: 0.85,
	// 	// I also increase max_tokens.
  //   max_tokens: 1250,
  // });
  
  // // Get the output
  // const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  // res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;