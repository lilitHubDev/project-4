var ac1=document.querySelector(".ak1")
var ac2=document.querySelector(".ak2")
var gray=document.querySelector(".blue")
function k() {
    ac1.classList.add("bar1")
    ac2.classList.add("bar2")
    ac1.classList.remove("dzax1")
    ac2.classList.remove("dzax2")
    gray.classList.remove("bigGray1")
    gray.classList.add("bigGray")
}

function m() {
    ac1.classList.add("dzax1")
    ac2.classList.add("dzax2")
    gray.classList.add("bigGray1")
    ac1.classList.remove("bar1")
    ac2.classList.remove("bar2")
    gray.classList.remove("bigGray")
}