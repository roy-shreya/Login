$(document).ready(function(){
    $('.registrationPanel').hide();
});

$("#register").click(function(){
    $('.reg').fadeOut();
    $('.loginC').fadeIn();
    $('.registrationPanel').fadeIn();    
    $('.loginPanel').fadeOut();
});

$("#login").click(function(){ 
    //$('.loginC').fadeOut(); 
    $('.reg').fadeIn();   
    $('.registrationPanel').fadeOut(); 
    $('.loginPanel').fadeIn();
});