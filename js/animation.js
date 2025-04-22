$(function(){
gsap.matchMedia().add("(min-width: 767px)", () => {
	gsap.registerPlugin(ScrollTrigger);
  
//animation top
	gsap.to(".top-block-left_main, header", {
		opacity: 1,
		y: 0,
		duration: 1,
		ease: "power2.out",
		delay: 0.3
	});
//services
	gsap.from(".slider-services_m .slide", {
	  y: 200,
	  opacity: 0,
	  duration: 1,
	  stagger: 0.3,
	  ease: "power3.out",
	  scrollTrigger: {
		trigger: ".b-services_main",
		start: "top 100%",
		toggleActions: "play none none reset"
	  }
	});

//projects
	document.querySelectorAll(".item-projects_main").forEach((item) => {
	  gsap.fromTo(
		item,
		{ x: 150, opacity: 0 },
		{ 
		  x: 0, opacity: 1, 
		  duration: 2, 
		  ease: "power3.out", 
		  scrollTrigger: {
			trigger: item,
			start: "top 55%", 
			end: "top 20%",
			toggleActions: "play none none reverse",
			scrub: false
		  }
		}
	  );
	});

//puzzle
	const element = document.querySelector('.puzzle-directions_main');
	
	gsap.to(element, {
	  scrollTrigger: {
		trigger: element,
		start: 'top 55%',
		end: 'bottom 15%',
		toggleClass: { className: 'active', targets: element },
		scrub: true,
	  }
	});
});
	
//scroll logo
	document.addEventListener('DOMContentLoaded', function () {
		const container = document.querySelector('.list-lent-customers');
		const items = container.querySelectorAll('.inner-list');
	
		if (items.length < 4) {
			const cloneUp = items[0].cloneNode(true);
			const cloneDown = items[1].cloneNode(true);
			
			container.appendChild(cloneUp);
			container.appendChild(cloneDown);
		}
	});
});