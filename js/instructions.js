/// <reference types="../@types/jquery" />
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
// let urlParam= new URLSearchParams(window.location.search)
// console.log(urlParam)
// let id =urlParam.get("id")
let id=localStorage.getItem("id")
// let section=localStorage.getItem("section")

// console.log(id)
let data= async function(){
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    if(!res)
    {
        res= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?c=${id}`)
    }
    let data= await res.json()
    $(".container .row .photo img").attr('src',data.meals[0].strMealThumb)
    $(".container .row .photo h3").text(data.meals[0].strMeal)
    $(".inst .steps").text(data.meals[0].strInstructions)
    $(".inst h2 .area").text(data.meals[0].strArea)
    $(".inst h2 .category").text(data.meals[0].strCategory)
    let ingredients = ``
    for (let i = 1; i <= 20; i++) {
    if (data.meals[0][`strIngredient${i}`]) {
        ingredients += `<li class="alert alert-info m-2 p-1">${data.meals[0][`strMeasure${i}`]} ${data.meals[0][`strIngredient${i}`]}</li>`
    }
    }
    $(".inst .recipe").append(ingredients)
    let tags = []
    // let tags = meal.strTags.split(",")
    if (data.meals[0].strTags) {
       tags= data.meals[0].strTags.split(",")
    }
    // console.log(tags)
    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    $(".inst .tags").append(tagsStr)
    $(".inst .src").attr("href", data.meals[0].strSource)
    $(".inst .yt").attr("href", data.meals[0].strYoutube)
    // while(`.meals[0].strIngredient${i}`)
    // {
    //     $(".inst ul").append(`<li class="alert alert-info m-2 p-1 ing"> .meals[0].strIngredient${i}}  Lentils</li>`)
    // }
    // $(".inst h2 .recipes").text(data.meals[0].strArea)
}
data()