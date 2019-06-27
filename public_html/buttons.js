var breed, breeds, b, n = 0, f, e;

function start() {
    breed = "posts.xml";
    $.ajax({
        "url": breed,
        "type": "GET",
        "dataType": "xml",
        "success": function (data) {
            b = $(data).find("breed");
            f = $(b[n]).html();
            $("#show").load("breeds/" + f);
            n++;
            f = $(b[n]).html();
            $("#show_tab").load("breeds/" + f);
        },
        "failure": function () {
            window.console && console.log("error");
        }
    });
}


var ele, source, dark, dark2, dark3;

window.onload = function () {
    start();
    button = false;
   // document.getElementById("daynight").onclick = changeImg;   //тёмная тема
    dark = document.getElementById('dark');
    dark2 = document.getElementById('search');
    dark3 = document.getElementById('pr');
    pre_d1 = document.getElementById('pre1');
    pre_d2 = document.getElementById('pre2');
    pre_d3 = document.getElementById('pre3');
    pre_d4 = document.getElementById('pre4');
    
    ele = document.getElementById('hello');
    source = window.pageYOffset + ele.getBoundingClientRect().bottom;
};
//появление header при прокрутки сайта
window.onscroll = function () {
    if (ele.classList.contains('fixed') && window.pageYOffset < source)
    {
        ele.classList.remove('fixed');
    } else if (window.pageYOffset > source) {
        ele.classList.add('fixed');
    }
};


//плавный якорь
$(document).ready(function () {
    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 600);
        return false;
    });
});

//тёмная тема
//замена картинок путём устаревшего атрибута name
/*
 function changeImg(){ 
 button=true;
 dark.classList.add('darkmode');
 dark2.classList.remove('my');
 dark2.classList.add('darklite');
 dark3.classList.add('dar_cat');
 document.market.src = "media/market_d.png" ;
 document.sun.src = "media/sun_d.png" ;
 document.info.src = "media/info_d.png" ;
 document.comm.src = "media/comm_d.png" ;
 document.sitelogo.src = "media/sitelogo_d.png" ;
 };
*/