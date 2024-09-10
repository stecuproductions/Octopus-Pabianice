const onLoadAnchors = $(".anchor-elements-div a")
$(document).ready(function(){
    $("#on-load-page  img").animate({
        opacity:"1"
    }, 1200);

    $(".anchor-elements-div a").css({
        opacity: 0,
    })

    onLoadAnchors.each(function(index){
        $(this).delay(400 * index).animate({
            opacity:1 
        }, 1200);
    });  
});

let isExpanded=false;

$(".hamburger").click(function(){
        $("#toggle-navbar-element").toggleClass("my-navbar-expanded");
        $("#toggle-navbar-element").toggleClass("my-navbar");
        
        $("#navbar-elements-toggle-tool").toggleClass("navbar-elements");
        $("#navbar-elements-toggle-tool").toggleClass("navbar-elements-expanded");
        
        console.log($("#navbar-elements-toggle-tool").hasClass("navbar-elements"));
        console.log($("#navbar-elements-toggle-tool").hasClass("navbar-elements-expanded"));


        if ($("#toggle-navbar-element").hasClass("my-navbar-expanded")) {
            console.log("expanded");
        }
        else{
            console.log("No expanded");
        }
})

$(".box-content").hover(function(){
    $(this).find(".sport-description").css("visibility", "visible");
}, function(){
    $(this).find(".sport-description").css("visibility", "hidden");
});