/// <reference types="../@types/jquery" />
meals= document.getElementById("meals")
// menu= document.querySelector(".fa-bars")
// nav= document.querySelector(".my-nav")

$(function(){
    $(".spinner").fadeOut(500)
})
let i=-1

let id=0
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
function setId(id)
{
    localStorage.setItem("id", id)
    // localStorage.setItem("id", id)
}
let temp=""
let homePage= async function(){
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let data= await res.json()
    console.log(data)
    for(i=0;i<data.meals.length;i++)
    {
        temp+=`<div class=" col-lg-3 col-12 col-md-6" >
            <div class="pointer-event meal rounded-3 position-relative m-lg-0 m-md-2 m-5">
               <img src="${data.meals[i].strMealThumb}" alt="">
               <a href="instructions.html" onclick="setId(${data.meals[i].idMeal})" class="text-black">
                <div class="position-absolute meal-name rounded-3 d-flex align-items-center">
                    <h3>${data.meals[i].strMeal}</h3>
                    <h3 class="d-none">${data.meals[i].idMeal}</h3>
                </div>
                </a>
            </div>
         </div>`
        //  $(".col .meal a").on('click', function(){

        //     let obj= {
        //         "id":data.meals[i].idMeal
        //     }
        //     let searchParam= new URLSearchParams(obj)
        //     let x= searchParam.toString()
        //     // searchParam.set(key, value)
        //     window.location.href= url + x 
        //     window.open(window.location.href)
        //  })
        // $(".col .meal a").on('click', function(){

        // })
    }
    
    meals.innerHTML=temp
    console.log(window.location.href)
    // let link = window.location.href;
    // link = location.replace(window.location.href,"123");
    // console.log(link)

    // console.log($(".d-none").text())
    // $(".meal").on('click', function(e){
    //     console.log(e.target)
    //     id= data.meals[i].idMeal
    //     console.log(id)
    //     instructions(id)
    //  })
}
homePage()




