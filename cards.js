dance = ["The Fortnite Dance"];
charades = ["One person on your team acts out the action, the others guess. Guess the word within 60 sec, or DRINK"];
truths = ["One person gives two truths and one lie about themselves. If your team guesses correctly, the other team drinks."];
categories = ["Choose a category, everyone names things in that category till someone hesitates or repeats a word, that player's team drinks."];




window.onload = function(){

  var y = Math.floor((Math.random() * 4) + 0);

if(y==0){
  var x = Math.floor((Math.random() * 1) + 0);
    document.getElementById("text").innerHTML = dance[x];
    document.getElementById("label").innerHTML = "Do the Dance";

document.getElementById("label").style.background = "#54C242";
}
if(y==1){
  var x = Math.floor((Math.random() * 1) + 0);
    document.getElementById("text").innerHTML = charades[x];
      document.getElementById("label").innerHTML = "Charades";
      document.getElementById("label").style.background = "#F2C94E";
}
if(y==2){
  var x = Math.floor((Math.random() * 1) + 0);
    document.getElementById("text").innerHTML = truths[x];
      document.getElementById("label").innerHTML = "2 Truths and a Lie";
      document.getElementById("label").style.background = "#DB3D3D";
}
if(y==3){
  var x = Math.floor((Math.random() * 1) + 0);
    document.getElementById("text").innerHTML = categories[x];
      document.getElementById("label").innerHTML = "Categories";
      document.getElementById("label").style.background = "#8D6DC7";
}

};


   window.addEventListener("submit", function() {
   var y=document.getElementById("date").value

   });
