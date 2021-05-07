$(document).ready(function() {
 var entryCount = 0;
 var displayCount = 0;

  //captures key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

function createElement(k) {
  var elem = $('#cursor');
  if (k == "a" || k == "A") { elem.before('<span class="inner"><img src="assets/1.jpg"></span>'); }
  if (k == "b" || k == "B") { elem.before('<span class="inner"><img src="assets/2.jpg"></span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner"><img src="assets/3.jpg"></span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner"><img src="assets/4.jpg"></span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner"><img src="assets/5.jpg"></span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner"><img src="assets/6.jpg"></span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner"><img src="assets/7.jpg"></span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner"><img src="assets/8.jpg"></span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner"><img src="assets/9.jpg"></span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner"><img src="assets/10.jpg"></span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner"><img src="assets/11.jpg"></span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner"><img src="assets/12.jpg"></span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner"><img src="assets/13.jpg"></span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner"><img src="assets/14.jpg"></span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner"><img src="assets/15.jpg"></span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner"><img src="assets/16.jpg"></span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner"><img src="assets/17.jpg"></span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner"><img src="assets/18.jpg"></span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner"><img src="assets/19.jpg"></span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner"><img src="assets/20.jpg"></span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner"><img src="assets/21.jpg"></span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner"><img src="assets/22.jpg"></span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner"><img src="assets/23.jpg"></span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner"><img src="assets/24.jpg"></span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner"><img src="assets/25.jpg"></span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner"><img src="assets/26.jpg"></span>'); }
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>') };
}
//ties keypresses to images

document.querySelector('#button').addEventListener('click', function() {
        console.log("button is working")
        html2canvas(document.querySelector('.specific'), {
            onrendered: function(canvas) {
              return Canvas2Image.saveAsPNG(canvas);
            }
        });
    });
//adds a button that converts what the canvas looks like into a PNG

});

function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
//hidden state for the popup, removes the style elements

window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 1);
}
//displays popup window on load
