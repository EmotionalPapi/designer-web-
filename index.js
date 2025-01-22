const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.
    addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
       

    /*nike */
  document.querySelector("#open-popup").addEventListener("click",function(){
    document.body.classList.add("active-popup")
  })

  document.querySelector(".nike-pop-up .close-btn").addEventListener("click",function(){
    document.body.classList.remove("active-popup")
  })

/*balenciag */
  document.querySelector("#open-popup1").addEventListener("click",function(){
    document.body.classList.add("active-popup1")
  })

  document.querySelector(".balancia-pop-up .close-btn1").addEventListener("click",function(){
    document.body.classList.remove("active-popup1")
  })



/*puma */
  document.querySelector("#open-popup2").addEventListener("click",function(){
    document.body.classList.add("active-popup2")
  })

  document.querySelector(".puma-pop-up .close-btn2").addEventListener("click",function(){
    document.body.classList.remove("active-popup2")
  })


  /*adidas*/
  document.querySelector("#open-popup3").addEventListener("click",function(){
    document.body.classList.add("active-popup3")
  })

  document.querySelector(".adidas-pop-up .close-btn3").addEventListener("click",function(){
    document.body.classList.remove("active-popup3")
  })


/*lv */
document.querySelector("#open-popup4").addEventListener("click",function(){
  document.body.classList.add("active-popup4")
})

document.querySelector(".lv-pop-up .close-btn4").addEventListener("click",function(){
  document.body.classList.remove("active-popup4")
})


/*chanel*/
document.querySelector("#open-popup5").addEventListener("click",function(){
  document.body.classList.add("active-popup5")
})

document.querySelector(".chanel-pop-up .close-btn5").addEventListener("click",function(){
  document.body.classList.remove("active-popup5")
})