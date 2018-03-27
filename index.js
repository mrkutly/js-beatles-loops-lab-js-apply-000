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
  while (i < facts.length){
    var exclaimed = facts[i] + "!!!";
    exclamation.push(exclaimed);
    i++;
  }
  return exclamation;
}