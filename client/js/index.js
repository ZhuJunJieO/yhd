$(()=>{
    $(".menu").mouseenter(function(){
        $(this).children(".icon-jiantouxia").css("display","none");
        $(this).children(".icon-jiantoushang").css("display","block");

    })
    $(".menu").mouseleave(function(){
        $(this).children(".icon-jiantouxia").css("display","block");
        $(this).children(".icon-jiantoushang").css("display","none");
    })
   
})