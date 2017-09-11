//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry) {
  this.status = "normal";
  this.color = color;
  this.hungry = hungry;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog("normal", "black", false);
let moonshine = new Dog("normal", "white", true);
let atticus = new Dog("normal", "brown", false);
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (dog) {

}

Human.prototype.pet = function(dog) {
  dog.status = "happy";
}

// Instances of Human
// Needed: mason, julia
let mason = new Human();
let julia = new Human();
