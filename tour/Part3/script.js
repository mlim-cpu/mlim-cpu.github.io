//audio
function play() {
var audio = document.getElementById("audio")
audio.play();
}

function scramble() {
  document.getElementById("ct").style.display = 'none';
	document.getElementById("t").style.display = 'none';
}

function smoke() {
var e = document.getElementById("cloud");
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}
