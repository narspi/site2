const headerBtn1 = document.querySelector('.header__btn1');
const headerBtn2 = document.querySelector('.header__btn2');


headerBtn1.addEventListener('mouseenter', event => {
    headerBtn2.classList.remove('header__btn1');
    headerBtn2.classList.add('header__btn2');
    headerBtn1.classList.add('header__btn1');
    headerBtn1.classList.remove('header__btn2');
    headerBtn1.style.marginLeft = 0 + "px";
});

headerBtn2.addEventListener('mouseenter', event => {
    headerBtn2.classList.add('header__btn1');
    headerBtn2.classList.remove('header__btn2');
    headerBtn1.classList.remove('header__btn1');
    headerBtn1.classList.add('header__btn2');
    headerBtn1.style.marginLeft = 30 + "px";
});


var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}


// $(function(){
//     let clientWidth = document.body.clientWidth;

//     $('.help__slider').slick({ 
//         arrows:false,
//         autoplay: true,
//         fade: true,
//         autoplaySpeed: 1000
//     });


//     function resizeHelpSlider(clientWidth) {
//         if (clientWidth < 516) {
//           $('.help__slider').slick({
//             arrows:false,
//             autoplay: true,
//             fade: true,
//             autoplaySpeed: 1000
//           });
//         } else {
//           $('.help__slider').slick("unslick");
//         }
//       }

//     resizeHelpSlider(clientWidth);      
//     $(window).resize(function() {
//         let clientWidth = document.body.clientWidth;
//         console.log(clientWidth);
//         resizeHelpSlider(clientWidth);
//       });
// });
