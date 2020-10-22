// JavaScript Document

var buttonLinks = document.querySelector(".carouselbuttonleft")
var buttonRechts = document.querySelector(".carouselbuttonright")
var uitgelicht = document.querySelector("main > section:first-of-type > ul")
var amongUsBanner = document.querySelector("main > section:first-of-type > ul > li:nth-of-type(1)")
var gtaBanner = document.querySelector("main > section:first-of-type > ul > li:nth-of-type(2)")
var tabletopBanner = document.querySelector("main > section:first-of-type > ul > li:nth-of-type(3)")
var arrayUitgelicht = [amongUsBanner, gtaBanner, tabletopBanner]

var currentBanner = 0 
var lastBanner = arrayUitgelicht.length - 1

function scrollRechts () {
    console.log(currentBanner)
    if (currentBanner < lastBanner) {
        currentBanner++
        uitgelicht.scroll ({
            left: arrayUitgelicht[currentBanner].offsetLeft,
            behavior: "smooth"
        });
    } else {
        currentBanner = 0;
        uitgelicht.scroll ({
            left: arrayUitgelicht[currentBanner].offsetLeft,
            behavior: "smooth"
        });
    }
}

function scrollLinks () {
    console.log(currentBanner)
    if (currentBanner > 0) {
        currentBanner--;
        uitgelicht.scroll ({
            left: arrayUitgelicht[currentBanner].offsetLeft,
            behavior: "smooth"
        });
    } else {
        currentBanner = lastBanner;
        uitgelicht.scroll ({
            left: arrayUitgelicht[currentBanner].offsetLeft,
            behavior: "smooth"
        });
    }
}

buttonRechts.addEventListener("click", scrollRechts);
buttonLinks.addEventListener("click", scrollLinks);