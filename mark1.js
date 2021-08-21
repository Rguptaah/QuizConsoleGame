let countScore = 0;
let  readlineSync =  require("readline-sync");
let userName = readlineSync.question("What is your Name??  ");
console.log("Welcome " + userName + " to Html And Css Questionnaire.");
 function questionnaire(quest,ans){
     let reply = readlineSync.question(quest);
     if(reply == ans)
     {
         console.log("Right!");
         countScore++;
     }
     else{
        console.log("Wrong!");
     }
     console.log(`Your current Score : ${countScore}`);
     console.log("=========================");
 }
 

 let questions = [{
    ques: "Write Full Form of HTML.",
    ans: "Hyper Text Markup Language",
 },
{
    ques: "What is the full form of CSS?",
    ans: "Cascading Style Sheets",
},
{
    ques: "Write tag for hyperlink in html.",
    ans: "<a href=''></a>",
}
];

let users =[
    {
        name: "Rahul",
        score: 3,
    },
    {
        name: "Manya",
        score: 2,
    },
];

for(let i=0; i<questions.length; i++){
    let arrObj = questions[i];
    questionnaire(arrObj.ques,arrObj.ans);
}

console.log(`Yay! Your Score is ${countScore}`);

for(let i=0; i<users.length;i++){
    if( countScore >users[i].score){
        users[i].name = userName;
        users[i].score = countScore;
    }
}
console.log("Here is the name of high scorer");
for(let i=0; i<users.length;i++){
    console.log(users[i].name + ":" + users[i].score);
}



