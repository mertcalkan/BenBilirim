var rules = document.getElementById("rules");
var play = document.getElementById("game");
var main = document.getElementById("main");
var letterCardsArea = document.getElementById("LetterCardsArea");
// Shuffling our array first of our code. just a preference. you can do it later. depends on algorithm which you set up.d
var UnShuffledQuestionIndexNumber = [1,2,3,4,5,6,7,8,9,10];
var indexOrigin = 0;
function shuffleArray(UnShuffledQuestionIndexNumber) {
  for (var i = UnShuffledQuestionIndexNumber.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * i); // no +1 here!
      var temp = UnShuffledQuestionIndexNumber[i];
      UnShuffledQuestionIndexNumber[i] = UnShuffledQuestionIndexNumber[j];
      UnShuffledQuestionIndexNumber[j] = temp;
  }
  // return UnShuffledQuestionIndexNumber;
  console.log(UnShuffledQuestionIndexNumber);
}
shuffleArray(UnShuffledQuestionIndexNumber);



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
    // if (playSoundNormalScenario() == true ) {
    // elementsCount = elementsCount - 1;
    // }
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
     
      
      var stringLetters = questions[(UnShuffledQuestionIndexNumber[indexOrigin])].mixedLetters.split("");
      // function shuffleletters(stringLetters) {
      //   for (var i = stringLetters.length - 1; i > 0; i--) {
      //       var j = Math.floor(Math.random() * i); // no +1 here!
      //       var temp = stringLetters[i];
      //       stringLetters[i] = stringLetters[j];
      //       stringLetters[j] = temp;
      //   }
      //   // return UnShuffledQuestionIndexNumber;
      //   console.log(stringLetters);
      // }
      // shuffleletters(stringLetters);
      DomArray[i].innerHTML = stringLetters[i];
      // console.log(stringLetters);






      //  letterCardsText.innerHTML = ["A" ,"B"];
      // writing a click function with our letters here.




    }

    var questionText = document.createElement("h3");
    questionText.className = "question";
    $("#questionAndSubmit").append(questionText);
    questionText.innerHTML = questions[(UnShuffledQuestionIndexNumber[indexOrigin])].question;
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
         
          var deletedVer = $(".outputText").text();
          console.log(deletedVer);
          
          $(".submitAnswer").click(function () {
            var sound1 = new Audio('./sound effects/CorrectSoundEffect.mp3 ');



            function playSoundDeletedScenario() {
              if (deletedVer == questions[(UnShuffledQuestionIndexNumber[indexOrigin])].answer) {
                
                sound1.play(
                  // waitingText.innerHTML = "Doğru Cevap!"
                );
                console.log("yiha");

              }
              //  else{
              //  soundSameWrong.play();
              //  }
            };
            playSoundDeletedScenario();
          });





        }

     

      });
      var soundSame = new Audio('./sound effects/CorrectSoundEffect.mp3 ');
      var soundSameWrong = new Audio('./sound effects/WrongSoundEffect.mp3 ');
      let result = $(".outputText").text();
      console.log(result);
      $(".submitAnswer").click(function () {



        function playSoundNormalScenario() {
          if (result == questions[(UnShuffledQuestionIndexNumber[indexOrigin])].answer) {
            //  deletedVer = "";
            // setTimeout(() => soundSame.play(


            // ), 500);
            soundSame.play(


            )
            // result = "";
            console.log("yiha");
            indexOrigin = indexOrigin + 1;
            console.log(UnShuffledQuestionIndexNumber[indexOrigin]);
            setTimeout(() => questionText.innerHTML = questions[(UnShuffledQuestionIndexNumber[indexOrigin])].question, 5500);
            setTimeout(() => $(".output").remove(), 5500);



            for (let x = 0; x < elementsCount; x++) {
              stringLetters = questions[(UnShuffledQuestionIndexNumber[indexOrigin])].mixedLetters.split("");
              // DomArray[i].innerHTML = stringLetters[i];
              setTimeout(() => DomArray[x].innerHTML = stringLetters[x], 5500);
              // return true;

            }



          } 
          // else{
          //   soundSameWrong.play();
          // }

          
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