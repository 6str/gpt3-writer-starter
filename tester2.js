

const model="text-davinci-003"
const prompt="this is a test"
const temperature = 0
// const max_tokens = 60,
//   top_p=1.0,
//   frequency_penalty=0.0,
//   presence_penalty=0.0



console.log(JSON.stringify({ 
        model, 
        prompt,
        temperature
    }))


    console.log(JSON.stringify({ "model":"test" }))
    
    console.log(JSON.stringify({ 
        model:prompt,
        prompt:prompt
     }))

     console.log(JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
        "temperature": 0,
        "max_tokens": 100,
        "top_p": 1,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0,
        "stop": ["\n"]
      }, null, 4))



      console.log(JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "this is a test\nA:",
        "temperature": 0,
        "max_tokens": 100,
        "top_p": 1,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0,
        "stop": ["\n"]
      }, null, 4))


      const prompt2 = JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "this is a test\nA:",
        "temperature": 0,
        "max_tokens": 100,
        "top_p": 1,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0,
        "stop": ["\n"]
      })

      console.log(prompt2)

      const prompt3 = JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "Say this is a test",
        "temperature": 0,
        "max_tokens": 7
    })
      console.log(prompt3)

      const anArray = [
        {a: 1, b:2},
        {a: 3, b: 4},
        {a: 5, b: 6},
        {a: 7, b: 8}
      ]

      console.log(anArray.find((obj => (obj.a == 3))))
