var waitingDiv = document.getElementById("waitingDiv");
var letterCardsArea = document.getElementById("LetterCardsArea");

const waitingText = document.createElement('h2');
waitingText.classList.add("waitingText");
waitingDiv.appendChild(waitingText);
waitingText.innerHTML = "Oyun kısa bir süre içinde başlayacak.";
setTimeout(() => uploadingElements(), 3000);
setTimeout(() => waitingText.innerHTML = "", 3000);

function uploadingElements() {
    let elementsCount = 12;
    for (let i = 0; i < elementsCount; i++) {
        const element = document.createElement('div');
        element.classList.add("letterCards");
        letterCardsArea.appendChild(element);
        var letterCardsText = document.createElement("h1");
        letterCardsText.classList.add("letterCardsText");
        element.appendChild(letterCardsText);
        var node = document.querySelectorAll('.letterCardsText');
        var currentLetters = ['A', 'P', 'H', 'E', 'X', 'T', 'W', 'İ', 'N', 'G', 'A', 'B', 'C'];
        var DomArray = Array.from(node);
        DomArray[i].innerHTML = currentLetters[i];
        console.log(currentLetters.values);
    }
    $(".letterCards").click(function () {
        if ($(".output").length > 12) {
            return false;
        }
        var outputVocab = document.createElement("div");
        document.body.appendChild(outputVocab);
        outputVocab.className = "outputVocab";

        var output = document.createElement("div");
        output.className = "output";
        outputVocab.appendChild(output);
        const outputText = document.createElement("h1");
        outputText.classList.add("outputText");
        output.appendChild(outputText);

        $(this).toggleClass("toggle");
        if ($(this).hasClass("toggle")) {
            let clickedLetter = $(this).find("H1").text();
            outputText.innerHTML = clickedLetter;






        }
        $(this).removeClass("toggle");

        const cross = document.createElement("i");
        cross.className = "cross";
        output.appendChild(cross);
        cross.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        $("i").click(function () {
            $(this).parent("div").toggleClass("toggle");

            if ($(this).parent("div").hasClass("toggle")) {

                $(this).parent("div").remove();

                var sound1 = new Audio('./sound effects/CorrectSoundEffect.mp3 ');
                let deletedVer = $(".outputText").text();
                console.log(deletedVer);

                var playSoundDeletedScenario = function () {
                    if (deletedVer == "APHEXTWİN") {
                        sound1.play();
                        console.log("yiha");
                    }

                };
                playSoundDeletedScenario();





            }



        });
        let result = $(".outputText").text();
        console.log(result);
        var soundSame = new Audio('./sound effects/CorrectSoundEffect.mp3');
        var playSoundNormalScenario = function () {
            if (result == "APHEXTWİN") {
                soundSame.play();
                console.log("yiha");
            }

        };
        playSoundNormalScenario();

        



















    });
}