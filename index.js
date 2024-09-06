/* Navbar toggler */

var toggler = document.querySelector('.toggler')
var navlinks = document.querySelector('.nav-links')
toggler.addEventListener('click', function () {
    navlinks.classList.toggle('circle-toggle')
})

/* Navbar-Scroll Behavior */

var navbarDefault = document.querySelector('.navbar-default')
window.addEventListener('scroll', function () {
    navbarDefault.classList.toggle('navbar-default', window.scrollY <= 50)
    navbarDefault.classList.toggle('navbar-scroll', window.scrollY > 50) 
})

const s1 = ["img/s11.webp","img/s12.webp"]
const s2 = ["img/s23.webp","img/s22.webp","img/s21.webp"]
const s3 = ["img/s33.webp","img/s32.webp"]

var x = 0
setInterval(()=>{
    document.querySelector('.onn').src = s1[x]
    x++;
    if(x>=2){
        x=0
    }
},3000)


var y = 0
setInterval(()=>{
    document.querySelector('.onnnn').src = s2[y]
    y++;
    if(y>=3){
        y=0
    }
},3000)

var z = 0
setInterval(()=>{
    document.querySelector('.onnn').src = s3[z]
    z++;
    if(z>=2){
        z=0
    }
},3000)