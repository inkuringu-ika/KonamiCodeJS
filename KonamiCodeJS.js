/*
Copyright (c) 2020 typeling1578

MIT License

function konami_code_action(){
//script
};
*/

console.log("KonamiCodeJS v1.0 by typeling1578");

if(typeof konami_code_action == "function"){


(function(){
var input_code = [];
var konami_code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
document.addEventListener("keyup",function(event){
input_cmd.push(event.keyCode);
if(input_code[input_code.length - 1] != konami_code[input_code.length - 1]){
input_code = [];
}else if(input_code.length == konami_code.length){
konami_code_action();
input_code = [];
};
});
}());


}else{
//konami_code_action function is not defined
throw "konami_code_action function is not defined.";
};