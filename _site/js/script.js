document.addEventListener("DOMContentLoaded", function(event) {
    var hidden = true;
    var menu = document.querySelector(".main-nav");
    var opener = document.querySelector(".opener");
    opener.addEventListener("click", function(e){
        e.preventDefault();
        if(hidden){
            menu.setAttribute("class", "main-nav active-menu");
        }else{
            menu.setAttribute("class", "main-nav");
        }
        hidden = !hidden;
    });

    var cmtBtn = document.getElementById("showComments");
    if(!cmtBtn){
        return;
    }

    var commentHidden = true;
    var disqus_shortname = '';
    var dt = document.getElementById("disqus_thread");


    function loadDisqus() {
        if(disqus_shortname === ''){
            disqus_shortname = '';
            dt.innerHTML = 'Loading comments...';
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        }
        if(commentHidden){
            dt.setAttribute('style','display:block');
            this.innerHTML = 'Hide Comments';
        }else{
            dt.setAttribute('style','display:none');
            this.innerHTML = 'Comments';
        }
        commentHidden = !commentHidden;
    }

    cmtBtn.addEventListener("click", function(e){
        e.preventDefault();
        loadDisqus();
    });

    var scrolling = false;

    function isElementInViewport (el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        scrolling = false;
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

    function enableScrolling(e) {
        scrolling = true;
    }

    window.addEventListener('scroll', enableScrolling);

    var interval = setInterval(function() {
        if(!scrolling) {
            return false;
        }
        if(isElementInViewport(cmtBtn)) {
            loadDisqus();
            clearInterval(interval);
            window.removeEventListener('scroll', enableScrolling);
        }
    }, 400);

});
var list = ["Linux User 💻", "Flannel Fiend 👕", "Peach Main 🍑", "French House 🎧 ","Beer Connoisseur 🍻","Coloradan","Boulderite 🌄","Ski Bum ⛷", "Grill Master 🍖", "Lord of the Dance 💃", "Nice Young Jewish Boy 👨", "'); DROP TABLE Posts;--", "something else I forget", "Untra"];
var item = list[Math.floor(Math.random()*list.length)];
document.getElementById("narcissism").innerHTML = item;
