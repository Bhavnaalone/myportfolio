
gsap.from(".img3 img",{
    y:-30,
    duration:2
})
gsap.from(".img2 img",{
    y:30,
    duration:2
})
gsap.from(".img1 img",{
    x:30,
    duration:2
})

gsap.from("#main h1",{
    scale:5,
})
gsap.from("#main3 img",{
    y:220,
    duration:4,
    delay:1,

    scrollTrigger:{
        trigger:"#main3 img",
        scroller:"body",
        scrub:true,
    
        start:"top 170%",
        end:"top 40%"
    }
  
    
    
})
var tl =gsap.timeline();


tl.from("#main3 #h h1,#main3 #h p ",{
    
    y:300, 
    duration:2,
    stagger:1 ,      
    scale:0, 

    scrollTrigger:{
        trigger:"#main3 #h h1,#main3 #h p",
        scroller:"body",
        scrub:true,
        
        start:"top 180%",
        end:"top 90%"
       
    }
    
    

    
})
gsap.from(" #main2 .mahi ",{
    y:200,
    duration:2,
   
   scrollTrigger:{
      trigger:"#main2 .mahi",
      scroller:"body",
      scrub:true,
      
      start:"top 100%",
      end:"top 40%"
   }
    
})
gsap.from("#main4",{
    y:400,
    duration:1,

    scrollTrigger:{
        trigger:"#main4",
        scroller:"body",
        scrub:true,
        
        start:"top 230%",
        end:"top 40%"
    }
})
gsap.from("#main5",{
    y:500,
    duration:2,

    scrollTrigger:{
        trigger:"#main5",
        scroller:"body",
        scrub:true,
       
        start:"top 290%",
        end:"top 40%"
    }
})
gsap.from("#main6",{
    y:600,
    duration:2,

    scrollTrigger:{
        trigger:"#main6",
        scroller:"body",
        scrub:true,
        start:"top 340%",
        end:"top 40%"
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
