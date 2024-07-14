/// <reference types="../@types/jquery" />
meals= document.getElementById("meals")
// menu= document.querySelector(".fa-bars")
// nav= document.querySelector(".my-nav")
let i=-1
// let id=0
$(function(){
    $(".spinner").fadeOut(500)
})
let w=$(".black-nav").innerWidth()-10
$("#menu").on('resize', function(){
    w=$(".black-nav").innerWidth()-10
})
$(".my-nav").css('left',-w)
$(".content p").css('margin-top','50%')
$("#menu").on('click', function(){
    // console.log("hello")
    
    if( $(".my-nav").css('left')==0){
        w=$(".black-nav").innerWidth()
        $(".my-nav").css('left',-w)
    }
    else{
        $(".my-nav").css('left',"0%")
    }
    if( $(".content p").css('margin-top')=="5%")
    {
        $(".content p").css('margin-top','50%')
    }
    else{
        $(".content p").css('margin-top','5%')
    }
    if($("#menu").hasClass("fa-bars"))
    {
        $("#menu").removeClass("fa-bars")        
        $("#menu").addClass("fa-x")
    }
    else{
        $("#menu").removeClass("fa-x")        
        $("#menu").addClass("fa-bars")
    }
    if($(".my-nav").css('left')=="0px")
    {
        $(".my-nav").css('left', -w)
    }
    else{
        $(".my-nav").css('left','0px')
    }
})
let temp=""
let area= async function(){
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let data= await res.json()
    console.log(data)
    for(i=0;i<data.meals.length;i++)
        {
            temp+=`<div class="col-lg-3 col-12 col-md-6" >
           <div class="pointer-event meal rounded-3 position-relative m-lg-0 m-md-2 m-5">
              <a href="country.html" class="text-white text-decoration-none d-flex flex-column align-items-center" category="${data.meals[i].strArea}">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${data.meals[i].strArea}</h3>
              </a>
           </div>
        </div>`
            
        }
        meals.innerHTML=temp
        document.querySelectorAll('.col-12 .meal a')
        .forEach( (o) => {
         o.addEventListener("click", function(){
            let x= o.getAttribute("category")
            
            localStorage.setItem("id", x)
            localStorage.setItem("idPrev", x)
         })
        });
        }
area()