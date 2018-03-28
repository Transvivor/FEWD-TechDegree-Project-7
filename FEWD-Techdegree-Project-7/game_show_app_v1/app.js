let letters = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let spaces = document.getElementById("phraseLetters");
let missed = 0;
var overlay = document.getElementById("overlay");
let startButton = document.getElementsByTagName("a")[0];
var phrases = ["An Afternoon Hiking", "Big Wave Surfing", "Video Gaming", "A Dip In The Pool", "A Game Of Blackjack"];
var letter = document.getElementsByClassName("letter");
let tries = document.getElementsByClassName("tries");
let correct = document.getElementsByClassName("show");


// Get Randon Phrase from the phrases array.
function getRandomPhraseAsArray(arr){
  var q = arr[Math.floor(Math.random() * arr.length )];
  console.log(q);
  return q.split("")
};

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(phraseArray){
  for (var i = 0; i < phraseArray.length; i++) {
    let li = document.createElement("LI");
    let text = document.createTextNode(phraseArray[i]);
    li.appendChild(text);
    spaces.appendChild(li);
    if (phraseArray[i].includes(" ")){
      li.className = "space";
    }else{
      li.className = "letter";
    };
  }
};
function checkLetter(btn){
  let letterFound = null;

  btn.className = ("error");
  btn.setAttribute('disabled', true) //disables button so it can not be pressed multiple times
  for (var i = 0; i < letter.length; i++) {
    if (btn.textContent.toLowerCase() === letter[i].textContent.toLowerCase()){
      btn.className = ("success");
      letter[i].classList.add("show");
      letterFound = letter[i].textContent;
    }
  }
  console.log(letterFound);
  if (letterFound === null) {
    missed ++;
    tries[0].className="tried";
  }
    console.log(missed)
};

function checkWin(){
  if (missed === 5) {
    overlay.style.display = "initial";
    overlay.classList.replace("start", "lose")
  }
  if (correct.length === letter.length){
    overlay.style.display = "initial";
    overlay.classList.replace("start", "win")
  }

};


letters.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON"){
    let btn = e.target;
    checkLetter(btn);
    checkWin();
}
});



var startGame = startButton.addEventListener("click", () => {
  overlay.style.display = "none";
  addPhraseToDisplay(phraseArray);
});
