

$(document).ready(function(){
    

    $(window).scroll(function(){

    if( $(this).scrollTop() > 0){

        $('header').removeClass('header');

        $('header').addClass('header2');

    }else{

        $('header').removeClass('header2')

        $('header').addClass('header');
    }  
    })
    
})