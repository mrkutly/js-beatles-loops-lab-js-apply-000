var i = 0;

function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (i = 0; i < musicians.length; i++) {
    var newSentence = musicians[i] + " plays " + instruments[i];
    sentences[i] = newSentence;
  }
  return sentences;
}

var i = 0

function johnLennonFacts(facts){
  var exclamation = []; 
  while (i < facts.length){
    var exclaimed = facts[i] + "!!!";
    exclamation[i] = exclaimed;
    i++;
  }
  return exclamation;
}