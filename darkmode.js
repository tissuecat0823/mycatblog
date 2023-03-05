/*object*/
var imgs = {
setBorder: function(color){
    var imgs = document.querySelectorAll('.images img');
        var i = 0;
        while(i < imgs.length){
            imgs[i].style.border=color;
            i = i + 1;
        }
    },
}
/*object*/
function nightmode(self){
    var body = document.querySelector('body');
    var h1 = document.querySelector('h1');
    var h1a = document.querySelector('h1>a');
    var gallertitle = document.querySelector('#gallertitle');
    var intro = document.querySelector('.intro');
    var globeimg = document.querySelector('.globe img');
    var container = document.querySelector('.container');
    var grid = document.querySelector('#grid');
    var video = document.querySelector('.video');
    var nav = document.querySelector('nav');
    var sidenav = document.querySelector('.side-nav');
    var  article = document.querySelector('#article');
    if(self.value === 'night'){//<-여기서 굳이 document.querySelector('#night_day')를 쓰지 않아도 된다.// 리팩토링
        nav.style.backgroundColor='black'; body.style.backgroundColor='black';
        nav.style.borderBottom='3px solid white'
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
        
        self.value='day' //value change, 중복되는 부분들 싸그리 객체화하기//
        imgs.setBorder('3px solid white');
        var sidenavlist = document.querySelectorAll('.side li>.vdbutton');
        var i = 0;
        while(i < sidenavlist.length){
            sidenavlist[i].style.color='white';
            sidenavlist[i].style.backgroundColor='black';
            sidenavlist[i].style.border='3px solid white';
            i = i + 1;
        }
    }
    else{
        nav.style.backgroundColor='black';
        nav.style.borderBottom='none';
        body.style.backgroundColor='white';
        body.style.color='black';
        document.querySelector('h1>a').style.color='black';
        h1a.borderBottom='3px solid black';
        h1.style.borderBottom='3px solid black'
        gallertitle.style.color='black';
        intro.style.color='black';
        globeimg.style.border='3px solid black';
        container.style.border='3px solid black';
        grid.style.borderBottom='3px solid black';
        grid.style.borderTop='3px solid black'
        video.style.border='3px solid black';
        sidenav.style.borderRight='3px solid black';
        article.style.color='black';
        self.value='night'; //value change//
        imgs.setBorder('3px solid black');//객체설정한부분//
        var sidenavlist = document.querySelectorAll('.side li>.vdbutton');
        var i = 0;
        while(i < sidenavlist.length){
            sidenavlist[i].style.color='black';
            sidenavlist[i].style.backgroundColor='white';
            sidenavlist[i].style.border='3px solid black';
            i = i + 1;
        }
    }
}

