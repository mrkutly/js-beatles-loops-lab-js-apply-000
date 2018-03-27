function theBeatlesPlay(musicians, instruments){
  sentences = [];
  for(i = 0; i < musicians.length; i++){
    newSentence = musicians[i] + " plays " + instruments[i] + ".";
    sentences.push(newSentence)
  }
}