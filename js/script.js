$('document').ready(function(){
    // $('.popup_menu').hide();
    $('.burger').on('click',function(){
        $('.popup_menu').animate({
            'left':'0'
        },300);
    });
    $('.exit').on('click',function(){
        $('.popup_menu').animate({
            'left':'-25%'
        },300);
    });
    
    
    
});