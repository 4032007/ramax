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
	
//slider year about
	gsap.from(".slider-history-about .slide", {
	  y: 200,
	  opacity: 0,
	  duration: 1,
	  stagger: 0.3,
	  ease: "power3.out",
	  scrollTrigger: {
		trigger: ".history-about",
		start: "top 70%",
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
	
//animation number
	gsap.to(".item-hist-about.item4, .item-hist-about.item5", {
		opacity: 1,
		y: 0,
		duration: 1,
		ease: "power2.out"
	});
	gsap.to(".item-hist-about.item1, .two-hist-bl, .item-hist-about.item6, .item-hist-about.item7", {
		opacity: 1,
		x: 0,
		duration: 1,
		ease: "power2.out"
	});
	
//animation scheme
	gsap.to(".item-service_ab.item1", {
	  y: 0,
	  opacity: 1,
	  duration: 1,
	  stagger: 0.2,
	  ease: "power3.out",
	  scrollTrigger: {
		trigger: ".b-scheme-service_ab",
		start: "top 50%",
		toggleActions: "play none none reset"
	  }
	});
	
	gsap.to(".item-service_ab.item4", {
	  y: 0,
	  opacity: 1,
	  duration: 1,
	  stagger: 0.3,
	  delay: 0.4,
	  ease: "power3.out",
	  scrollTrigger: {
		trigger: ".b-scheme-service_ab",
		start: "top 50%",
		toggleActions: "play none none reset"
	  }
	});
	
	gsap.to(".item-service_ab.item2", {
	  y: 0,
	  opacity: 1,
	  duration: 1,
	  stagger: 0.3,
	  delay: 0.6,
	  ease: "power3.out",
	  scrollTrigger: {
		trigger: ".b-scheme-service_ab",
		start: "top 50%",
		toggleActions: "play none none reset"
	  }
	});
	
	gsap.to(".item-service_ab.item5", {
	  y: 0,
	  opacity: 1,
	  duration: 1,
	  stagger: 0.3,
	  delay: 0.8,
	  ease: "power3.out",
	  scrollTrigger: {
		trigger: ".b-scheme-service_ab",
		start: "top 50%",
		toggleActions: "play none none reset"
	  }
	});
	
	gsap.to(".item-service_ab.item3", {
	  y: 0,
	  opacity: 1,
	  duration: 1,
	  stagger: 0.3,
	  delay: 1,
	  ease: "power3.out",
	  scrollTrigger: {
		trigger: ".b-scheme-service_ab",
		start: "top 50%",
		toggleActions: "play none none reset"
	  }
	});
	
	gsap.to(".item-service_ab.item6", {
	  y: 0,
	  opacity: 1,
	  duration: 1,
	  stagger: 0.3,
	  delay: 1.2,
	  ease: "power3.out",
	  scrollTrigger: {
		trigger: ".b-scheme-service_ab",
		start: "top 30%",
		toggleActions: "play none none reset"
	  }
	});
	
	gsap.fromTo(".block-info-scheme_ab",
	  {
		opacity: 0,
		y: 0,
		filter: "blur(6px)"
	  },
	  {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		duration: 1,
		stagger: 0.2,
		delay: 2.1,
		ease: "power3.out",
		scrollTrigger: {
		  trigger: ".b-scheme-service_ab",
		  start: "top 30%",
		  toggleActions: "play none none reset"
		}
	  }
	);
	
	gsap.fromTo(".item-what-serv_ab",
	  {
		opacity: 0,
		y: 50,
		scale: 0.9
	  },
	  {
		opacity: 1,
		y: 0,
		scale: 1,
		duration: 1,
		stagger: {
		  each: 0.5,
		  from: "start" // можно "center", "end", "edges" для интересных эффектов
		},
		ease: "power3.out",
		scrollTrigger: {
		  trigger: ".b-what-serv_ab",
		  start: "top 30%",
		  toggleActions: "play none none reset"
		}
	  }
	);
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

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.sche-nn');
  const duration = 2000;

  elements.forEach(el => {
    const target = +el.textContent;
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 10);

    const counter = setInterval(() => {
      start++;
      el.textContent = start;
      if (start >= target) {
        clearInterval(counter);
      }
    }, stepTime);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const outerBlock = document.querySelector('.b-settinegs-serv_ab');
  const scrollBlock = document.querySelector('.list-serv-settings_ab');

  function isElementFullyReachedTop(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= 1; // можешь подогнать по вкусу, например rect.top <= 10
  }

  window.addEventListener('wheel', function (e) {
    if (window.innerWidth <= 999) return;
    if (!outerBlock || !scrollBlock) return;
    if (!isElementFullyReachedTop(outerBlock)) return;

    const delta = e.deltaY;
    const atTop = scrollBlock.scrollTop === 0;
    const atBottom = scrollBlock.scrollTop + scrollBlock.clientHeight >= scrollBlock.scrollHeight;

    if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) {
      e.preventDefault();
      scrollBlock.scrollTop += delta;
    }
  }, { passive: false });
});
