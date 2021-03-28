/**
 * Function 1
 */
const restrictCheck = document.getElementsByTagName('a');
const restrictErrorBurton = document.getElementsByClassName('errorBurton');
const restrictErrorK2 = document.getElementsByClassName('errorK2');
const restrictErrorNeverSummer = document.getElementsByClassName('errorNeverSummer');
var restrictedBrands = ["Burton", "Never Summer", "Patagonia", "The North Face", "Ride", "Thule", "Yeti"];


/**
 * This is somewhat of a brute force solution.
 */

for (var i = 0, len = restrictCheck.length; i < len; i++) {
    if (restrictCheck[i].innerHTML.indexOf("Burton") !== -1) {
        restrictCheck[i].onclick = function () {
            restrictErrorBurton[0].removeAttribute('hidden');
        }
    }
    if (restrictCheck[i].innerHTML.indexOf("Never Summer") !== -1) {
        restrictCheck[i].onclick = function () {
            restrictErrorNeverSummer[0].removeAttribute('hidden');
        }
    }
    if (restrictCheck[i].innerHTML.indexOf("Patagonia") !== -1) {
        restrictCheck[i].onclick = function () {
            restrictErrorPatagonia[0].removeAttribute('hidden');
        }
    }
    if (restrictCheck[i].innerHTML.indexOf("The North Face") !== -1) {
        restrictCheck[i].onclick = function () {
            restrictErrorTNF[0].removeAttribute('hidden');
        }
    }
    if (restrictCheck[i].innerHTML.indexOf("Ride") !== -1) {
        restrictCheck[i].onclick = function () {
            restrictErrorRide[0].removeAttribute('hidden');
        }
    }
    if (restrictCheck[i].innerHTML.indexOf("Thule") !== -1) {
        restrictCheck[i].onclick = function () {
            restrictErrorThule[0].removeAttribute('hidden');
        }
    }
    if (restrictCheck[i].innerHTML.indexOf("Yeti") !== -1) {
        restrictCheck[i].onclick = function () {
            restrictErrorYeti[0].removeAttribute('hidden');
        }
    }
}

/*
This is a more practical solution. Just struggling looping through the errors as well. 
As in instead of errorBurton, errorK2, I could just use a standard error class.

for (var j = 0, len = restrictedBrands.length; j < len; j++) {
    for (var i = 0, len = restrictCheck.length; i < len; i++) {
        if (restrictCheck[i].innerHTML.indexOf(restrictedBrands[j]) !== -1) {
            restrictCheck[i].onclick = function () {
                restrictError.removeAttribute('hidden');
                restrictError.innerHTML= 'Sorry, (restrictedBrand[j]) is restricted.'; 
            }
        }
    }
}
*/

/**
 * Function 2
 */

var obj = {
    "products": [
        {
            "name": "Obermeyer Women's Tuscany II Jacket",
            "price": {
                "price": 259
            }
        },
        {
            "name": "The North Face Men's Arrowood Triclimate Jacket",
            "price": {
                "price": 199,
                "salePrice": 119.93
            }
        },
        {
            "name": "Patagonia Boy's Down Sweater Jacket",
            "price": {
                "price": 119
            }
        }
    ]
}

var products = obj.products;

function checkSales() {
    for (var i = 0; i < products.length; i++) {
        if (products[i].price.salePrice != null) {
            console.log(products[i].name + ' ' + (100 - ((products[i].price.salePrice) / products[i].price.price) * 100).toFixed(0) + '% savings!')
        }
    }
}