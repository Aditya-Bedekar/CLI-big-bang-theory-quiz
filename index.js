//THE BIG BANG THEORY tv series  QUIZ APP//

var readlineSync = require('readline-sync');
var username = readlineSync.question("Enter your name ");
console.log('Hey!',username+' welcome to THE BIG BANG THEORY QUIZ');

var score =0;

var highscore =
{
name1:' Gayatri',
score1:'16',
name2:'Mahendra',
score2:'14',



}

function quiz(question,answer)
{

var useranswer = readlineSync.question(question)
if(useranswer == answer)
{

console.log("Correct !");
score= score+2;  
}
else
{
console.log("Incorrect !");

}
console.log("Current score is "+score);
console.log("--------------------------------");
}
var questions = [
  {question:"Which number is  best according to sheldon?\n",
  answer:"73"},

  {question:"Which college did howard attend?\n",
  answer:"mit"},
  
  {question:"Where does penny work initially?\n",
  answer:"cheesecake factory"},
  
  {question:"What is the profession of Leonards mother?\n",
  answer:"pyschologist"},
  
  {question:"Who is the only member of the cast to hold a PhD in real life ?(enter characters name)\n",
  answer:'amy'},

  {question:"what does raj refer to his house as?\n",
  answer:"raj mahal"},
   
  {question:"Which pair is the first to get married ?\n",
  answer:"howard and bernadette"},

  {question:"What was howards nickname at space station?\n",
  answer:"frootloops"},  
];

for(i=0;i<questions.length;i++)
{

  var currentq = questions[i];
  quiz(currentq.question,currentq.answer);

}
console.log("Fascinating you just completed the quiz//read in Sheldons tone xD//\nYour final score is:"+score);
console.log("Here is the highest scorer:",highscore.name1);
console.log("The highest score is :",highscore.score1);
