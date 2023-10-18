/**
 * Some APIs we can use for free!
 *
 * GITHUB: Get github user info
 * Documentation: https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28
 *
 * AGEFY: Get an estimate of someone's age based on their name
 * Documentation: https://agify.io/
 *
 * POKEMON: Get Pokemon's stats
 * Documentation: https://pokeapi.co/
 *
 * SPOTIFY: Get user's followed artists
 * Documentation: https://developer.spotify.com/documentation/web-api/reference/get-followed
 *
 * DOGS: Get a random image of a dog
 * Documentation: https://dog.ceo/dog-api/
 *
 * TENOR: Get a gif based on a search parameter
 * Documentation: https://tenor.com/gifapi/documentation#quickstart-search
 */

const getAge = (name) => {
  const url = 'https://api.agify.io?name=' + name
  fetch(url, {
    method: 'GET',
  }).then((response) => response.json().then((data) => console.log(data)))
}

const asyncGetAge = async (name) => {
  const url = 'https://api.agify.io?name=' + name
  const response = await fetch(url, {
    method: 'GET',
  })
  const data = await response.json()
  console.log(data)
}

getAge('Brian')
asyncGetAge('Sahil')
