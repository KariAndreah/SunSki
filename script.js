const restrictCheck = document.getElementsByTagName('a');
/**
 for(var i = 0, len = restrictCheck.length; i < len; i++) {
    restrictCheck[i].onclick = function () {
        if(restrictCheck[i].innerHTML.indexOf("Burton") !== -1 ){
            console.log('restricted')
        }
    }
}
**/
for (var i = 0, len = restrictCheck.length; i < len; i++) {
    if (restrictCheck[i].innerHTML.indexOf("Burton") !== -1) {
        restrictCheck[i].onclick = function () {  
            console.log('restricted');
        }
    }
}
