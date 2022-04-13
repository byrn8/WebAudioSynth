var env = {
  attack: 1.0,
  decay: 1.0,
  sustain: 0.5,
  release: 1.5
};
function createSynth()
{
var synth = new Tone.MonoSynth({
  oscillator: {
      type: "square"
  },
  envelope: {
       attack: env.attack,
       decay: 0.9,
       release: 1,
       sustain: 0.9,
  }
}).toMaster();
}
createSynth();

var data = ['C','D','E','F','G','A','B'];
var html = '';

for (var octave = 0; octave < 3; octave++)
{
  for (var i = 0; i < data.length; i++)
    {
      var hasSharp = true;
      var note = data[i];

      if (note == 'E' || note == 'B')
        hasSharp = false;

      html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this,false)' onmouseleave='noteUp(this,false)' data-note='${note + (octave+4)}'>`;

      if (hasSharp) {
        html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this,true)' data-note='${note + '#' + (octave+4)}'></div>`;
      }

      html += `</div>`;
    }
}
document.getElementById('container').innerHTML = html;

function noteUp(elem, isSharp)
{
  elem.style.background = isSharp ? '#777' : '';
  synth.triggerRelease();
}

function noteDown(elem, isSharp)
{
  var note = elem.dataset.note;

  elem.style.background = isSharp ? 'black' : '#ccc';
  synth.triggerAttackRelease(note);
  event.stopPropagation();
}

$("#attackRange").on("change", function() {
env.attack = Number($("#attackRange").val());
$("#attack").html($(this).val());
});
