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
        
})

$(".box-content").hover(function(){
    $(this).find(".sport-description").css("visibility", "visible");
}, function(){
    $(this).find(".sport-description").css("visibility", "hidden");
});





// Kliknięcie ikony rozwijania/zwijania
// Kliknięcie ikony rozwijania/zwijania
$(".collapse-icon").click(function() {
    $("#coach-choice-collapse-or-expanded p").slideToggle(700);  // Rozwijanie/zwijanie listy trenerów
});

// Kliknięcie w wybranego trenera
$("#coach-choice-collapse-or-expanded p").click(function() {
    var coachName = $(this).text();  // Pobranie tekstu trenera
    changeTrainer(coachName);        // Wywołanie funkcji zmieniającej trenera
});

function changeTrainer(trainer) {
    // Zanikanie obecnych danych trenera
    $(".coach-box-left, .coach-box-right").fadeOut(300, function() {
        // Zmiana danych trenera po zaniknięciu obecnych danych
        switch (trainer) {
            case 'Dariusz "Dareczek" Nazwisko - BJJ początkujący':
                $(".coach-box-left h2").text('Dariusz "Dareczek" Nazwisko');
                $(".coach-box-left p").text('Dariusz Nazwisko to doświadczony trener ju-jitsu z wieloletnim stażem, który swoją przygodę ze sztukami walki rozpoczął już w młodości. Jako były zawodnik, zdobywał wiedzę i umiejętności, które teraz przekazuje swoim podopiecznym.');
                $(".coach-box-right img").attr("src", "./images/kadra/dareczek.png");
                break;
            case 'Tomasz Janiak - Boks/K1':
                $(".coach-box-left h2").text('Tomasz Janiak');
                $(".coach-box-left p").text('Tomasz Janiak to doświadczony trener boksu i kickboxingu, który od lat szkoli zarówno amatorów, jak i profesjonalistów. Jako były zawodnik K1, zdobył liczne tytuły na arenie krajowej.');
                $(".coach-box-right img").attr("src", "./images/kadra/fighter.png");
                break;
            case 'Tomasz "Wujek" Piwowarski - BJJ kimona':
                $(".coach-box-left h2").text('Tomasz "Wujek" Piwowarski');
                $(".coach-box-left p").text('Tomasz Piwowarski, znany w środowisku jako "Wujek", to trener brazylijskiego jiu-jitsu z wieloletnim doświadczeniem. Specjalizuje się w walce w kimonie, a jego styl to połączenie tradycyjnych technik z nowoczesnym podejściem.');
                $(".coach-box-right img").attr("src", "./images/kadra/fighter.png");
                break;
            case 'Marcin Wójciak - BJJ No-Gi':
                $(".coach-box-left h2").text('Marcin Wójciak');
                $(".coach-box-left p").text('Marcin Wójciak to specjalista od brazylijskiego jiu-jitsu w stylu No-Gi, czyli bez kimona. Zawodnik i trener, który koncentruje się na szybkości, mobilności i wszechstronnych technikach chwytów.');
                $(".coach-box-right img").attr("src", "./images/kadra/fighter.png");
                break;
            case 'Artur Wiatr - BJJ kids':
                $(".coach-box-left h2").text('Artur Wiatr');
                $(".coach-box-left p").text('Artur Wiatr to trener BJJ, który z pasją pracuje z dziećmi. Jego podejście łączy dyscyplinę ze świetną zabawą, co sprawia, że młodzi adepci szybko zakochują się w sportach walki.');
                $(".coach-box-right img").attr("src", "./images/kadra/fighter.png")
                var myImage= $(".coach-box-right img");

                break;
            default:
                console.log("Trener nie został znaleziony");
        }

        // Pojawianie się nowego trenera po zmianie treści
        $(".coach-box-left, .coach-box-right").fadeIn(300);
    });

    // Po wybraniu trenera ukrywamy listę trenerów
    if (window.innerWidth < 1600) $("#coach-choice-collapse-or-expanded p").slideUp(400);  
}

var collapseIcon=$(".collapse-icon");
var animationClass="on-scroll-collapse-icon";
function animateIcon(){
    var interval = setInterval(function() {
        if ($(".choose-coach p").css("display") === "none") {
            // Kiedy warunek zostanie spełniony, uruchom animację i zatrzymaj sprawdzanie
            collapseIcon.addClass(animationClass);
            setTimeout(function() {
                collapseIcon.removeClass(animationClass);
            }, 4000);

            setTimeout(function() {
                animateIcon();
            }, 4000);

            clearInterval(interval); // Zatrzymujemy cykliczne sprawdzanie
        }
    }, 500);
}

animateIcon();

$('#kadra-navbar-element').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#nasza-kadra-section').offset().top
    }, 0); // 1000 oznacza 1 sekundę na płynne przewijanie
});

$('#o-nas-navbar-element').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#o-nas-section').offset().top
    }, 0); // 1000 oznacza 1 sekundę na płynne przewijanie
});

$('#nasze-zajecia-navbar-element').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#nasze-zajecia-section').offset().top
    }, 0); // 1000 oznacza 1 sekundę na płynne przewijanie
});

$('#nasze-zajecia-navbar-element').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#nasze-zajecia-section').offset().top
    }, 0); // 1000 oznacza 1 sekundę na płynne przewijanie
});

$("#grafik-navbar-element").on('click', function() {
    $('html, body').animate({
        scrollTop: $('#grafik-zajec-section').offset().top
    }, 0); // 1000 oznacza 1 sekundę na płynne przewijanie
});