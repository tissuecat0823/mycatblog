$(document).ready(function(){
    $('.container').on('click', function(){$('.container').fadeOut();});
    $('.intro').on('click', function(){$('.intro').fadeOut(function(){alert('<P>태그가 fadeout되었습니다.')});});
    var state = true;
    $( ".rotate1>img" ).on( "click", function() {
        if ( state ) {
            $( ".rotate1>img" ).animate({
            backgroundColor: "#7CFC00",
            color: "",
            width: 100,
            height: 200
            }, 1000 );
        } else {
            $( ".rotate1>img" ).animate({
            backgroundColor: "transparent",//배경색 투명=transparent
            color: "",
            width: 80,
            height: 179
            }, 1000 );
        }
        state = !state;
        });
    });
 function fadeout(){
     $('.intro').on('click', function(){$('.intro').fadeOut(function(){alert('<P>태그가 fadeout되었습니다.')});});
}
//Copyright 2023. (kim yewon/2022011307) all rights reserved.
    