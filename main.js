document.querySelector('button').addEventListener('click', getInspo)

function getInspo(){

    fetch("https://api.quotable.io/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.content)
      //let random = drinks[Math.floor(Math.random() * data.drinks.length)]

      document.querySelector('h2').innerText = data.content
      document.querySelector('h3').innerText = data.author
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

