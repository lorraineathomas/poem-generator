function createPoem(event){
    event.preventDefault();

        new Typewriter('#poem', {
            strings: `I doubt not God is good, well-meaning, kind,
            <br/>
            And did He stoop to quibble could tell why
            <br/>
            The little buried mole continues blind,   
            <br/>
            Why flesh that mirrors Him must some day die,
            <br/>
            Make plain the reason tortured Tantalus
            <br/>
            Is baited by the fickle fruit, declare   
            <br/>
            If merely brute caprice dooms Sisyphus
            <br/>
            To struggle up a never-ending stair.   
            <br/>
            Inscrutable His ways are, and immune   
            <br/>
            To catechism by a mind too strewn   
            <br/>
            With petty cares to slightly understand  
            <br/> 
            What awful brain compels His awful hand.  
            <br/> 
            Yet do I marvel at this curious thing:   
            <br/>
            To make a poet black, and bid him sing!
            <br/>
             - Countee Cullen`,
            autoStart: true,
            cursor: null,
            delay: 40
        });
}

let submitted = document.querySelector("#poem-focus-submit");
submitted.addEventListener("click", createPoem);
