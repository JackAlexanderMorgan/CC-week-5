let myWords = ["Every", "girl", "deserves", "to", "take", "part", "in", "creating", "the", "technology", "that", "will", "change", "our world"];


function setup() {
  // put setup code here
  createCanvas = (1024,400);
  backgroud = (150);
  noLoop();
}

function draw() {
  // put drawing code here
  for (var i = 0; i < myWords.length; i++) {
    console.log(myWords[i]);
  }
  
}
