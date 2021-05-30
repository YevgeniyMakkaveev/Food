const names = ['Peter', 'Adik', 'Izaslav', 'Qorban', 'Hui']

const shortNames = names.filter(function(name){
  return name.length< 5;
})
console.log(shortNames)

const answer = ['IvAN', 'ANNa', 'PiDoR']

const final = answer.map(item =>  item.toLowerCase())

console.log(final)

