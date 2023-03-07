/*object*/
 const imgs = {
 setBorder: function(border){
//     var imgs = document.querySelectorAll('.images img');
//         var i = 0;
//         while(i < imgs.length){
//             imgs[i].style.border=color;
//             i = i + 1;
//         }
    $('.images img').css('border', border);
     }//jQuery
 }
 const setSidenavList = {
    setColor: function(color){
        $('.side li>.vdbutton').css('color', color);
    },
    setBkColor: function(bkColor){
        $('.side li>.vdbutton').css('background-color', bkColor);
    },
    setBorder: function(border){
        $('.side li>.vdbutton').css('border', border);
    }
 }
 const setNavColor = {
    navBkColor: function(bkColor){
        var nav = document.querySelector('nav');
        nav.style.backgroundColor = bkColor;
    },
    navBorder: function(border){
        var nav = document.querySelector('nav');
        nav.style.borderBottom = border;
    }

 }
/*object*/
/*nightmode, object로 정리해야함. */
function nightMode(self){
    const isNightMode = document.querySelector('body').classList.toggle('night-mode');
    
    const body = document.querySelector('body'); 
    const h1 = document.querySelector('h1');
    const h1a = document.querySelector('h1>a');
    const gallertitle = document.querySelector('#gallertitle');
    const intro = document.querySelector('.intro');
    const globeimg = document.querySelector('.globe img');
    const container = document.querySelector('.container');
    const grid = document.querySelector('#grid');
    const video = document.querySelector('.video');
    const nav = document.querySelector('nav');
    const sidenav = document.querySelector('.side-nav');
    const article = document.querySelector('#article');
    const footer = document.querySelector('footer');
    if(self.value === 'night'){//<-여기서 굳이 document.querySelector('#night_day')를 쓰지 않아도 된다.// 리팩토링
        nav.style.backgroundColor='black';
        //nav.style.borderBottom='3px solid white';
        body.style.backgroundColor='black';
        body.style.color='white';
        h1a.style.color='white';
        h1.style.borderBottom='3px solid white';
        gallertitle.style.color='white';
        intro.style.color='white';
        globeimg.style.border='3px solid white';
        container.style.border='3px solid white';
        grid.style.borderBottom='3px solid white';
        grid.style.borderTop='3px solid white';
        sidenav.style.borderRight='3px solid white';
        video.style.border='3px solid white';
        article.style.color='white';
        footer.style.border='3px solid white';
        self.value='day' //value change, 중복되는 부분들 싸그리 객체화하기//
        imgs.setBorder('3px solid white');
        setSidenavList.setColor('white');
        setSidenavList.setBkColor('black');
        setSidenavList.setBorder('3px solid white');
        // var sidenavlist = document.querySelectorAll('.side li>.vdbutton');
        // var i = 0;
        // while(i < sidenavlist.length){
        //     sidenavlist[i].style.color='white';
        //     sidenavlist[i].style.backgroundColor='black';
        //     sidenavlist[i].style.border='3px solid white';
        //     i = i + 1;
        // }->object, jQuery로 변경;
    }
    else{
        nav.style.backgroundColor='black';
        //nav.style.borderBottom='none';
        body.style.backgroundColor='white';
        body.style.color='black';
        h1a.style.color='black';
        //document.querySelector('h1>a').style.color='black';
        h1a.borderBottom='3px solid black';
        h1.style.borderBottom='3px solid black'
        gallertitle.style.color='black';
        intro.style.color='black';
        globeimg.style.border='3px solid black';
        container.style.border='3px solid black';
        grid.style.borderBottom='3px solid black';
        grid.style.borderTop='3px solid black';
        video.style.border='3px solid black';
        sidenav.style.borderRight='3px solid black';
        article.style.color='black';
        footer.style.border='3px solid black';
        self.value='night'; //value change//
        imgs.setBorder('3px solid black');//객체설정한부분//

        setSidenavList.setColor('black');
        setSidenavList.setBkColor('white');
        setSidenavList.setBorder('3px solid black');
        // var sidenavlist = document.querySelectorAll('.side li>.vdbutton');
        // var i = 0;
        // while(i < sidenavlist.length){
        //     sidenavlist[i].style.color='black';
        //     sidenavlist[i].style.backgroundColor='white';
        //     sidenavlist[i].style.border='3px solid black';
        //     i = i + 1;
        }
    }



//Copyright 2023. (kim yewon/2022011307) all rights reserved.