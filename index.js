var i = 0;

function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (i = 0; i < musicians.length; i++) {
    var newSentence = musicians[i] + " plays " + instruments[i];
    sentences[i] = newSentence;
  }
  return sentences;
}

function johnLennonFacts(facts){
  var exclamation = []; 
  var i = 0;
  while (i < facts.length){
    var exclaimed = facts[i] + "!!!";
    exclamation[i] = exclaimed;
    i++;
  }
  return exclamation;
}