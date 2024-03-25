var lastScrollTop = 0;
    mainBar = document.getElementById("mainBar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        mainBar.style.top="-80px";
    } else {
        mainBar.style.top="0"
    }
    lastScrollTop = scrollTop;
})