// Header Scroll

let nav = document.querySelector(".navbar");
window.onScroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}


// nav hide