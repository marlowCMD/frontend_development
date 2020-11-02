
var carouselLinksButton = document.querySelector(".carouselbutton2left");
var carouselRechtsButton = document.querySelector(".carouselbutton2right");
var thumbnail = document.querySelector("#screenshots > img");
var arrayThumbs = ['big1.jpg', 'big2.jpg', 'big3.jpg'];

var currentThumb = 0;
var lastThumb = arrayThumbs.length - 1;
thumbnail.src = 'images/' + arrayThumbs[currentThumb];

function nextThumb () {
    if (currentThumb < lastThumb) {
        console.log(currentThumb);
        currentThumb++;
    thumbnail.src = 'images/' + arrayThumbs[currentThumb];
    } else {
    currentThumb = 0;
    thumbnail.src = 'images/' + arrayThumbs[currentThumb];
    }
}

function prevThumb () {
    if (currentThumb > 0) {
        currentThumb--;
        thumbnail.src = 'images/' + arrayThumbs[currentThumb];
    } else {
        currentThumb = lastThumb;
    thumbnail.src = 'images/' + arrayThumbs[currentThumb];
    }
}

carouselRechtsButton.addEventListener("click", nextThumb);
carouselLinksButton.addEventListener("click", prevThumb);