function typePoem(response){
    console.log("Poem created");
    new Typewriter('#poem', {
            strings: response.data.answer,
            autoStart: true,
            cursor: null,
            delay: 40
        });
}

function createPoem(event){
    event.preventDefault();


    let inputWord = document.querySelector("#poem-focus-input");
    let apiKey = "73a673doafc73bccb4ff04ct60632486";
    let prompt = `Generate a poem about ${inputWord.value}`;
    let context = "The user will provide one word or more. The poem generated should be related to the word submitted. Please separate each sentence on separate lines. Include '- SheCodes AI' at the end.";
    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Writing poem...")

    axios.get(url).then(typePoem);
}

let submitted = document.querySelector("#poem-focus-submit");
submitted.addEventListener("click", createPoem);
