var synth = new Tone.MonoSynth({
}).toMaster();

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

      html += `<div class='notew' onmousedown='noteDown(this, false)' onmouseup='noteUp(this,false)' onmouseleave='noteUp(this,false)' data-note='${note + (octave+4)}'>`;

      if (hasSharp) {
        html += `<div class='noteb' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this,true)' data-note='${note + '#' + (octave+4)}'></div>`;
      }

      html += `</div>`;
    }
}

document.getElementById('container').innerHTML = html;

function noteUp(elem, isSharp)
{
  elem.style.background = isSharp ? 'black' : '';
  synth.triggerRelease();
}

function noteDown(elem, isSharp)
{
  var note = elem.dataset.note;

  elem.style.background = isSharp ? '#777' : '#ccc';
  synth.triggerAttackRelease(note, "1n");
  event.stopPropagation();
}

//////AMPLITUDE ENVELOPE////////////////////////////////////////////////////////

var ampEnvAttackSlider = document.getElementById("ampEnvAttackRange");
var ampEnvAttackOutput = document.getElementById("demo1");
ampEnvAttackOutput.innerHTML = ampEnvAttackSlider.value;
ampEnvAttackSlider.oninput = function changeAmpEnvAttack()
{
  ampEnvAttackOutput.innerHTML = this.value;
  synth.envelope.attack = this.value;
}

var ampEnvDecaySlider = document.getElementById("ampEnvDecayRange");
var ampEnvDecayOutput = document.getElementById("demo2");
ampEnvDecayOutput.innerHTML = ampEnvDecaySlider.value;
ampEnvDecaySlider.oninput = function changeAmpEnvDecay()
{
  ampEnvDecayOutput.innerHTML = this.value;
  synth.envelope.decay = this.value;
}

var ampEnvSustainSlider = document.getElementById("ampEnvSustainRange");
var ampEnvSustainOutput = document.getElementById("demo3");
ampEnvSustainOutput.innerHTML = ampEnvSustainSlider.value;
ampEnvSustainSlider.oninput = function changeAmpEnvSustain()
{
  ampEnvSustainOutput.innerHTML = this.value;
  synth.envelope.sustain = this.value;
}

var ampEnvReleaseSlider = document.getElementById("ampEnvReleaseRange");
var ampEnvReleaseOutput = document.getElementById("demo4");
ampEnvReleaseOutput.innerHTML = ampEnvReleaseSlider.value;
ampEnvReleaseSlider.oninput = function changeAmpEnvRelease()
{
  ampEnvReleaseOutput.innerHTML = this.value;
  synth.envelope.release = this.value;
}

var ampEnvAttackCurveType = document.getElementById("ampenvattackcurve");
function changeAmpEnvAttackCurve()
{
  var val = ampEnvAttackCurveType.options[ampEnvAttackCurveType.selectedIndex].value;
  switch (val) {
    case "1":
      synth.envelope.attackCurve = "linear";
      break;
    case "2":
      synth.envelope.attackCurve = "exponential";
      break;
    case "3":
      synth.envelope.attackCurve = "sine";
      break;
    case "4":
      synth.envelope.attackCurve = "cosine";
      break;
    case "5":
      synth.envelope.attackCurve = "bounce";
      break;
    case "6":
      synth.envelope.attackCurve = "ripple";
      break;
    case "7":
      synth.envelope.attackCurve = "step";
      break;
  }
}

var ampEnvDecayCurveType = document.getElementById("ampenvdecaycurve");
function changeAmpEnvDecayCurve()
{
  var val1 = ampEnvDecayCurveType.options[ampEnvDecayCurveType.selectedIndex].value;
  switch (val1) {
    case "1":
      synth.envelope.decayCurve = "exponential";
      break;
    case "2":
      synth.envelope.decayCurve = "linear";
      break;
  }
}

var ampEnvReleaseCurveType = document.getElementById("ampenvreleasecurve");
function changeAmpEnvReleaseCurve()
{
  var val2 = ampEnvReleaseCurveType.options[ampEnvReleaseCurveType.selectedIndex].value;
  switch (val2) {
    case "1":
      synth.envelope.releaseCurve = "exponential";
      break;
    case "2":
      synth.envelope.releaseCurve = "linear";
      break;
    case "3":
      synth.envelope.releaseCurve = "sine";
      break;
    case "4":
      synth.envelope.releaseCurve = "cosine";
      break;
    case "5":
      synth.envelope.releaseCurve = "bounce";
      break;
    case "6":
      synth.envelope.releaseCurve = "ripple";
      break;
    case "7":
      synth.envelope.releaseCurve = "step";
      break;
  }
}

//////FREQUENCY ENVELOPE////////////////////////////////////////////////////////

var freqEnvAttackSlider = document.getElementById("freqEnvAttackRange");
var freqEnvAttackOutput = document.getElementById("demo5");
freqEnvAttackOutput.innerHTML = freqEnvAttackSlider.value;
freqEnvAttackSlider.oninput = function changeFreqEnvAttack()
{
  freqEnvAttackOutput.innerHTML = this.value;
  synth.filterEnvelope.attack = this.value;
}

var freqEnvDecaySlider = document.getElementById("freqEnvDecayRange");
var freqEnvDecayOutput = document.getElementById("demo6");
freqEnvDecayOutput.innerHTML = freqEnvDecaySlider.value;
freqEnvDecaySlider.oninput = function changeFreqEnvDecay()
{
  freqEnvDecayOutput.innerHTML = this.value;
  synth.filterEnvelope.decay = this.value;
}

var freqEnvSustainSlider = document.getElementById("freqEnvSustainRange");
var freqEnvSustainOutput = document.getElementById("demo7");
freqEnvSustainOutput.innerHTML = freqEnvSustainSlider.value;
freqEnvSustainSlider.oninput = function changeFreqEnvSustain()
{
  freqEnvSustainOutput.innerHTML = this.value;
  synth.filterEnvelope.sustain = this.value;
}

var freqEnvReleaseSlider = document.getElementById("freqEnvReleaseRange");
var freqEnvReleaseOutput = document.getElementById("demo8");
freqEnvReleaseOutput.innerHTML = freqEnvReleaseSlider.value;
freqEnvReleaseSlider.oninput = function changeFreqEnvRelease()
{
  freqEnvReleaseOutput.innerHTML = this.value;
  synth.filterEnvelope.release = this.value;
}

var freqEnvAttackCurveType = document.getElementById("freqenvattackcurve");
function changeFreqEnvAttackCurve()
{
  var val = freqEnvAttackCurveType.options[freqEnvAttackCurveType.selectedIndex].value;
  switch (val) {
    case "1":
      synth.filterEnvelope.attackCurve = "linear";
      break;
    case "2":
      synth.filterEnvelope.attackCurve = "exponential";
      break;
    case "3":
      synth.filterEnvelope.attackCurve = "sine";
      break;
    case "4":
      synth.filterEnvelope.attackCurve = "cosine";
      break;
    case "5":
      synth.filterEnvelope.attackCurve = "bounce";
      break;
    case "6":
      synth.filterEnvelope.attackCurve = "ripple";
      break;
    case "7":
      synth.filterEnvelope.attackCurve = "step";
      break;
  }
}

var freqEnvDecayCurveType = document.getElementById("freqenvdecaycurve");
function changeFreqEnvDecayCurve()
{
  var val1 = freqEnvDecayCurveType.options[freqEnvDecayCurveType.selectedIndex].value;
  switch (val1) {
    case "1":
      synth.filterEnvelope.decayCurve = "exponential";
      break;
    case "2":
      synth.filterEnvelope.decayCurve = "linear";
      break;
  }
}

var freqEnvReleaseCurveType = document.getElementById("freqenvreleasecurve");
function changeFreqEnvReleaseCurve()
{
  var val2 = freqEnvReleaseCurveType.options[freqEnvReleaseCurveType.selectedIndex].value;
  switch (val2) {
    case "1":
      synth.filterEnvelope.releaseCurve = "exponential";
      break;
    case "2":
      synth.filterEnvelope.releaseCurve = "linear";
      break;
    case "3":
      synth.filterEnvelope.releaseCurve = "sine";
      break;
    case "4":
      synth.filterEnvelope.releaseCurve = "cosine";
      break;
    case "5":
      synth.filterEnvelope.releaseCurve = "bounce";
      break;
    case "6":
      synth.filterEnvelope.releaseCurve = "ripple";
      break;
    case "7":
      synth.filterEnvelope.releaseCurve = "step";
      break;
  }
}

//////OSCILLATOR////////////////////////////////////////////////////////////////

var oscType = document.getElementById("osc");
function changeOscType()
{
  var val3 = oscType.options[oscType.selectedIndex].value;
  switch (val3) {
    case "1":
      synth.oscillator.type = "sawtooth";
      break;
    case "2":
      synth.oscillator.type = "sine";
      break;
    case "3":
      synth.oscillator.type = "sine2";
      break;
    case "4":
      synth.oscillator.type = "triangle";
      break;
    case "5":
      synth.oscillator.type = "square";
      break;
  }
}

//////VOLUME////////////////////////////////////////////////////////////////////

var volumeSlider = document.getElementById("volumerange");
var volumeOutput = document.getElementById("vol");
volumeOutput.innerHTML = volumeSlider.value;
volumeSlider.oninput = function changeVolume()
{
  volumeOutput.innerHTML = this.value;
  synth.volume.value = this.value;
}

//////FILTER////////////////////////////////////////////////////////////////////

var filType = document.getElementById("filtype");
function changeFilType()
{
  var val4 = filType.options[filType.selectedIndex].value;
  switch (val4) {
    case "1":
      synth.filter.type = "lowpass";
      break;
    case "2":
      synth.filter.type = "highpass";
      break;
    case "3":
      synth.filter.type = "bandpass";
      break;
    case "4":
      synth.filter.type = "lowshelf";
      break;
    case "5":
      synth.filter.type = "highshelf";
      break;
    case "6":
      synth.filter.type = "notch";
      break;
    case "7":
      synth.filter.type = "allpass";
      break;
    case "8":
      synth.filter.type = "peaking";
      break;
  }
}

var filRolloff = document.getElementById("filrolloff");
function changeFilRolloff()
{
  var roll = filRolloff.options[filRolloff.selectedIndex].value;
  switch (roll) {
    case "1":
      synth.filter.rolloff = "-12";
      break;
    case "2":
      synth.filter.rolloff = "-24";
      break;
    case "3":
      synth.filter.rolloff = "-48";
      break;
    case "4":
      synth.filter.rolloff = "-96";
      break;
  }
}

var filterQSlider = document.getElementById("filterqrange");
var filterQOutput = document.getElementById("q");
filterQOutput.innerHTML = filterQSlider.value;
filterQSlider.oninput = function changeFilterQ()
{
  filterQOutput.innerHTML = this.value;
  synth.filter.Q.value = this.value;
}
