function loader() {
    document.getElementById('preloader').style.display = 'none'
    document.getElementById('body').style.display = 'block'
}

const scrollFn = (to) => {
    document.getElementById(to).scrollIntoView({ behavior: "smooth" });
}

var target = document.querySelector("#landing-page");
var rootElement = document.documentElement;
var scrollBtn = document.querySelector("#scroll-up");
function callback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            scrollBtn.style.display = "none";
        } else {
            scrollBtn.style.display = "block";
        }
    });
}
let observer = new IntersectionObserver(callback);
observer.observe(target);

let dr = document.querySelector('#drawer-toggle');
let d = document.querySelector('#d');

d.addEventListener('click',function(){
    document.querySelector('#d').classList.toggle('isActive')
    document.querySelector('#ham-open').classList.toggle('hide')
    document.querySelector('#ham-close').classList.toggle('gg-close-active')
})
dr.addEventListener('click',function(){
    document.querySelector('#d').classList.toggle('isActive')
    document.querySelector('#ham-open').classList.toggle('hide')
    document.querySelector('#ham-close').classList.toggle('gg-close-active')
})