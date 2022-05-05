


var rules = document.getElementById("rules");
var play = document.getElementById("game");
var main = document.getElementById("main");
var letterCardsArea = document.getElementById("LetterCardsArea");


$("#game").click(function () {

  // rules.parentElement.removeChild(rules);
  // play.parentElement.removeChild(play);
  $("#game").remove();
  $("#rules").remove();

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
      letterCardsArea.appendChild(element);
      var letterCardsText = document.createElement("h1");
      letterCardsText.classList.add("letterCardsText");
      element.appendChild(letterCardsText);
      //  var clickedLetter = $(" .letterCards toggle > .letterCardsText").textContent;
      //  $("div.toggle").find("").find()
      //  var clickedLetter = $('.letterCards.toggle').find('.letterCardsText').text($("h1"));
      //  var clickedLetter = document.querySelector('.letterCards').textContent;



      var node = document.querySelectorAll('.letterCardsText');
      // var currentLetters = ['A', 'P', 'H', 'E', 'X', 'T', 'W', 'İ', 'N', 'G', 'A', 'B', 'C'];
      var DomArray = Array.from(node);
      // DomArray[i].innerHTML = currentLetters[i];
      // console.log(currentLetters.values);
      var stringLetters = questions[0].mixedLetters.split("");
      DomArray[i].innerHTML = stringLetters[i];
      // console.log(stringLetters);

      




      //  letterCardsText.innerHTML = ["A" ,"B"];
      // writing a click function with our letters here.




    }
    
     var questionText = document.createElement("h3");
     questionText.className = "question";
     $("#questionAndSubmit").append(questionText);
     questionText.innerHTML = questions[0].question;
     var submitAnswer = document.createElement("button");
     submitAnswer.className = "submitAnswer";
     $("#questionAndSubmit").append(submitAnswer);
     submitAnswer.innerHTML = "Doğru mu Görelim";


    // window.onbeforeunload = function () {
    //   return "Are you sure you want to close the window?";
    // }
    // creating elements dynamically with javascript during the game.

    
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
          $(".submitAnswer").click(function () {
          // var sound1 = new Audio('./sound effects/CorrectSoundEffect.mp3 ');
          var deletedVer = $(".outputText").text();
          console.log(deletedVer);
          
          // let playSoundDeletedScenario = function () {
          //   if (deletedVer == questions[0].answer) {
          //     sound1.play(
          //       // waitingText.innerHTML = "Doğru Cevap!"
          //     );
          //     console.log("yiha");
              
          //    }
          //    //  else {
             
          //  //  }
          // };
          // playSoundDeletedScenario();
        });





        }



      });
      $(".submitAnswer").click(function () {
       
        let result = $(".outputText").text();
      console.log(result);
        
        let playSoundNormalScenario = function () {
          var soundSame = new Audio('./sound effects/CorrectSoundEffect.mp3');
          if (result == questions[0].answer ) {
            soundSame.play();
            console.log("yiha");
              setTimeout(() => questionText.innerHTML = questions[1].question, 6500);
              setTimeout(() =>  $(".output" ).remove(), 6500);
              
              
             
              for (let x = 0; x < elementsCount; x++){
                stringLetters = questions[1].mixedLetters.split("");
                // DomArray[i].innerHTML = stringLetters[i];
                setTimeout(() => DomArray[x].innerHTML = stringLetters[x] , 6500); 
               
              }
              
              
           
           }
           //  else {
           
         //  }
        };
        playSoundNormalScenario();
      });
      
     
     
       

      //  var sound1 = new Audio('./sound effects/CorrectSoundEffect.mp3');
      


















    });


  };

});

// $("#rules").click(function () {

//   rules.parentElement.removeChild(rules);
//   play.parentElement.removeChild(play);
// });