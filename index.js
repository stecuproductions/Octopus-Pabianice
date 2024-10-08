
var adminMode=false;

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

    $.get("/getAnnouncement", function(response) {
        if (response.content) {
            // Zaktualizuj treść paragrafu #announcement-paragraph
            $("#announcement-paragraph").text(response.content);
        } else {
            alert("Nie udało się załadować ogłoszenia.");
        }
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

const scrollToSection = (sectionId) => {
    $('html, body').animate({
        scrollTop: $(sectionId).offset().top
    }, 0); // Można dostosować prędkość animacji poprzez zmianę liczby 0 na inną wartość (np. 1000 dla płynnego przewijania)
};

$('.navbar-element').on('click', function() {
    const classList = $(this).attr('class').split(' '); // Pobranie listy klas jako tablicy
    const targetClass = classList[2]; // Pobranie trzeciej klasy (indeks 2)    
    switch (targetClass) {
        case 'o-nas-navbar-element':
            scrollToSection('#o-nas-section');
            break;
        case 'nasze-zajecia-navbar-element':
            scrollToSection('#nasze-zajecia-section');
            break;
        case 'grafik-navbar-element':
            scrollToSection('#grafik-zajec-section');
            break;
        case 'kadra-navbar-element':
                scrollToSection('#nasza-kadra-section');
                break;
        case 'karnety-navbar-element':
            scrollToSection('#scroll-to-karnety');
            break;
        case 'kontakt-navbar-element':
            scrollToSection('#kontakt-section');
            break;
        case "ogłoszenia-navbar-element":
            scrollToSection('#ogloszenia-section');
            break;

        default:
            console.log(targetClass);
            console.log('Nieznany element navbaru.');
            break;
    }
});



$(".collapse-arrow img").click(function(){
    $(".side-navbar-content").toggleClass("collapse-navbar");
})



// //function checkCollision() {
//     var arrow = $(".collapse-arrow");
//     var naszaKadraSection = $("#nasza-kadra-section");
//     var karnetySection = $("#scroll-to-karnety");

//     // Pobieranie pozycji i rozmiarów
//     var arrowOffset = arrow.offset();
//     var naszaKadraSectionOffset = naszaKadraSection.offset();    
//     var karnetySectionOffset = karnetySection.offset();

//     var boxOffSet= $(".box-content").offset();

    
//     // Sprawdzanie, czy strzałka znajduje się pomiędzy sekcją nasza kadra a sekcją karnety
// if ((arrowOffset.top > naszaKadraSectionOffset.top && arrowOffset.top < karnetySectionOffset.top)) {
//         arrow.addClass("collapse-arrow-white");
//     } else {
//         arrow.removeClass("collapse-arrow-white");
//     }
// }

// Użycie $(window) do śledzenia scrollowania
//$(window).on("scroll", checkCollision);

var cCounter = 0;
var adminMode=false;
// Dodanie event listenera na kliknięcie
// Dodanie event listenera na kliknięcie
$("#adm").click(function() {
    cCounter++;
    if (cCounter == 2) {
        var passwd = prompt("Wpisz hasło dla trybu admina");
        if (passwd) {
            $.post("/checkAdminPassword", { password: passwd }, function(response) {
                if (response["status"] == "correct") {
                    alert("Tryb admina pomyślnie aktywowany");
                    adminMode = true;
                    $("#change-announcement-content-button").css("display", "block");
                    $("#change-announcement-content-button").click(function() {
                        var newContent = prompt("Wprowadź zaktualizowaną treść ogłoszenia.");
                        $.ajax({
                            url: "updateAnnouncement",
                            type: "PUT",
                            data: JSON.stringify({ content: newContent }),
                            contentType: "application/json", // Dodano contentType
                            success: function(response) {
                                if (response.success) {
                                    $("#announcement-paragraph").text(newContent); // Poprawiona manipulacja DOM
                                    alert("Treść ogłoszenia została zmieniona");
                                } else {
                                    alert("Nie udało się zmienić treści");
                                }
                            }
                        })
                    })
                } else {
                    alert("Hasło niepoprawne");
                }
            });
        }
    }
});











  