

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.querySelector('.navbar');
    
    if(window.screen.width > 512)
    {   
        if (document.documentElement.scrollTop > 30) {
            navbar.style.padding = "0 20px"; /* Change the background color when scrolled */
        } else {
            navbar.style.padding = "20px"; /* Revert back to the original background color */
        }
    }
}