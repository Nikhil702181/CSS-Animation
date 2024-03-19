////////////////////////////////////////////////////top date 
const d = new Date();
document.getElementById("date").innerHTML = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " +  d.getHours() + ":" + d.getMinutes();
////////////////////////////////////////////////////////////////////top date

//////////////////////////////////////////////////////////////////////////////work scroll
const scrollContainer = document.querySelector(".scroll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
/////////////////////////////////////////////////////////////////////////////work scroll

// ///////////////////////////////////////////////////////////////on scroll fixed 
 window.onscroll = function() {
    var banner = document.getElementById('particles-js');
    var head = document.getElementById('head');
    var nav = document.getElementById('nav');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // You can adjust the scroll position threshold based on your needs
    var threshold = 0;

    if (scrollPosition > threshold) {
      banner.classList.add('fixed');
      head.classList.add('fixed');
      nav.classList.add('fixed');
    } else {
      banner.classList.remove('fixed');
      head.classList.remove('fixed');
      nav.classList.remove('fixed');
    }
  };
// ///////////////////////////////////////////////////////////////on scroll fixed 

////////////////////////////////////////////////////////////////////////////////////////////////work section animation on scroll
 document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            document.querySelector('.main .worksec').style.animation = 'worksection 1.5s forwards';
        }
    });
});

 //////////////////////////////////////////////////////////////////////////////////////////////////work section animation on scroll


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////skills rotate 
   var counter = 0;
var procount = 0;
$('.skillswrapper').on('wheel', function(event) {
    event.preventDefault(); // Prevent default scroll behavior
    if (event.originalEvent.deltaY > 0) {
        counter += 45;
        procount += 1;
        $(this).css({"transform": "rotate(" + counter + "deg)"});
    } else if (event.originalEvent.deltaY < 0) {
        counter -= 45;
        procount -= 1;
        $(this).css({"transform": "rotate(" + counter + "deg)"});
    }
});
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////skills rotate 



//   var loader = document.getElementById("pre-loader");
// window.addEventListener("load", function(){
//     loader.style.display = "none";
// });


document.getElementById("pre-loader").classList.add("active"); 
var cnt=document.getElementById("count"); 
var water=document.getElementById("water");
var percent=cnt.innerText;
var interval;
interval=setInterval(function(){ 
  percent++; 
  cnt.innerHTML = percent; 
  water.style.transform='translate(0'+','+(100-percent)+'%)';
  if(percent==100){
    clearInterval(interval);
    document.getElementById("pre-loader").classList.remove("active");
  }
},60);

// $(document).ready(()=>{
//     setTimeout(()=>{
        
//     }, 500)
// })























