// Code your solutions in this file
function writeCards(names, event){
    let messages = []

    for (let i = 0; i < names.length; i++){
        
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
   
    return messages;
}

let names = ["Jafet", "Sam", "Dillan"]
let event = "Birthday"
let messages = writeCards(names, event)




function countDown(number){
    for (let i = number; i >= 0; i--){
      console.log(i)
    }
  }
  
  countDown(10)