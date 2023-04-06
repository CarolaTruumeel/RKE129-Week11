const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.webp", "pic2.jpg", "pic3.webp", "pic4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    console.log(image);

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/pic" + [randomIndex+1] + ".jpg";
   }