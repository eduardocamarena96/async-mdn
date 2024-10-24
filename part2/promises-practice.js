// using fetch to get a random movie quote from an api
fetch('https://quoteapi.pythonanywhere.com/random')
    .then(response => response.json())
    .then(data => console.log('regular .then version: ', data))
    .catch(error => console.log('error: ', error));

// doing the same thing as above but with async / await
async function getRandomMovieQuote() {
    try {
        const response = await fetch('https://quoteapi.pythonanywhere.com/random');
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('error: ', error);
    }
    
}

getRandomMovieQuote().then(data => console.log('async version: ', data));

// promise.all practice using an api that will serve info on dragonball characters

const firstCharacter = fetch('https://dragonball-api.com/api/characters/1');
const secondCharacter = fetch('https://dragonball-api.com/api/characters/2');
const thirdCharacter = fetch('https://dragonball-api.com/api/characters/3');

Promise.all([firstCharacter, secondCharacter, thirdCharacter])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(arrayData => {
        console.log('dragonball character data: ')
        for (const data of arrayData) {
            console.log(data.name);
        }
    })    