

// ===== Burger menu ==== //

let logo = document.querySelector(".header__logo");
let menuPopup = document.querySelector(".header__menu");
let menuBurger = document.querySelector(".menu__list");
let iconMenu = document.querySelector(".header__burger");
let lock = document.querySelector("body");

iconMenu.addEventListener("click", function (e) {
    if (iconMenu) {
        iconMenu.classList.toggle("_active");
        menuBurger.classList.toggle("_active");
        menuPopup.classList.toggle("_active");
        logo.classList.toggle("_active");
        lock.classList.toggle("_lock");
    }
})

// ========== Animation count ========== //
//document.body.innerHTML = "";

let noRepeat = true;

function countStart(foo) {
    if (foo) {
        let countId = document.querySelectorAll("#count");

        countId.forEach((element) => {
            let dataNum = element.dataset.num;
            let count = 1;
            let speed = Math.round(1000 * 5 / dataNum);
            //let speed = 1000 * 10 / dataNum // data - num
            function counter() {
                setTimeout(function () {
                    element.innerHTML = count;
                    count = count + 1;
                    if (count <= dataNum) {
                        counter();
                    }
                }, speed)
            };
            counter();  // start animation count
        });
    }
    noRepeat = false;
}


// ========== Animation pages ========== //

let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; // видимая высота елемента
            const animItemOffset = offset(animItem).top // позиция объекта относительно верха
            const animStart = 4; // коефициент регулирующий момент анимации
            // window.innerHeight - высота области просмотра макета 
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            //pageXOffset - количестао прокрученных пикселей
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                countStart(noRepeat);    //    start animation count
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                   // noRepeat = true;
                }
            }
        }
    }
    function offset(el) {    // позволяет получить позицию обьекта относительно верха страници ((el).top)
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// ========== Swiper ========= //

new Swiper('.slider__container', {
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
        //nextEl: '.slider__button-next',
    },
    autoplay: {
        delay: 2000,
    },
    loop: true,
    slidesPerView: 1,
    watchOverflow: true,
    autoHeight: true,
    spaceBetween: 30,
    breakpoints: {
        700: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        940: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1160: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1350: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1650: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});