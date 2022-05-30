let img;
let hen;
let input;
let input2;
let input3;
let input4;
let input5;
let input6;
let input7;
let typeTexts;
let aliendatacenter;
let button;
// let qr;

// load images
function preload() {
  hen = loadImage("og-image.jpg");
  cnew = loadFont("courier-new.ttf");
  aliendatacenter = loadImage("aliendatacenter.png");
  //future qrcode generator implementation
  //      uncomment all to see how it goes
  // qr = loadImage("qr.png")
}

//setup
function setup() {
  //input upload file box =============================
  msg = createP(
    "Upload a <b>squared</b> preview of your artwork </br>that is at least <b>800x800px</b>"
  );
  msg.position(20, 1000);

  input = createFileInput(handleFile);
  input.position(20, 1075);
  let c = createCanvas(1300, 800);
  c.id("mycanvas");

  //input Artowk Name
  msg = createP("Insert <b>Artwork Name</b> (to break line press enter key)");
  msg.position(20, 1130);

  input2 = createElement("textarea", "Artwork Name");
  input2.position(20, 1180);

  //input Artist Name
  msg = createP("Insert <b>Artist Name</b>");
  msg.position(20, 1250);

  input3 = createInput("Artist");
  input3.position(20, 1290);

  //input Description
  msg = createP(
    "Insert the <b>Description</b> (to break like press enter key)"
  );
  msg.position(20, 1330);

  input6 = createElement(
    "textarea",
    "Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. \nPhasellus massa arcu, convallis \neu tristique a, euismod a purus. \nIn hac habitasse platea dictumst. \nUt sed ..."
  );
  input6.position(20, 1380);

  // OBJKT number
  msg = createP("Insert the <b>OBJKT number</b>");
  msg.position(20, 1460);

  input4 = createInput("/OBJKT/9999");
  input4.position(20, 1500);

  //input Editions Number
  msg = createP("How many <b>editions?</b> eg. 10/10");
  msg.position(20, 1550);

  input5 = createInput("10/10");
  input5.position(20, 1590);

  //input link

  msg = createP("Insert a <b>link</b> if you want");
  msg.position(20, 1640);

  input7 = createInput("collect now on hicetnunc.xyz/");
  input7.position(20, 1680);

  //final text
  msg = createP(
    "<b> *bip bop* real time rendering baby, now just save the image manually</b>"
  );
  msg.position(20, 1710);

  msg = createP(
    "If using on mobile, you may want to click this button but the canvas will be blank after that, so <b>check if its good first</b>"
  );
  msg.position(20, 1790);
  //lame download button for loosers
  button = createButton("Download ::)");
  button.position(20, 1870);
  button.mousePressed(download_image);

  //credits - dear hax0r, if you contributed paste your alias here
  msg = createP("By @BabyCommando_ with love <3");
  msg.position(20, 1930);

  msg = createP(
    "Please help me get jiu jitsu classes for my grandmother -> donate to tz1KseWbS7f7YQhGsGP8QmXDJyzrKV71xxyj (I accept arts :] )"
  );
  msg.position(20, 1950);

  //just a dot to make the page longer -
  //or maybe a future easter egg hehe
  msg = createP(".");
  msg.position(20, 1970);
}

//========================================================
//drawing on the canvas (real time rendering from inputs)

function draw() {
  background(0);
  //default image
  image(aliendatacenter, 500, 0, 800, 800);
  //inserted image
  if (img) {
    image(img, 500, 0, 800, 800);
  }

  //future qrcode generator implementation
  //  image(qr, 70, 594, 130, 130);aliendatacenter

  //draw hen logo
  // image(hen, 12, 40, 300, 170);

  // display text from Artwork Name input
  textSize(40);
  text(input2.value(), 60, 270);
  textStyle(BOLD);
  fill(255);

  //display text from Artist Name input
  textSize(22);
  text(input3.value(), 60, 220);
  textStyle(BOLD);
  fill(255);

  //DESCRIPTION Counter Input
  textSize(20);
  text(input6.value(), 60, 380);
  textStyle(BOLD);
  fill(255);

  //OBJKT counter Input
  textSize(30);
  text(input4.value(), 60, 680);
  textStyle(BOLD);
  fill(255);

  //EDITIONS Counter Input
  textSize(30);
  text(input5.value(), 60, 647);
  textStyle(BOLD);
  fill(255);

  //LINK Input
  textSize(16);
  text(input7.value(), 60, 703);
  textStyle(BOLD);
  color(255);
}

//put uploaded image on canvas
function handleFile(file) {
  print(file);
  if (file.type === "image") {
    img = createImg(file.data, "");
    img.hide();
    let c = get();
    image(c, width / 2, 0);
  } else {
    img = null;
  }
}

function download_image() {
  var canvas = document.getElementById("mycanvas");
  image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  var link = document.createElement("a");
  var namez = [
    "Thanks for using CONTEMPLATOR2000",
    "This worth more than Monalisa",
    "OMG this art is awesome",
    "Delicious art",
    "Damn, this art is sickkkk",
    "Time to make some tezos, baby",
    "*Bip Bop* your art is ready!",
    "You're gonna be famous because of this one",
    "Wow, so many emotions on this piece",
    "CONTEMPLATED!",
    "I LOVED IT!!",
    "I know i'm just a robot, but i can understand the levels of emotion you put on this one",
    "Sell this one for 100tz yeahhh",
    "I'm in love with your art skills",
  ];
  var randNamez = namez[Math.floor(Math.random() * namez.length)];

  link.download = randNamez + ".png";
  link.href = image;
  link.click();
}
