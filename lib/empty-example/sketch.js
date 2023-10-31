let myWords = ["Every", "girl", "deserves", "to", "take", "part", "in", "creating", "the", "technology", "that", "will", "change", "our world"];
let xVal = 20;
let yVal = 50;

function setup() {
  // put setup code here
  createCanvas (1024,400);
  background (150);
  noLoop();
  myWords.push("and", "change", "who", "runs", "it");
}

function draw() {
  // put drawing code here
  for (var i = 0; i < myWords.length; i++) {
    
    console.log(myWords[i]);
    console.log(xVal);
    xVal += 50;
    yVal += 10;
    text(myWords [i], xVal, yVal);
    textAlign(CENTER);
    
    
  }
  
}
