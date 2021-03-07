function clean(item) {
  console.log(`I just cleaned a ${item}`)
}
 
var nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]
 
for (var i = 0; i < nails.length; i++) {
  console.log(nails[i])
}
 
var planks = ["splintered plank", "straight plank", "bent plank"]
 
for (var i = 0; i < planks.length; i++) {
  clean(planks[i])
}
 
console.log('done!')