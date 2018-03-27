function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  i = 0
  for (i = 0; i < musicians.length; i++) {
    newSentence = musicians[i] + " plays " + instruments[i] + ".";
    sentences.push(newSentence);
  }
  return sentences;
}