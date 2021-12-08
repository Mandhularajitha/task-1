var readline=require("readline-sync");
var username=readline.question("what is your name")
var score=0
console.log("welcome to Rajitha's quiz")
console.log("welcome"+username)
function check(question,answer,options){
  console.log(question)
  for(var i=0;i<options.length;i++){
  console.log(i+1,options[i])
}
  var useranswer=readline.questionInt("select your options:")
  if (useranswer===currentquestion.answer){
    console.log("you are right")
    score++
  }
  else{
    console.log("you are wrong")
  }
    console.log(" your currentscore "+score)
    console.log("________")
  }

  var questionBank=[
    {question:"where did Rajitha staying?",
    options:["Bangalore","hyderabad","delhi","pune"],
    answer:1
    
  },
  {
    question:"what is Rajitha's  favourite color?",
    options:["pink","green","yellow","orange"],
    answer:1
  },
  {
    question:"what is Rajitha's favourite Bike?",
    options:["yamaha","royal Enfileld","Hero Splendor plus","KTM200"],
    answer:2

  },{
      question:"who is Rajitha's favourite movie?",
      options:["veer-zaara","the lunchbox","lust stories","dady"],
      answer:4
  },
{
    question:"who is Rajitha's favourite Book ?",
    options:["harry potter","a suitable boy","the grate indian navel","indian's war"],
    answer:4

}]
for (var i=0;i<questionBank.length;i++){
var currentquestion=questionBank[i]
check(currentquestion.question,currentquestion.answer,currentquestion.options)

}
var scorebank=[
  {name:"Rajitha",score:2
},{
  name:"Shiri",score:3

}]
console.log("boom!,if your get  high score send me a screenshot tell me i will update")


for (var i=0;i<scorebank.length;i++){
console.log(scorebank[i].name,scorebank[i].score)
}