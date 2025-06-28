function createPoem(event){
    event.preventDefault();

        new Typewriter('#poem', {
            strings: "Viva la vida",
            autoStart: true,
            cursor: null,
            delay: 40
        });
}

let submitted = document.querySelector("#poem-focus-submit");
submitted.addEventListener("click", createPoem);
