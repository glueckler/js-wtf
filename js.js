console.log(`hi`)

//

class Human {
  talk() {
    console.log(`I can talk`)
  }
}

// so class functions get added to the prototype
console.log(Human.prototype.talk())
// >> I can talk

class Me extends Human {}
console.log(Me.prototype)
// >> Human {constructor: ƒ}
// but they aren't equal which is fucked?? see...
console.log(Me.prototype === Human)
// >> false

//

const HumanConstructor = function HumanConstructor() {}

// prototype properties get put on instance's __proto__ property
// currently HumanConstructor's prototype is Object
HumanConstructor.prototype.saySomething = function() {
  console.log(`I say something `)
}
// therefore these properties are added to the Object object see..
console.log(Object.hasOwnProperty('saySomething'))
// >> false
// whoa.. where does the property get saved to?  I actually don't know yet..

const dan = new HumanConstructor()
console.log(dan.__proto__.toString())
// >> [object Object]

//

const HumanRobo = function HumanRobo() {}
HumanRobo.prototype = HumanConstructor
HumanRobo.prototype.apples = 'apples'
const roboDan = new HumanRobo()

console.log(roboDan.__proto__.toString())
// >> function HumanConstructor() {}

// but here's my point.. the apples property we added to prototype gets added to HumanConstructor
console.log(HumanConstructor.hasOwnProperty('apples'))
// >> true
