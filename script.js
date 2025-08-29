const keys = document.querySelectorAll('.key');

//Listener for all keys that runs function on click action
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

//playNote function definition
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  
  
//Add active style class to clicked elements
   key.classList.add('active');
//Remove active class
    noteAudio.addEventListener('ended', () => {
       key.classList.remove('active');
  });
}


const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

   // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }

 
});


//TTLS Notes - C C G G A A G, F F E E D D C, G G F F E E D, G G F F E E D, C C G G A A G, F F E E D D C

//TTLS 
