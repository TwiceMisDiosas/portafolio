$(document).ready(function() {


  function splitText(){
 
  
    splitLines = new SplitText(".text-anime", {
      type: "lines",
      linesClass: "text-lines"
    });
  
  
    
  
    $(".text-anime .text-lines").wrap('<div class="line-wrapper">');
  
  }
  
  splitText();

        const ua = navigator.userAgent;
    
        // Only Safari (macOS or iOS Safari)
        const isSafari =
          /^((?!chrome|android).)*safari/i.test(ua);
    
        if (isSafari) {
          document.documentElement.classList.add("safari-browser");
        }


    // ACCORDION
    $('.accordion-header').on('click', function(){
      

        $(this).toggleClass('active');
        $(this).next('.accordion-content').slideToggle();

        $('.accordion-header').not($(this)).removeClass('active');
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    });


    if($('.commentSlider').length){
      var swiper = new Swiper(".commentSlider", {
        slidesPerView: 2.8,
        spaceBetween: 30,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        speed: 10000,
        loop: true,
      
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 24
          },
          1024: {
            slidesPerView: 2.8,
            spaceBetween: 30
          }
        }
      });
    }

    if( $('.lightbox').length ){

      $('.lightbox img').magnificPopup({
            type:'image',
            closeOnContentClick: true,
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 300}
        });
        
    }

    const sidebar = gsap.timeline({yoyo: false,reversed: true});
    sidebar.pause();

      sidebar.to(".sidebar", {
        autoAlpha: 1,
        'pointer-events': 'all',
        duration: .3
      })
      .to(".sidebar .right-bar", {
        x: 0,
        duration: .3
      });

    $('.hamburger').on('click', function(){
        sidebar.reversed() ? sidebar.play(): sidebar.reverse();
    });

    
    $('.sidebar').on('click', function(){
      sidebar.reversed() ? sidebar.play(): sidebar.reverse();
  });


  //SCROLL trigger
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  $('.text-anime').each(function(){
    const lines = $(this).find('.text-lines');
    if (lines.length) {
      gsap.fromTo(lines, 
        { y: "100%" },
        { 
          y: "0%",
          stagger: 0.08,
          delay: $(this).data('delay') ? $(this).data('delay') : 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: $(this),
            start: "top bottom-=15%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  });

  $('.fade-up-anime').each(function(){
    gsap.fromTo($(this),
      { y: 35, autoAlpha: 0 },
      { 
        y: 0,
        autoAlpha: 1,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: $(this),
          start: "top bottom-=15%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  setTimeout(function() {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }, 300);

  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.play().catch(function() {});
  }
  
  $(window).on("scroll", function () {
    let scrollPos = $(window).scrollTop();
    let offset = 150;
  
    $("section").each(function () {
      let top = $(this).offset().top - offset;
      let bottom = top + $(this).outerHeight();
      let id = $(this).attr("id");
  
      if (scrollPos >= top && scrollPos < bottom) {
        $(".icon-bar a.active, .sidebar a.active").removeClass("active");
        $('.icon-bar a[href="#' + id + '"], .sidebar a[href="#' + id + '"]').addClass("active");
        return false; // loop break
      }
    });
  });

  // Descarga directa automática del CV sin moverse de la vista ni abrir otra pestaña
  $('#btn-download-cv').on('click', function(e) {
    if (typeof window.downloadCVDirect === 'function') {
      return window.downloadCVDirect(e);
    }
  });

});




