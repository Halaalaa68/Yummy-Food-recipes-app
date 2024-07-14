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
let cat= async function(){
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let data= await res.json()
    console.log(data)
    for(i=0;i<data.categories.length;i++)
        {
            temp+=`<div class="col-lg-3 col-12 col-md-6" >
            <div class="pointer-event meal rounded-3 position-relative">
            <img src="${data.categories[i].strCategoryThumb}" alt="">
            <a  href="section.html" class="text-black" category="${data.categories[i].strCategory}">
            <div class="position-absolute meal-name rounded-3 d-flex align-items-center flex-column p-2">
            <h3>${data.categories[i].strCategory}</h3>
            <p>${data.categories[i].strCategoryDescription.split(" ").slice(0,30).join(" ")}</p>
            </div>
            </a>
            </div>
            </div>`
            
        }

        // window.location=window.location?+data.categories[0].strCategory
        // console.log(window.location)
        
        meals.innerHTML=temp
        console.log(window.location.href)
        // $(".col .meal buttom").on('click', function(){
        //     setsec(data.categories[i].strCategory)
        // })
        document.querySelectorAll('.col-12 .meal a')
        .forEach( (o) => {
         o.addEventListener("click", function(){
            let x= o.getAttribute("category")
            
            localStorage.setItem("id", x)
            localStorage.setItem("idPrev", x)
         })
        });
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
cat()
// function setsec(id)
// {
//     console.log(id)
//     localStorage.setItem("section", id)
// }
        

