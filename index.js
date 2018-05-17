function theBeatlesPlay(musicians, intruments) {
  var a = [];
  for (var i = 0; i <= musicians.length - 1; i++) {
    a.push(`"${musicians[i]} plays ${intruments[i]}"`)
  }
  return a
}
