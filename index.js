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
  var b = [];
  var i = 0;
  do {
    b.push("I love the Beatles!");
    i++
  } while(i < 15)
  return b
}