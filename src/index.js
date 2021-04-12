console.log('%c HI', 'color: firebrick')

let dogImg = document.querySelector("div#dog-image-container");
let dogUl = document.createElement('ul');


  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then((respPojo) => {
    // console.log(respPojo)
    respPojo.message.forEach(function(element) {
      let blankLi = document.createElement('li');
      let blankImg = document.createElement('img');

      blankImg.src = element;
      // console.log(blankImg.src);

      blankLi.append(blankImg);
      dogImg.append(blankLi)
    })
  })

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then((response) => {
    response.message.forEach(function(element){
      console.log(element);
    })
  });
