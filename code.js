var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["15e19637-f600-433e-ab85-8b36167dda88","d2e475e1-e353-46b6-851e-ec9392685f9c","9592551d-d53f-4524-9aa0-f0f27c13c82a","56902501-bf9f-4c15-82b4-3e0606eda22a","1caf219a-e97d-464f-81e7-67bd33962ac8"],"propsByKey":{"15e19637-f600-433e-ab85-8b36167dda88":{"name":"zombie.jpg_1","sourceUrl":"assets/v3/animations/NrfY9CZ7eHrLZbh2D-y3KgqiSJl80Q1GaZayRRUT9KM/15e19637-f600-433e-ab85-8b36167dda88.png","frameSize":{"x":1011,"y":1390},"frameCount":1,"looping":true,"frameDelay":4,"version":"Oydh8wVtxLGbz_V9XRxBwqOS8jeF2t5Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":1011,"y":1390},"rootRelativePath":"assets/v3/animations/NrfY9CZ7eHrLZbh2D-y3KgqiSJl80Q1GaZayRRUT9KM/15e19637-f600-433e-ab85-8b36167dda88.png"},"d2e475e1-e353-46b6-851e-ec9392685f9c":{"name":"zombie 3.jpg_1","sourceUrl":"assets/v3/animations/NrfY9CZ7eHrLZbh2D-y3KgqiSJl80Q1GaZayRRUT9KM/d2e475e1-e353-46b6-851e-ec9392685f9c.png","frameSize":{"x":282,"y":470},"frameCount":1,"looping":true,"frameDelay":4,"version":"dRMOEs4_dwB6LYZqbf1J5Obpy3Bqjgiq","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":470},"rootRelativePath":"assets/v3/animations/NrfY9CZ7eHrLZbh2D-y3KgqiSJl80Q1GaZayRRUT9KM/d2e475e1-e353-46b6-851e-ec9392685f9c.png"},"9592551d-d53f-4524-9aa0-f0f27c13c82a":{"name":"blue_hoodie_backpack_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","frameSize":{"x":119,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"},"56902501-bf9f-4c15-82b4-3e0606eda22a":{"name":"download.png_1","sourceUrl":"assets/v3/animations/NrfY9CZ7eHrLZbh2D-y3KgqiSJl80Q1GaZayRRUT9KM/56902501-bf9f-4c15-82b4-3e0606eda22a.png","frameSize":{"x":212,"y":238},"frameCount":1,"looping":true,"frameDelay":4,"version":"prAPoiu28SHnWAA6eoiyDgW9VohYIl3c","loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":238},"rootRelativePath":"assets/v3/animations/NrfY9CZ7eHrLZbh2D-y3KgqiSJl80Q1GaZayRRUT9KM/56902501-bf9f-4c15-82b4-3e0606eda22a.png"},"1caf219a-e97d-464f-81e7-67bd33962ac8":{"name":"commercial_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/k4bJZ8zfWtKVHSmyQ19oGbUaH3MhRiai/category_buildings/commercial_07.png","frameSize":{"x":316,"y":216},"frameCount":1,"looping":true,"frameDelay":2,"version":"k4bJZ8zfWtKVHSmyQ19oGbUaH3MhRiai","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":216},"rootRelativePath":"assets/api/v1/animation-library/gamelab/k4bJZ8zfWtKVHSmyQ19oGbUaH3MhRiai/category_buildings/commercial_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life=0;

var zombie1;
zombie1=createSprite(200,204,10,10);
zombie1.setAnimation("zombie 3.jpg_1");
zombie1.scale=0.2;



var zombie2;
zombie2=createSprite(318,204,10,10);
zombie2.setAnimation("zombie 3.jpg_1");
zombie2.scale=0.2;

var zombie3;
zombie3=createSprite(105,245,10,10);
zombie3.setAnimation("zombie 3.jpg_1");
zombie3.scale=0.2;

var zombie4;
zombie4=createSprite(349,89,10,10);
zombie4.setAnimation("zombie 3.jpg_1");
zombie4.scale=0.2;


var boy;
boy=createSprite(27,52,10,10);
boy.setAnimation("blue_hoodie_backpack_1");
boy.scale=0.2;



var house;
house=createSprite(355,370,10,10);
house.setAnimation("commercial_07_1");
house.scale=0.4;



zombie1.velocityX=0;
zombie1.velocityY=10;
zombie2.velocityX=10;
zombie2.velocityY=0;
zombie3.velocityX=10;
zombie3.velocityY=0;
zombie4.velocityX=0;
zombie4.velocityY=10;





function draw() {
background("white");
text("LIFE:"+life,297,16);

  

createEdgeSprites();
zombie1.bounceOff(topEdge);
zombie1.bounceOff(bottomEdge);
zombie1.bounceOff(rightEdge);
zombie1.bounceOff(leftEdge);
zombie2.bounceOff(topEdge);
zombie2.bounceOff(bottomEdge);
zombie2.bounceOff(rightEdge);
zombie2.bounceOff(leftEdge);
zombie3.bounceOff(topEdge);
zombie3.bounceOff(bottomEdge);
zombie3.bounceOff(rightEdge);
zombie3.bounceOff(leftEdge);
zombie4.bounceOff(topEdge);
zombie4.bounceOff(bottomEdge);
zombie4.bounceOff(rightEdge);
zombie4.bounceOff(leftEdge);
boy.bounceOff(topEdge);
boy.bounceOff(bottomEdge);
boy.bounceOff(rightEdge);
boy.bounceOff(leftEdge);


if (keyDown("up")) {
  boy.y=boy.y-3;
  playSound("assets/category_digital/error_3.mp3", false);
  
  
}
if (keyDown("down")) {
  boy.y=boy.y+3;
  playSound("assets/category_digital/error_3.mp3", false);
  
}

if (keyDown("right")) {
  boy.x=boy.x+3;
  playSound("assets/category_digital/error_3.mp3", false);
  
}

if (keyDown("left")) {
  boy.x=boy.x-3;
  playSound("assets/category_digital/error_3.mp3", false);
  
}

if (zombie1.isTouching(boy)||
zombie2.isTouching(boy)||
zombie3.isTouching(boy)||
zombie4.isTouching(boy)) {
 playSound("assets/category_alerts/cartoon_negative_bling.mp3", false);
  textSize(50);
  boy.x=27;
  boy.y=52;
  life=life+1;
  
}










  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
