 var cur=document.querySelector("#cursor")
 var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x + "px"
    cur.style.top=dets.y + "px"
    blur.style.left=dets.x-100 + "px"
    blur.style.top=dets.y-100 + "px"



})
var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
cur.style.scale=1
cur.style.border="2px solid white"
cur.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave",function(){
    cur.style.scale=1
    cur.style.border="0px solid burlywood "
    cur.style.backgroundColor=" burlywood"
})
})
gsap.to("#nav",{
    backgroundColor: "#ffeaea",
    duration: 0.5,
    height:"100px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -30%",
    scrub:2

}

})
gsap.to("#main",{
    backgroundColor:"rgb(197, 188, 196)",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -40%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
   y:90, 
   opacity:0,
   duration:1,
   scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 40%",
    scrub:2
   }
}
)
gsap.from(".card",{
  scale:0.8 ,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
     trigger:".card",
     scroller:"body",
     start:"top 70%",
     end:"top 60%",
     scrub:3
    }
 }
)
 gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 50%",
        end:"top 67%",
        scrub:3
    }
 })
 gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 50%",
        end:"top 57%",
        scrub:3
    }
 })
 gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 95%",
      end: "top 95%",
      scrub: 3,
    },
  });
  
  
