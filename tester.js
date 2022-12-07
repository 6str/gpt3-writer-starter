import { prompts } from "./data/constants.js"


const selectBox = document.getElementById("selectBox")
// const dropDown = document.getElementsByName("dropdown")  // doesn't work even if name correct
const label = document.getElementById("label")



prompts.forEach((element) => {
    console.log(element.promptType, element.promptType)
    selectBox[selectBox.length] = new Option(element.promptType, element.promptType) // Option(element.value, element.title)
})


setPrompt()


function setPrompt(){
    console.log(selectBox.value)
    label.value = selectBox.value
}


let selectionChanged = document.getElementById("selectBox");
dropDown.addEventListener(
    "change",
    function () {
        setPrompt()
    },
    false
);