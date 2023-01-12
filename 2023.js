// variables
  x=1
  console.log("world")
//   strings
alert("are you ready to play")

// step1
// the user provides an option
let option = prompt("input your option").toLowerCase()
console.log(option)
// step2
// computer provides option
let computerOptioN
let options = ["rock",
 "scissors","paper"]
let rand =Math.floor(Math.random()*3)
console.log(rand)
computerOptioN = options[rand]
// "scissor"
// step3
// user option against computer option
if (option == computerOptioN) {
    alert("its a draw")
}
else if (option=="paper"&& computerOptioN =="rock"){
    alert("you won")

}
else if(option=="paper"&& computerOptioN =="scissors"){
        alert("you lost")
}
else if(option=="rock"&& computerOptioN =="scissors"){
    alert("you won")
    }
else if(option=="rock"&& computerOptioN =="paper"){
        alert("you lost")
        }
            
 else if(option=="scissors"&& computerOptioN =="paper"){
            alert("you won")
            }
else if(option=="scissors"&& computerOptioN =="rock"){
                alert("you lost")
                }
else{
    alert("RELOAD and pick a game")
}
                console.log(option)


alert(`you picked ${option} and the computer picked ${computerOptioN}`)