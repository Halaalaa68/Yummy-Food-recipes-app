/// <reference types="../@types/jquery" />
meals= document.getElementById("meals")
let id=''
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

// localStorage.setItem("id", "hala")
    
id=localStorage.getItem("id")
let idPrev=localStorage.getItem("idPrev")
// let idPrev=id
console.log(idPrev==id)
// console.log(id)
let eachingr= async function(){
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${idPrev}`)
    console.log(res)
    let data= await res.json()
    console.log(data)
    for(i=0;i<data.meals.length;i++)
        {
            temp+=`<div class="col-lg-3 col-12 col-md-6" >
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
    document.querySelectorAll('.col-12 .meal a')
        .forEach( (o) => {
         o.addEventListener("click", function(){
            let x= o.getAttribute("category")
            
            localStorage.setItem("id", x)
         })
        });
    // console.log(window.location.href)
}
eachingr()

