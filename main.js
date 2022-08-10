function updateUI(TextForWord) {
    let wordHeading1 = document.querySelector("#RandomWord");
    wordHeading1.innerHTML = `Word ---> ${TextForWord.ActualRandomizedWord}`;
    let wordMeaning = document.querySelector("#RandomWordMeaning");
    wordMeaning.innerHTML = `Meaning ---> ${TextForWord.WordDefinition}`;
    let howToSay = document.querySelector("#Pronunciation");
    howToSay.innerHTML = `What it sounds like ---> ${TextForWord.SayIt}`;
}

function updateUI2(GivenNeko) {
    let NekoImagePlaceholder = document.querySelector("#NekoImg")
    NekoImagePlaceholder.src = GivenNeko.NekoImage
}

function loadTextForWord() {
    //load API url as a const
    const url = `https://random-words-api.vercel.app/word`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            console.log(jsonData);
            let TextForWord = {
                ActualRandomizedWord: jsonData[0].word,
                WordDefinition: jsonData[0].definition,
                SayIt: jsonData[0].pronunciation
            };

            console.log(TextForWord);

            //call update UI function
            updateUI(TextForWord);
        });
}

function RandomNeko() {
    //load API url as a const
    const url = `https://nekos.best/api/v2/neko`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            console.log(jsonData);
            let GivenNeko = {
                NekoImage: jsonData.results[0].url
            };

            console.log(GivenNeko);

            //call update UI function
            updateUI2(GivenNeko);
        });
}

let randomBtn = document.querySelector("#thyButton");
randomBtn.onclick = function (event) {
    //prevent default form behavior
    event.preventDefault();

    loadTextForWord()
}

let randomBtn2 = document.querySelector("#thyButton2");
randomBtn2.onclick = function (event) {
    //prevent default form behavior
    event.preventDefault();

    RandomNeko()
}