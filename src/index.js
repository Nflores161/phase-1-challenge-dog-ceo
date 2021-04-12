console.log('%c HI', 'color: firebrick')

let dogImg = document.querySelector("div#dog-image-container");
let dogImgUl = document.createElement('ul');
dogImg.appendChild(dogImgUl)
let DogBreeds = document.querySelector("#dog-breeds")
let dogBreedLi = document.querySelector('ul#dog-breeds')


  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then((respPojo) => {
    // console.log(respPojo)
    respPojo.message.forEach(function(element) {
      let blankLi = document.createElement('li');
      let blankImg = document.createElement('img');
      blankImg.src = element;
      blankLi.append(blankImg);
      dogImgUl.append(blankLi)
    })
  })

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then((response) => {
    for (key in response.message){
      console.log(key)
      let blankLi = document.createElement('li')
      blankLi.className = 'dog-list'
      blankLi.innerText = key
      DogBreeds.appendChild(blankLi)
    }
  });


dogBreedLi.addEventListener('click', (e)=> {
  e.target.style.color = 'red'
})
