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

$(".choose-coach p").click(function(){
    var coachName = $(this).text();  // Użyjemy .text() do pobrania tekstu elementu <p>
    console.log(coachName);
    switch (coachName){
        case 'Dariusz "Dareczek" Nazwisko - BJJ początkujący':
            console.log("Darek");
            $(".coach-box-left h2").text('Dariusz "Dareczek" Nazwisko')
            $(".coach-box-left p").text('Dariusz Nazwisko to doświadczony trener ju-jitsu z wieloletnim stażem, który swoją przygodę ze sztukami walki rozpoczął już w młodości. Jako były zawodnik, zdobywał wiedzę i umiejętności, które teraz przekazuje swoim podopiecznym. W swoim dojo skupia się na precyzji technik, skuteczności w realnych sytuacjach oraz budowaniu mentalnej siły. Jego indywidualne podejście do każdego ucznia i nowoczesne metody treningowe sprawiają, że jego kursanci osiągają wysokie wyniki zarówno na macie, jak i w życiu codziennym.')
            $(".coach-box-right img").attr("src", "./images/kadra/dareczek.png")

    }
});