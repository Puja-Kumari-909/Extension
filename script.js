 const tag = document.getElementById('tag');
 let fetchRes = fetch("https://v2.jokeapi.dev/joke/Programming,Pun,Spooky");
    fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
        
        tag.innerHTML = d.joke;
    })