class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("magenta");
    //write code to show a heading for showing the result of Quiz
    var results=createElement('h2');
    results.html("Quiz Results!");
    results.position(425,100);
    results.textSize(40);

    //call getContestantInfo( ) here
getContestantInfo(){
  var contestantRef = database.ref('contestantCount');
  contestantRef.on("value", (data)->{
    contestantCount= database.val();
  })
}

    //write condition to check if contestantInfor is not undefined
if(contestantInfo !== undefined){
  fill("blue");
  textSize(20);
  
    //write code to add a note here
    text("*Note: correct answers are green.", 130,230);
  }
    //write code to highlight contest who answered correctly
    
  }

}
