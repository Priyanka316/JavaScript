//Q:1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent = {
    fname : "Roshani",
    showDetails: function(){
        console.log(this.fname);
    }
}
const child = Object.create(parent);
child.showDetails();

//Q:2. Write code to explain prototype chaining
function Mobile(brand, camera, price){
    this.brand = brand;
    this.camera = camera;
    this.price = price;
}
const Oppo = new Mobile("Oppo","12pix",23000);
const vivo = new Mobile("vivo","200pix",20000);
const redmi = new Mobile("redmi","15pix",21000);

console.log(Oppo);
console.log(vivo);
console.log(redmi);

console.log(Oppo.hasOwnProperty("model"));//false

//Q:3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

const arr1 = [20,40,60,80,100];//300
const arr2 = [10,30,50,70,90];//250

Array.prototype.result = function(){
    let sum = 0;
    for(let i=0; i<this.length; i++){
        sum += this[i];
    }
    console.log(sum);
}
arr1.result();
arr2.result();

//Q:4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
const parent1 = {
    name: "Roshani",
    age: 20,
  };
  
  child1 = Object.create(parent1);
  child1.birthYear = 2022;
  console.log(child1.birthYear);
  
  for (const key in child1) {
    console.log(key);
  }