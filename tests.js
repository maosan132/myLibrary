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