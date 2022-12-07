const profiles = [];

// agony aunt
profiles.push({
    promptType: "Agony Aunt",
    caption: "Ask Agony Aunt a question",
    basePrompt: `respond to the following in the style of an Agony Aunt.
    input: `,
    model: "text-davinci-003",
    temperature: 0.7,
    max_tokens: 256
})


// Yoda
profiles.push({
    promptType: "Yoda",
    caption: "Ask Yoda a question",
    basePrompt: `respond to the following input like Yoda from Star Wars.
    input: `,
    model: "text-davinci-003",
    temperature: 0.7,
    max_tokens: 256
})


// Magic 8 Ball
profiles.push({
    promptType: "Magic 8 Ball",
    caption: "Ask the Magic 8 Ball a question",
    basePrompt: `respond to the following input in the style of a Magic 8 Ball.
    input: `,
    model: "text-davinci-003",
    temperature: 0.9,
    max_tokens: 10
})


// significant other
profiles.push({
    promptType: "AI Significant Other",
    caption: "have a chat with your AI Significant Other",
    basePrompt: `respond to the following input as a significant other. The response should be a little bit playful or flirty.
    input: `,
    model: "text-davinci-003",
    temperature: 0.7,
    max_tokens: 256
})


// significant other
profiles.push({
    promptType: "Right Wing Rant Post",
    caption: "Writes a right wing rant from your input",
    basePrompt: `"write a short blog post or social media message in the style of a right wing rant".
    input: `,
    model: "text-davinci-003",
    temperature: 0.9,
    max_tokens: 256
})

// sensationalist story
profiles.push({
    promptType: "Sensationalist Story Generator",
    caption: "enter a story idea",
    basePrompt: `create a sensationalist but light-hearted headline and story in the style of a tabloid from the following the following input.
    input: `,
    model: "text-davinci-003",
    temperature: 0.7,
    max_tokens: 256
})


// raw AI - no prompt shaping
profiles.push({
    promptType: "Raw AI",
    caption: "Vanilla AI response",
    basePrompt: ``,
    model: "text-davinci-003",
    temperature: 0.7,
    max_tokens: 256
})


export { profiles }
