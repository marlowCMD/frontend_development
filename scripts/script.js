// JavaScript Document

var buttonLinks = document.querySelector(".carouselbuttonleft")
var buttonRechts = document.querySelector(".carouselbuttonright")
var uitgelicht = document.querySelector("main > section:first-of-type > ul")
var amongUsBanner = document.querySelector("main > section:first-of-type > ul > li:nth-of-type(1)")
var gtaBanner = document.querySelector("main > section:first-of-type > ul > li:nth-of-type(2)")
var tabletopBanner = document.querySelector("main > section:first-of-type > ul > li:nth-of-type(3)")
var arrayUitgelicht = [amongUsBanner, gtaBanner, tabletopBanner]

var saleButtonLinks = document.querySelector("section:nth-of-type(2) > ul > .carouselbuttonleft")
var saleButtonRechts = document.querySelector("section:nth-of-type(2) > ul > .carouselbuttonright")
var sale = document.querySelector("main > section:nth-of-type(2) ul")
var transportFever = document.querySelector("main > section:nth-of-type(2) ul > li:nth-of-type(1)")
var oriWisp = document.querySelector("main > section:nth-of-type(2) ul > li:nth-of-type(2)")
var superHot = document.querySelector("main > section:nth-of-type(2) ul > li:nth-of-type(3)")
var arraySale = [transportFever, oriWisp, superHot]


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

var currentSale = 0
var lastSale = arraySale.length - 1

function saleRechts () {
    console.log(currentSale)
    if (currentSale < lastSale) {
        currentSale++
        sale.scroll ({
            left: arraySale[currentSale].offsetLeft,
            behavior: "smooth"
        });
    } else {
        currentSale = 0;
        sale.scroll ({
            left: arraySale[currentSale].offsetLeft,
            behavior: "smooth"
        });
    }
}

function saleLinks () {
    if (currentSale > 0) {
        currentSale--;
        sale.scroll ({
            left: arraySale[currentSale].offsetLeft,
            behavior: "smooth"
        });
    } else {
        console.log(currentSale)
        currenSale = lastSale;
        sale.scroll ({
            left: arraySale[currentSale].offsetLeft,
            behavior: "smooth"
        });
    }
}

buttonRechts.addEventListener("click", scrollRechts);
buttonLinks.addEventListener("click", scrollLinks);
saleButtonLinks.addEventListener("click", saleLinks);
saleButtonRechts.addEventListener("click", saleRechts);
