let dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk()
let talkfunction = dog.talk
let boundfunction = talkfunction.bind(dog)
talkfunction()
boundfunction()

function talk(sound){
  console.log(sound)
}


// let talk = function () {
//   console.log(this.sound)
// }
// let boromir = {
//   sound: 'uffff!',
//   speak: talk.bind(talk )
// }
// let talkboundtobormit = talk.bind(boromir)
// talkboundtobormit()

// let bla = boromir.speak
// bla() 

function talk(sound){
  console.log(sound)
}
talk("sound")

function talk() {
  console.log(this.sound)
}

let animal = {
  talk: talk
}
animal.talk()e

const tests = [
  //test word length expected
  ['no word', '', undefined, 'N/A'],
  ['short word', 'Short', undefined, 'Short'],
  ['long word', 'Not so short', undefined, 'Not s...'],
['custom length', 'Not short', 15, 'Not short'],
] test.forEach((test) => {
const [assertion, word, length, expected] = test;
it(`supports ${assertion}`, () => {
expect(maybeTruncate(word,
length)).to.equal(expected)
})
})