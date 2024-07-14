/// <reference types="../@types/jquery" />
meals= document.getElementById("meals")
// menu= document.querySelector(".fa-bars")
// nav= document.querySelector(".my-nav")

$(function(){
    $(".spinner").fadeOut(500)
})
let w=$(".black-nav").innerWidth()-10
let i=-1

let id=0
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
let byName= async function(){
    let temp=''
    let name= $("#name").val()
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let data= await res.json()
    for(let i=0;i<data.meals.length;i++)
    {
        temp+=`<div class="col-lg-3 col-11 m-auto m-lg-0 col-md-6" >
            <div class="pointer-event meal rounded-3 position-relative m-lg-0 m-md-2 m-5">
               <img src="${data.meals[i].strMealThumb}" alt="">
               <a href="instructions.html" category="${data.meals[i].idMeal}" class="text-black">
                <div class="position-absolute meal-name rounded-3 d-flex align-items-center">
                    <h3>${data.meals[i].strMeal}</h3>
                    <h3 class="d-none">${data.meals[i].idMeal}</h3>
                </div>
                </a>
            </div>
         </div>`
    }
    meals.innerHTML=temp
    document.querySelectorAll('.col-11 .meal a')
        .forEach( (o) => {
         o.addEventListener("click", function(){
            let x= o.getAttribute("category")
            
            localStorage.setItem("id", x)
         })
        });
}
let byLetter= async function(){
    let letter= $("#letter").val()
    let temp=''
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let data= await res.json()
    for(let i=0;i<data.meals.length;i++)
    {
        temp+=`<div class="col-lg-3 col-11 m-auto m-lg-0 col-md-6" >
            <div class="pointer-event meal rounded-3 position-relative m-lg-0 m-md-2 m-5">
               <img src="${data.meals[i].strMealThumb}" alt="">
               <a href="instructions.html" category="${data.meals[i].idMeal}" class="text-black">
                <div class="position-absolute meal-name rounded-3 d-flex align-items-center">
                    <h3>${data.meals[i].strMeal}</h3>
                    <h3 class="d-none">${data.meals[i].idMeal}</h3>
                </div>
                </a>
            </div>
         </div>`
    }
    meals.innerHTML=temp
    document.querySelectorAll('.col-11 .meal a')
        .forEach( (o) => {
         o.addEventListener("click", function(){
            let x= o.getAttribute("category")
            
            localStorage.setItem("id", x)
         })
        });
}
$("#name").on('keyup', byName)
$("#letter").on('keyup', byLetter)