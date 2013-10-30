var x = 0;
var y = 0;
var block = 24;
var step = 24;

var person = document.getElementById('person');
var grid = document.getElementById('grid');

function gridCreate(nBlocks) {
  grid.style.width = nBlocks*block+'px';
  grid.style.height = nBlocks*block+'px';
}

// ++++++++++++++

gridCreate(19);

function goRight() {
  x += step;
  person.style.left = x+'px';
}
function goLeft() {
  x -= step;
  person.style.left = x+'px';
}
function goUp() {
  y -= step;
  person.style.top = y+'px';
}
function goDown() {
  y += step;
  person.style.top = y+'px';
}

function move(){
  var keyPressed = event.keyCode;
    //alert(keyPressed);
  switch (keyPressed) {
   // A.
        case 97:
            goLeft();  
        break;
   // D.
        case 100:
            goRight();
        break;
   // W.
        case 119:
            goUp();
        break;
   // S.
        case 115:
            goDown();
        break;
  
          // Right arrow.
        case 39:
          X = X + 30;
          if (X > 270) {
            X = 270;
            flag = 1;
          }
          break;    
  }

}

document.body.onkeypress = move;