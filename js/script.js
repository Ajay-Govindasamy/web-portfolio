$(window).on("load", function() {

	$(".loader .inner").fadeOut(750, function() {
		$(".loader").fadeOut(750);
  });
  
  $(".items").isotope({
    filter: '.works',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

})

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 3000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Student.", "Masters in Computer Science.", "Web Developer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});


var skillsTopOffset = $(".skillsSection").offset().top;
var statsTopOffset = $(".statsSection").offset().top;
var countUpFinished=false;
var aboutTopOffset = $("#about").offset().top;
var slideAnimationCompleted = false;

$(window).scroll(function() {

  if (!slideAnimationCompleted && window.pageYOffset > aboutTopOffset - $(window).height() + 400) {
    anime({
      targets: ".aboutImage",
      translateX: [-400, 0],
      duration: 1500,
      easing:'easeOutExpo',
      opacity:[0,1],
      loop:1,
    });

    anime({
      targets: ".lead, h1",
      translateY: [50, 0],
      duration: 1500,
      easing:'easeOutExpo',
      opacity:[0,1],
      delay:(el,i) =>{
        return 500 + 100 * i;
      },
      loop:1,
    });

    slideAnimationCompleted = true;
  }

  if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

    $('.chart').easyPieChart({
          easing: 'easeInOut',
     
          trackColor: false,
          scaleColor: false,
          lineWidth: 4,
          size: 152,
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
      });

  }

    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());
      
        element.countup(endVal);
      });
      countUpFinished = true;
    }



});

$("[data-fancybox]").fancybox();

$("#filters a").click(function() {

  $("#filters .current").removeClass("current");
  $(this).addClass("current");

  var selector = $(this).attr("data-filter");

  $(".items").isotope({
    filter: selector,
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

  return false;
});

$("#navigation li a").click(function(e) {
  e.preventDefault();

  var targetElement = $(this).attr("href");
  var targetPosition = $(targetElement).offset().top;
  $("html, body").animate({ scrollTop: targetPosition - 50 }, "medium");

});

const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	
	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}

  }
  
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});



