var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2095f0e5-66da-4d3e-8c7e-cbcd472c689a","88f91f4a-b527-4aa9-8a89-c1ce69e68390","c3d01816-9e9c-4625-97e3-03e2ce357fc8","d06fa5bb-ed93-4e69-9d8e-95866abda54a","a081d603-d453-4c05-a5bc-36689d99d2d3","6ec6eaf5-f9a4-44be-9371-fa5786e23188","0f85c132-6766-4602-9fa5-76db716b392f","966e1ea2-3d61-4774-bf11-8b6e9dd23f1e","11e3c437-a1b4-421c-a9fa-14201ef72982","fa510ce4-b28c-4acb-bd18-ef938330a1e4","cf8a1074-44ee-4dfc-a261-89287c986caa","0cc27f66-5ad4-438e-8d7d-75fcbf8a619e","a4fde81b-86f4-41d4-a9b0-b4df97a75705"],"propsByKey":{"2095f0e5-66da-4d3e-8c7e-cbcd472c689a":{"name":"doremon1.png_1","sourceUrl":null,"frameSize":{"x":81,"y":116},"frameCount":1,"looping":true,"frameDelay":12,"version":"ryrhgpWx_5CTiu196XPuRvZykEfkxAOu","loadedFromSource":true,"saved":true,"sourceSize":{"x":81,"y":116},"rootRelativePath":"assets/2095f0e5-66da-4d3e-8c7e-cbcd472c689a.png"},"88f91f4a-b527-4aa9-8a89-c1ce69e68390":{"name":"doremon.png_1","sourceUrl":null,"frameSize":{"x":103,"y":135},"frameCount":1,"looping":true,"frameDelay":12,"version":"oRtDSV40nUjDtyjQ_nyCcXQcAi_8RGTs","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":135},"rootRelativePath":"assets/88f91f4a-b527-4aa9-8a89-c1ce69e68390.png"},"c3d01816-9e9c-4625-97e3-03e2ce357fc8":{"name":"playground","sourceUrl":null,"frameSize":{"x":369,"y":169},"frameCount":1,"looping":true,"frameDelay":12,"version":"7R_FSqVkFYZqUgcHb9EIKnV3_UUCibvm","loadedFromSource":true,"saved":true,"sourceSize":{"x":369,"y":169},"rootRelativePath":"assets/c3d01816-9e9c-4625-97e3-03e2ce357fc8.png"},"d06fa5bb-ed93-4e69-9d8e-95866abda54a":{"name":"wall.png_1","sourceUrl":"assets/v3/animations/IAIj_sp06bBXQp-T_TaEBcXhzKYgMyx5dUlK2Z1Nt6Y/d06fa5bb-ed93-4e69-9d8e-95866abda54a.png","frameSize":{"x":126,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"TxdbCX_jq4FMf3ivIH7izouPpWOMPlQ0","loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":50},"rootRelativePath":"assets/v3/animations/IAIj_sp06bBXQp-T_TaEBcXhzKYgMyx5dUlK2Z1Nt6Y/d06fa5bb-ed93-4e69-9d8e-95866abda54a.png"},"a081d603-d453-4c05-a5bc-36689d99d2d3":{"name":"wall1.png_1","sourceUrl":null,"frameSize":{"x":30,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"xt4O_KKoBEbQf5f3zZh..Ow4SnLDW1jD","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":131},"rootRelativePath":"assets/a081d603-d453-4c05-a5bc-36689d99d2d3.png"},"6ec6eaf5-f9a4-44be-9371-fa5786e23188":{"name":"spring","sourceUrl":"assets/api/v1/animation-library/gamelab/pJCxbSzoKbyMLi_XnMeuWMyJUwopCrpW/category_video_games/spring_in_out.png","frameSize":{"x":147,"y":112},"frameCount":3,"looping":true,"frameDelay":20,"version":"pJCxbSzoKbyMLi_XnMeuWMyJUwopCrpW","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":441,"y":112},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pJCxbSzoKbyMLi_XnMeuWMyJUwopCrpW/category_video_games/spring_in_out.png"},"0f85c132-6766-4602-9fa5-76db716b392f":{"name":"over1.png_1","sourceUrl":null,"frameSize":{"x":297,"y":162},"frameCount":1,"looping":true,"frameDelay":12,"version":"nI1i6ND.0WJFX26._9pFN6smFxU3lvmK","loadedFromSource":true,"saved":true,"sourceSize":{"x":297,"y":162},"rootRelativePath":"assets/0f85c132-6766-4602-9fa5-76db716b392f.png"},"966e1ea2-3d61-4774-bf11-8b6e9dd23f1e":{"name":"coin.png_1","sourceUrl":null,"frameSize":{"x":125,"y":126},"frameCount":1,"looping":true,"frameDelay":12,"version":"g7EtOIZWu9Ztlm12dTowKPvGuJgW2FA0","loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":126},"rootRelativePath":"assets/966e1ea2-3d61-4774-bf11-8b6e9dd23f1e.png"},"11e3c437-a1b4-421c-a9fa-14201ef72982":{"name":"coin1.png_1","sourceUrl":null,"frameSize":{"x":288,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"FMKrsCHtrSB1Fo_gZpaUseMPezp0XtSt","loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":290},"rootRelativePath":"assets/11e3c437-a1b4-421c-a9fa-14201ef72982.png"},"fa510ce4-b28c-4acb-bd18-ef938330a1e4":{"sourceSize":{"x":236,"y":200},"frameSize":{"x":236,"y":200},"frameCount":1,"frameDelay":4,"name":"play.png_1","sourceUrl":"assets/v3/animations/xi1DcsdypOcAVuwV-CGJ6LBBmuCD6qDxDj7hcoH4oxc/fa510ce4-b28c-4acb-bd18-ef938330a1e4.png","size":83233,"version":"WSVTeX9_QyeD4K4MsCuBofO5F86PAvf6","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/xi1DcsdypOcAVuwV-CGJ6LBBmuCD6qDxDj7hcoH4oxc/fa510ce4-b28c-4acb-bd18-ef938330a1e4.png"},"cf8a1074-44ee-4dfc-a261-89287c986caa":{"sourceSize":{"x":46,"y":20},"frameSize":{"x":46,"y":20},"frameCount":1,"frameDelay":12,"name":"jj.png_1","sourceUrl":null,"size":2432,"version":"D5IOIMAYhhwzevigQxE8fdTfYmWp1xLD","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/cf8a1074-44ee-4dfc-a261-89287c986caa.png"},"0cc27f66-5ad4-438e-8d7d-75fcbf8a619e":{"name":"crab_1","frameCount":1,"frameSize":{"x":288,"y":191},"looping":true,"frameDelay":2,"categories":["animals"],"jsonLastModified":"2021-01-12 03:14:40 UTC","pngLastModified":"2021-01-12 03:14:40 UTC","version":"kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS","sourceUrl":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png","sourceSize":{"x":288,"y":191},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png"},"a4fde81b-86f4-41d4-a9b0-b4df97a75705":{"sourceSize":{"x":248,"y":57},"frameSize":{"x":248,"y":57},"frameCount":1,"frameDelay":4,"name":"win.png_1","sourceUrl":"assets/v3/animations/xi1DcsdypOcAVuwV-CGJ6LBBmuCD6qDxDj7hcoH4oxc/a4fde81b-86f4-41d4-a9b0-b4df97a75705.png","size":36894,"version":"qQafvD6GD9us.RwRKXJDLv.goDNXDoUb","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/xi1DcsdypOcAVuwV-CGJ6LBBmuCD6qDxDj7hcoH4oxc/a4fde81b-86f4-41d4-a9b0-b4df97a75705.png"}}};
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

var coin=0;

var hhh = createSprite(30,20);
hhh.setAnimation("jj.png_1");
hhh.scale=1.5;

var doremon=createSprite(40,80);
doremon.setAnimation("doremon.png_1");
doremon.scale=0.3;

var ground = createSprite(80,350);
ground.setAnimation("playground");
ground.scale=0.5;

var crab = createSprite(70,260);
crab.setAnimation("crab_1");
crab.scale=0.1;

var crab1 = createSprite(250,300);
crab1.setAnimation("crab_1");
crab1.scale=0.1;

var wall1 = createSprite(60,120);
wall1.setAnimation("wall.png_1");
var wall2 = createSprite(90,120);
wall2.setAnimation("wall.png_1");
var wall3 = createSprite(180,100);
wall3.setAnimation("wall1.png_1");
wall3.scale=1;
var wall4 = createSprite(300,220);
wall4.setAnimation("wall.png_1");
wall4.scale=0.5;
var wall5 = createSprite(340,220);
wall5.setAnimation("wall.png_1");
wall5.scale=0.5;
var wall6 = createSprite(380,220);
wall6.setAnimation("wall.png_1");
wall6.scale=0.5
var spring = createSprite(380,200);
spring.setAnimation("spring");
spring.scale=0.2;
var spring1 = createSprite(340,196);
spring1.setAnimation("spring");
spring1.scale=0.2;
var spring2 = createSprite(300,196);
spring2.setAnimation("spring");
spring2.scale=0.2;
var spring3 = createSprite(260,196);
spring3.setAnimation("spring");
spring3.scale=0.2;
var wall7 = createSprite(30,280);
wall7.setAnimation("wall.png_1");
wall7.scale=0.5;
var wall8 = createSprite(90,280);
wall8.setAnimation("wall.png_1");
wall8.scale=0.5;
var wall9 = createSprite(120,280);
wall9.setAnimation("wall.png_1");
wall9.scale=0.5;
var wall10 = createSprite(120,210);
wall10.setAnimation("wall.png_1");
wall10.scale=0.2;
var wall11 = createSprite(300,320);
wall11.setAnimation("wall.png_1");
wall11.scale=0.5;
var wall12 = createSprite(310,320);
wall12.setAnimation("wall.png_1");
wall12.scale=0.5;
var wall13 = createSprite(220,320);
wall13.setAnimation("wall.png_1");
wall13.scale=0.5;
var wall14 = createSprite(240,320);
wall14.setAnimation("wall.png_1");
wall14.scale=0.5;
var wall15 = createSprite(240,220);
wall15.setAnimation("wall.png_1");
wall15.scale=0.5;
var wall16 = createSprite(240,110);
wall16.setAnimation("wall.png_1");
wall16.scale=0.5;
var wall17 = createSprite(300,110);
wall17.setAnimation("wall.png_1");
wall17.scale=0.5;
var wall18 = createSprite(320,110);
wall18.setAnimation("wall.png_1");
wall18.scale=0.5;
var wall19 = createSprite(300,110);
wall19.setAnimation("wall.png_1");
wall19.scale=0.5;
var wall20 = createSprite(240,130);
wall20.setAnimation("wall.png_1");
wall20.scale=0.5;
var wall21 = createSprite(300,130);
wall21.setAnimation("wall.png_1");
wall21.scale=0.5;
var wall22 = createSprite(320,130);
wall22.setAnimation("wall.png_1");
wall22.scale=0.5;
var wall23 = createSprite(300,130);
wall23.setAnimation("wall.png_1");
wall23.scale=0.5;
var coin1 = createSprite(240,80);
coin1.setAnimation("coin.png_1");
coin1.scale=0.2;
var coin2 = createSprite(280,80);
coin2.setAnimation("coin1.png_1");
coin2.scale=0.1;
var coin3 = createSprite(320,80);
coin3.setAnimation("coin.png_1");
coin3.scale=0.2;
var coin4 = createSprite(360,80);
coin4.setAnimation("coin1.png_1");
coin4.scale=0.1;
var coin5 = createSprite(370,120);
coin5.setAnimation("coin.png_1");
coin5.scale=0.2;
var coin6 = createSprite(370,160);
coin6.setAnimation("coin1.png_1");
coin6.scale=0.1;
var coin7 = createSprite(330,160);
coin7.setAnimation("coin.png_1");
coin7.scale=0.2;
var coin8 = createSprite(290,160);
coin8.setAnimation("coin1.png_1");
coin8.scale=0.1;
var coin9 = createSprite(250,160);
coin9.setAnimation("coin.png_1");
coin9.scale=0.2;
var coin10 = createSprite(210,160);
coin10.setAnimation("coin1.png_1");
coin10.scale=0.1;
var coin11 = createSprite(170,160);
coin11.setAnimation("coin.png_1");
coin11.scale=0.2;
var coin12 = createSprite(130,160);
coin12.setAnimation("coin1.png_1");
coin12.scale=0.1;
var coin13 = createSprite(90,160);
coin13.setAnimation("coin.png_1");
coin13.scale=0.2;
var coin14 = createSprite(50,160);
coin14.setAnimation("coin1.png_1");
coin14.scale=0.1;
var coin15 = createSprite(10,160);
coin15.setAnimation("coin.png_1");
coin15.scale=0.2;
var coin16 = createSprite(10,200);
coin16.setAnimation("coin1.png_1");
coin16.scale=0.1;
var coin17 = createSprite(10,240);
coin17.setAnimation("coin.png_1");
coin17.scale=0.2;
var coin18 = createSprite(50,240);
coin18.setAnimation("coin1.png_1");
coin18.scale=0.1;
var coin19 = createSprite(90,240);
coin19.setAnimation("coin.png_1");
coin19.scale=0.2;
var coin20 = createSprite(130,240);
coin20.setAnimation("coin1.png_1");
coin20.scale=0.1;
var coin21 = createSprite(170,240);
coin21.setAnimation("coin.png_1");
coin21.scale=0.2;
var coin22 = createSprite(210,240);
coin22.setAnimation("coin1.png_1");
coin22.scale=0.1;
var coin23 = createSprite(210,280);
coin23.setAnimation("coin.png_1");
coin23.scale=0.2;
var coin24 = createSprite(210,320);
coin24.setAnimation("coin1.png_1");
coin24.scale=0.1;
var coin25 = createSprite(250,280);
coin25.setAnimation("coin.png_1");
coin25.scale=0.2;
var coin26 = createSprite(290,280);
coin26.setAnimation("coin1.png_1");
coin26.scale=0.1;
var coin27 = createSprite(330,280);
coin27.setAnimation("coin.png_1");
coin27.scale=0.2;
var coin28 = createSprite(370,280);
coin28.setAnimation("coin1.png_1");
coin28.scale=0.1;
var coin29 = createSprite(370,320);
coin29.setAnimation("coin.png_1");
coin29.scale=0.2;
var coin30 = createSprite(370,360);
coin30.setAnimation("coin1.png_1");
coin30.scale=0.1;
var coin31 = createSprite(330,360);
coin31.setAnimation("coin.png_1");
coin31.scale=0.2;
var coin32 = createSprite(290,360);
coin32.setAnimation("coin1.png_1");
coin32.scale=0.1;
var coin33 = createSprite(250,360);
coin33.setAnimation("coin.png_1");
coin33.scale=0.2;
var coin34 = createSprite(210,360);
coin34.setAnimation("coin1.png_1");
coin34.scale=0.1;
var coin35 = createSprite(170,360);
coin35.setAnimation("coin.png_1");
coin35.scale=0.2;




var line = createSprite(200,400,400,2);
var line1 = createSprite(200,2,400,2);
var line2 = createSprite(1,200,2,400);
var line3 = createSprite(400,200,2,400);
var line4 = createSprite(180,98,50,2);
var line5 = createSprite(2,250,2,50);
var line6 = createSprite(150,250,2,50);
var line7 = createSprite(190,285,2,50);
var line8 = createSprite(340,285,2,50);
line.visible=false;
line1.visible=false;
line2.visible=false;
line3.visible=false;
line4.visible=false;
line5.visible=false;
line6.visible=false;
line7.visible=false;
line8.visible=false;
coin2.visible=false;
coin3.visible=false;
coin4.visible=false;
coin5.visible=false;
coin6.visible=false;
coin7.visible=false;
coin8.visible=false;
coin9.visible=false;
coin10.visible=false;
coin11.visible=false;
coin12.visible=false;
coin13.visible=false;
coin14.visible=false;
coin15.visible=false;
coin16.visible=false;
coin17.visible=false;
coin18.visible=false;
coin19.visible=false;
coin20.visible=false;
coin21.visible=false;
coin22.visible=false;
coin23.visible=false;
coin24.visible=false;
coin25.visible=false;
coin26.visible=false;
coin27.visible=false;
coin28.visible=false;
coin29.visible=false;
coin30.visible=false;
coin31.visible=false;
coin32.visible=false;
coin33.visible=false;
coin34.visible=false;
coin35.visible=false;

function draw() {
 background("yellow");
  
  if(keyDown("space")){
    
   wall3.velocityY=5.5;
   crab.velocityX=3;
   crab1.velocityX=3;
  }
  
  if(keyDown("right")){
    doremon.x=doremon.x+3
    doremon.setAnimation("doremon.png_1");
  }
  if(keyDown("left")){
   doremon.x=doremon.x-3
    doremon.setAnimation("doremon1.png_1");
  }
  if(keyDown("up")){
    doremon.y=doremon.y-3
  }
  if(keyDown("down")){
    doremon.y=doremon.y+3
  }
  
  if(doremon.isTouching(spring)){
    doremon.velocityY=doremon.velocityY=-5;
  }
  if(doremon.isTouching(spring1)){
    doremon.velocityY=doremon.velocityY=-2;
  }
  if(doremon.isTouching(spring2)){
    doremon.velocityY=doremon.velocityY=-2;
  }
  if(doremon.isTouching(spring3)){
    doremon.velocityY=doremon.velocityY=-2;
  }
  
  
  if(doremon.isTouching(wall3)){
    var gameover = createSprite(200,200);
    gameover.setAnimation("over1.png_1");
    gameover.scale=1.4;
    wall3.velocityY=0
   doremon.visible=false;
}
if(doremon.isTouching(crab)){
    var gameover = createSprite(200,200);
    gameover.setAnimation("over1.png_1");
    gameover.scale=1.4;
    wall3.velocityY=0
   doremon.visible=false;
}
if(doremon.isTouching(crab1)){
    var gameover = createSprite(200,200);
    gameover.setAnimation("over1.png_1");
    gameover.scale=1.4;
    wall3.velocityY=0
   doremon.visible=false;
}

  
  if(doremon.isTouching(line1)){
    doremon.velocityY=0;
  }
   if(doremon.isTouching(wall20)){
    doremon.velocityY=0;
  }
  if(doremon.isTouching(wall21)){
    doremon.velocityY=0;
  }
  if(doremon.isTouching(wall22)){
    doremon.velocityY=0;
  }
  if(doremon.isTouching(wall23)){
    doremon.velocityY=0;
  }
  
  if(wall3.isTouching(line)){
    wall3.velocityY=-4.5;
  }
  if(wall3.isTouching(line1)){
    wall3.velocityY=+4.5;
  }
  
  if(doremon.isTouching(coin1)){
    coin1.destroy();
    coin=coin+1
    coin2.visible=true;
  }
  if(doremon.isTouching(coin2)){
    coin2.destroy();
    coin=coin+1
    coin3.visible=true;
  }
  if(doremon.isTouching(coin3)){
    coin3.destroy();
    coin=coin+1
    coin4.visible=true;
  }
  if(doremon.isTouching(coin4)){
    coin4.destroy();
    coin=coin+1
    coin5.visible=true;
  }
 if(doremon.isTouching(coin5)){
    coin5.destroy();
    coin=coin+1
    coin6.visible=true;
  }
  if(doremon.isTouching(coin6)){
    coin6.destroy();
    coin=coin+1
    coin7.visible=true;
  }
  if(doremon.isTouching(coin7)){
    coin7.destroy();
    coin=coin+1
    coin8.visible=true;
  }
  if(doremon.isTouching(coin8)){
    coin8.destroy();
    coin=coin+1
    coin9.visible=true;
  }
  if(doremon.isTouching(coin9)){
    coin9.destroy();
    coin=coin+1
    coin10.visible=true;
  }
  if(doremon.isTouching(coin10)){
    coin10.destroy();
    coin=coin+1
    coin11.visible=true;
  }
  if(doremon.isTouching(coin11)){
    coin11.destroy();
    coin=coin+1
    coin12.visible=true;
  }
  if(doremon.isTouching(coin12)){
    coin12.destroy();
    coin=coin+1
    coin13.visible=true;
  }
  if(doremon.isTouching(coin13)){
    coin13.destroy();
    coin=coin+1
    coin14.visible=true;
  }
  if(doremon.isTouching(coin14)){
    coin14.destroy();
    coin=coin+1
    coin15.visible=true;
  }
  if(doremon.isTouching(coin15)){
    coin15.destroy();
   coin=coin+1
    coin16.visible=true;
  }
  if(doremon.isTouching(coin16)){
    coin16.destroy();
    coin=coin+1
    coin17.visible=true;
  }
  if(doremon.isTouching(coin17)){
    coin17.destroy();
    coin=coin+1
    coin18.visible=true;
  }
  if(doremon.isTouching(coin18)){
    coin18.destroy();
    coin=coin+1
    coin19.visible=true;
  }
  if(doremon.isTouching(coin19)){
    coin19.destroy();
    coin=coin+1
    coin20.visible=true;
  }
  if(doremon.isTouching(coin20)){
    coin20.destroy();
    coin=coin+1
    coin21.visible=true;
  }
   if(doremon.isTouching(coin21)){
    coin21.destroy();
    coin=coin+1
    coin22.visible=true;
  }
   if(doremon.isTouching(coin22)){
    coin22.destroy();
    coin=coin+1
    coin23.visible=true;
  }
   if(doremon.isTouching(coin23)){
    coin23.destroy();
    coin=coin+1
    coin24.visible=true;
  }
  if(doremon.isTouching(coin24)){
    coin24.destroy();
    coin=coin+1
    coin25.visible=true;
  }
  if(doremon.isTouching(coin25)){
    coin25.destroy();
    coin=coin+1
    coin26.visible=true;
  }
  if(doremon.isTouching(coin26)){
    coin26.destroy();
    coin=coin+1
    coin27.visible=true;
  }
  if(doremon.isTouching(coin27)){
    coin27.destroy();
    coin=coin+1
    coin28.visible=true;
  }
  if(doremon.isTouching(coin28)){
    coin28.destroy();
    coin=coin+1
    coin29.visible=true;
  }
  if(doremon.isTouching(coin29)){
    coin29.destroy();
    coin=coin+1
    coin30.visible=true;
  }
  if(doremon.isTouching(coin30)){
    coin30.destroy();
    coin=coin+1
    coin31.visible=true;
  }
  if(doremon.isTouching(coin31)){
    coin31.destroy();
    coin=coin+1
    coin32.visible=true;
  }
  if(doremon.isTouching(coin32)){
    coin32.destroy();
    coin=coin+1
    coin33.visible=true;
  }
  if(doremon.isTouching(coin33)){
    coin33.destroy();
    coin=coin+1
    coin34.visible=true;
  }
  if(doremon.isTouching(coin34)){
    coin34.destroy();
    coin=coin+1
    coin35.visible=true;
  }
  if(doremon.isTouching(coin35)){
    coin35.destroy();
    coin=coin+1
  }
  
  
  doremon.collide(wall1);
  doremon.collide(wall2);
  doremon.collide(wall4);
  doremon.collide(wall5);
  doremon.collide(wall6);
  doremon.collide(wall7);
  doremon.collide(wall8);
  doremon.collide(wall9);
  doremon.collide(wall10);
  doremon.collide(wall11);
  doremon.collide(wall12);
  doremon.collide(wall13);
  doremon.collide(wall14);
  doremon.collide(wall15);
  doremon.collide(wall16);
  doremon.collide(wall17);
  doremon.collide(wall18);
  doremon.collide(wall19);
  doremon.collide(wall20);
  doremon.collide(wall21);
  doremon.collide(wall22);
  doremon.collide(wall23);
  doremon.collide(line4);
  doremon.collide(line3);
  doremon.collide(line1);
  doremon.collide(line2);
  doremon.collide(line);
  
  if(doremon.isTouching(ground)){
    var playground = createSprite(200,200);
    playground.setAnimation("play.png_1");
    playground.scale=2;
    wall3.velocityY=0;
  }
  
  if(crab.isTouching(line5)){
    crab.velocityX=+1.5;
  }
  if(crab.isTouching(line6)){
    crab.velocityX=-1.5;
  }
  if(crab1.isTouching(line7)){
    crab1.velocityX=+2;
  }
  if(crab1.isTouching(line8)){
    crab1.velocityX=-2;
  }
  
  if(doremon.isTouching(ground)){
    var win = createSprite(200,380);
    win.setAnimation("win.png_1");
    win.scale=0.5;
   }
  
  
drawSprites();
    fill("red");
    textSize(20);
    text("coin:"+coin,-35,25)
    
    
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
