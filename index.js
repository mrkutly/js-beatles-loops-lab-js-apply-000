function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (i = 0; i < musicians.length; i++) {
    newSentence = musicians[i] + " plays " + instruments[i];
    sentences[i] = newSentence;
  }
  return sentences;
}