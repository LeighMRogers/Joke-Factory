let jokeDiv = document.querySelector("#dadJoke");

const API = {
    getJokes: () => {
        return fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        }).then(response => response.json())
        .then(result => jokeDiv.innerHTML = createJokes(result));
    },
}

const createJokes = (newJoke) => {
    //create HTML structure for joke
    return `
    <div>
        <h2>${newJoke.joke}</h2>
    `
}
document.getElementById("button").addEventListener("click", event => {
    API.getJokes();
    })
