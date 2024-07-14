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
let name=false, email=false, phone=false, password1=false, password2=false;
$("#name").on('keyup',function(){
    let regexName= /([a-zA-Z0-9_\s]+)/

    if(!regexName.test($("#name").val()))
    {
        $(".name .bg-danger-subtle").removeClass('d-none')
        $(".name .bg-danger-subtle").addClass('d-block')
        name=false
        validButton()
    }
    else{
        $(".name .bg-danger-subtle").removeClass('d-block')
        $(".name .bg-danger-subtle").addClass('d-none')
        name=true
        validButton()
        // console.log(name)
        
    }
})
$("#email").on('keyup', function(){
    let regexEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(!regexEmail.test($("#email").val()))
        {
            $(".email .bg-danger-subtle").removeClass('d-none')
            $(".email .bg-danger-subtle").addClass('d-block')
            email=false
            validButton()
        }
        else{
            $(".email .bg-danger-subtle").removeClass('d-block')
            $(".email .bg-danger-subtle").addClass('d-none')
            email=true
            validButton()
        }
})
$("#phone").on('keyup', function(){
    let regexPhone= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if(!regexPhone.test($("#phone").val()))
        {
            $(".phone .bg-danger-subtle").removeClass('d-none')
            $(".phone .bg-danger-subtle").addClass('d-block')
            phone=false
            validButton()
        }
        else{
            $(".phone .bg-danger-subtle").removeClass('d-block')
            $(".phone .bg-danger-subtle").addClass('d-none')
            phone=true
            validButton()
        }
})
$("#password").on('keyup', function(){
    let regexPassword= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if(!regexPassword.test($("#password").val()))
        {
            $(".pass .bg-danger-subtle").removeClass('d-none')
            $(".pass .bg-danger-subtle").addClass('d-block')
            password1=false
            validButton()
        }
        else{
            $(".pass .bg-danger-subtle").removeClass('d-block')
            $(".pass .bg-danger-subtle").addClass('d-none')
            password1=true
            validButton()
        }
})
$("#password2").on('keyup', function(){
    Password= $("#password").val()
    rePassword= $("#password2").val()
    if(rePassword!=Password )
        {
            $(".repass .bg-danger-subtle").removeClass('d-none')
            $(".repass .bg-danger-subtle").addClass('d-block')
            password2=false
            validButton()
        }
        else{
            $(".repass .bg-danger-subtle").removeClass('d-block')
            $(".repass .bg-danger-subtle").addClass('d-none')
            password2=true
            validButton()
        }
})
function validButton(){
    if(name && email && phone && password1 && password2){

    
        $("form .container .row button").addClass("btn-outline-danger")
        $("form .container .row button").removeClass("opacity-75")
        $("form .container .row button").removeClass("text-danger")
    }
    else{
        $("form .container .row button").removeClass("btn-outline-danger")
        $("form .container .row button").addClass("opacity-75")
        $("form .container .row button").addClass("text-danger")
    }
}