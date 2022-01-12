const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

//  Disabe/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: 'b782f351464e402abc612131fa1e040e',
        src: joke,
        hl: 'en-us',
        v: 'Rachel',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get Jokes from Joke API 
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist'   
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (jokeData.setup) {
            joke = `${jokeData.setup} ... ${jokeData.delivery}`;
        } else {
            joke = jokeData.joke;
        } 
        tellMe(joke);
        toggleButton();
    } catch (error) {
        console.log('whoops error occured in getJokes(). ', error);
      }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
