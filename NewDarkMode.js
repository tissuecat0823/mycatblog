/*미작동하는 미완성코드...ㅜ */

//객체생성
// const setSidenavList = {
//     setColor: function(color){
//         $('.side li>.vdbutton').css('color', color);
//     },
//     setBkColor: function(bkColor){
//         $('.side li>.vdbutton').css('background-color', bkColor);
//     },
//     setBorder: function(border){
//         $('.side li>.vdbutton').css('border', border);
//     }
//  };
//  const setNavColor = {
//     navBkColor: function(bkColor){
//         var nav = document.querySelector('nav');
//         nav.style.backgroundColor = bkColor;
//     },
//     navBorder: function(border){
//         var nav = document.querySelector('nav');
//         nav.style.borderBottom = border;
//     }
//  };
const nightMode = {
    body: document.querySelector('body'),
    h1: document.querySelector('h1'),
    h1a: document.querySelector('h1>a'),
    gallertitle: document.querySelector('#gallertitle'),
    intro: document.querySelector('.intro'),
    globeimg: document.querySelector('.globe img'),
    container: document.querySelector('.container'),
    grid: document.querySelector('#grid'),
    video: document.querySelector('.video'),
    nav: document.querySelector('nav'),
    sidenav: document.querySelector('.side-nav'),
    article: document.querySelector('#article'),
    footer: document.querySelector('footer'),
    toggle: function(){
        const isNightMode = this.body.classList.toggle('night-mode'); //toggle-값추가
        const bgColor = isNightMode ? 'black' : 'white'; //조건부 삼항연산자, isnightmode에 night-mode, 즉 true면 black
        const textColor = isNightMode ? 'white' : 'black';
        const borderColor = isNightMode ? 'white' : 'black';
        const sidenavColor = isNightMode ? 'white' : 'black';
        const sidenavBgColor = isNightMode ? 'black' : 'white';

        /* 
        "${}"는 JavaScript 템플릿 리터럴 문법, 이를 사용하면 문자열 내에서 변수나 표현식의 값을 쉽게 삽입가능
        . ${} 안에 들어있는 값은 해당 변수 또는 표현식의 값을 문자열 내에 출력.

        ex) ${textColor}는 bgColor 변수에 할당된 값에 따라 'white' 또는 'black' 중 하나의 값을 문자열에 삽입.
        */
        this.nav.style.backgroundColor = bgColor;
        this.h1a.style.color = textColor;
        this.h1a.style.borderBottom = '3px solid ${textColor}'; //템플릿리터럴? 어렵다..좀더공부
        this.gallertitle.style.color = textColor;
        this.intro.style.color = textColor;
        this.globeimg.style.border = '3px solid ${textColor}';
        this.container.style.border = '3px solid ${textColor}';
        this.grid.style.borderBottom = '3px solid ${textColor}';
        this.grid.style.borderTop = '3px solid ${textColor}';
        this.video.style.border = '3px solid ${textColor}';
        this.sidenav.style.borderRight = '3px solid ${textColor}';
        this.article.style.color = textColor;

        imgs.setBorder('3px solid ${textColor}');
        setSidenavList.setColor(textColor);
        setSidenavList.setBkColor(sidenavBgColor);
        setSidenavList.setBorder('3px solid ${textColor}');
    }
};
document.querySelector('#night_day').addEventListener('click', function(){
    nightMode.toggle();
});
// function mode(){
//     $('#night_day').on('click', function(){
//         nightMode.toggle();
//     });
// };
