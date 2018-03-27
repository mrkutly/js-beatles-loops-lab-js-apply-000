function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (iteration = 0; iteration < musicians.length; iteration++) {
    newSentence = musicians[i] + " plays " + instruments[i] + ".";
    sentences.push(newSentence);
  }
  return sentences;
}