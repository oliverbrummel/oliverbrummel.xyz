var app = angular.module('oliverApp', ['ngMaterial']);

$(document).ready(function(){

var blinkingBorder = setInterval(changeBorder, 500);

function changeBorder(){
  $('h1').toggleClass('borderNone');
}

$('tr').hover(function(){
    console.log('hover on');
    $(this).find('.firstCell').text('>');
    $(this).find('.lastCell').text('<');
  }, function(){
    console.log('hover off');
    $(this).find('.firstCell').text('');
    $(this).find('.lastCell').text('');
  }
);


})//doc ready
