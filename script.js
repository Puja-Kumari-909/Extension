fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => data.json())
    .then(memeData => {
        console.log(memeData)
        
        const memeImg = document.getElementById('img_load')

        memeImg.src = memeData.message
    })
    .catch(err=>console.log(err))