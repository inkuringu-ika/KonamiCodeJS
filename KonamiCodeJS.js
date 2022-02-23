/*
Copyright (c) 2020 typeling1578

MIT License

konamiCodeJS(function () {
  console.log("KonamiCodeJS");
})
*/

'use strict';

function konamiCodeJS(callback){
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var inputCode = [];
    
    window.addEventListener('keydown', function(event){
        inputCode.push(event.keyCode);

        if(inputCode.length > konamiCode.length){
            inputCode.shift();
        }

        if(inputCode.toString() === konamiCode.toString()){
            callback();
            inputCode = [];
        }
    });
}
