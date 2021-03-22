const restrictCheck = document.getElementsByTagName('a');
const restrictError = document.getElementsByClassName('error');
var restrictedBrands = ["Burton", "Never Summer", "Patagonia", "The North Face", "Ride", "Thule", "Yeti"];

/**
 for(var i = 0, len = restrictCheck.length; i < len; i++) {
    restrictCheck[i].onclick = function () {
        if(restrictCheck[i].innerHTML.indexOf("Burton") !== -1 ){
            console.log('restricted')
        }
    }
}
**/
/*
for (var j = 0, len = restrictedBrands.length; j < len; j++) {
    for (var i = 0, len = restrictCheck.length; i < len; i++) {
        if (restrictCheck[i].innerHTML.indexOf(restrictedBrands[j]) !== -1) {
            restrictCheck[i].onclick = function () {
                restrictError.removeAttribute('hidden');
            }
        }
    }
}
*/


for (var i = 0, len = restrictCheck.length; i < len; i++) {
    if (restrictedBrands.includes(restrictCheck[i])) {
        restrictCheck[i].onclick = function () {
            restrictError.removeAttribute('hidden');
        }
    }
}

