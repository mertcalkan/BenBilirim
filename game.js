var rules = document.getElementById("rules");
var play = document.getElementById("game");
var main = document.getElementById("main");
var gameArea = document.getElementById("gameArea");


$("#game").click(function () {

  rules.parentElement.removeChild(rules);
  play.parentElement.removeChild(play);

  const waitingText = document.createElement('h2');
  waitingText.classList.add("waitingText");
  main.appendChild(waitingText);
  waitingText.innerHTML = "Oyun kısa bir süre içinde başlayacak.";
  setTimeout(() => uploadingElements(), 3000);
  setTimeout(() => waitingText.innerHTML = "", 3000);




  function uploadingElements() {
    let elementsCount = 12;
    for (let i = 0; i < elementsCount; i++) {
      const element = document.createElement('div');
      element.classList.add("letterCards");
      gameArea.appendChild(element);
      var letterCardsText = document.createElement("h1");
      letterCardsText.classList.add("letterCardsText");
      element.appendChild(letterCardsText);
      //  var clickedLetter = $(" .letterCards toggle > .letterCardsText").textContent;
      //  $("div.toggle").find("").find()
      //  var clickedLetter = $('.letterCards.toggle').find('.letterCardsText').text($("h1"));
      //  var clickedLetter = document.querySelector('.letterCards').textContent;



      var node = document.querySelectorAll('.letterCardsText');
      var currentLetters = ['A', 'P', 'H', 'E', 'X', 'T', 'W', 'İ', 'N', 'G', 'A', 'B', 'C'];
      var DomArray = Array.from(node);
      DomArray[i].innerHTML = currentLetters[i];
      console.log(currentLetters.values);




      //  letterCardsText.innerHTML = ["A" ,"B"];
      // writing a click function with our letters here.




    }

    // window.onbeforeunload = function () {
    //   return "Are you sure you want to close the window?";
    // }
    // creating elements dynamically with javascript during the game.

    //  const inputDiv = document.createElement("div");
    //  inputDiv.classList.add("DivOfInput");
    //  document.body.appendChild(inputDiv);
    //  var input = document.createElement("input");
    //  input.type = "text";
    //  input.className = "inputText"; // set the CSS class
    //  inputDiv.appendChild(input);
    var outputVocab = document.createElement("div");
    document.body.appendChild(outputVocab);
    outputVocab.className = "outputVocab";


    // CLICK AND SEE LETTER ON OUTPUT.
    $(".letterCards").click(function () {
      if ($(".output").length > 10) {
        return false;
      }
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


        //  setTimeout(() =>   $(this).removeClass("toggle") , 50);



      }
      $(this).removeClass("toggle");

      const cross = document.createElement("i");
      cross.className = "cross";
      output.appendChild(cross);
      cross.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
      $("i").click(function () {
        $(this).parent("div").toggleClass("toggle");

        if ($(this).parent("div").hasClass("toggle")) {
          // $(this).closest("div").remove(); 
          // let deletedVariation = result.substring($(this).parent("div").find("H1").text());
          // console.log($(this).parent("div").find("H1").text());
          $(this).parent("div").remove();
          // let deletedVariation = result.replace(($(this).parent("div").find("H1").text()), "")
          // console.log(deletedVariation);
          // if(deletedVariation =="ARMUT"){
          //   console.log("HELAL");
          // }
          var sound1 = new Audio('./sound effects/CorrectSoundEffect.mp3');
          let deletedVer = $(".outputText").text();
          console.log(deletedVer);
          
          var playSoundDeletedScenario = function () {
            if (deletedVer == "APHEXTWİN") {
              sound1.play();
              console.log("yiha");
             }
             //  else {
             
           //  }
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
         //  else {
         
       //  }
      };
      playSoundNormalScenario();

      //  var sound1 = new Audio('./sound effects/CorrectSoundEffect.mp3');
      


















    });


  };

});

$("#rules").click(function () {

  rules.parentElement.removeChild(rules);
  play.parentElement.removeChild(play);
});