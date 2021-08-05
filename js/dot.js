$(function(){
    $(".dot > li").click(function(){
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        var i = $(this).index();
        $(this).parent().prev(".fade").find("li").removeClass("on");
        $(this).parent().prev(".fade").find("li").eq(i).addClass("on");
    })
})