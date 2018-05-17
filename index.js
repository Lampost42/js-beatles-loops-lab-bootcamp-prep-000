function theBeatlesPlay(musicians, intruments) {
  var a = [];
  for (var i = 0; i < musicians.length; i++) {
    a.push(`${musicians[i]} plays ${intruments[i]}`)
  }
  return a
}
function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++
  }
  return facts
}
function iLoveTheBeatles(n) {
  
}