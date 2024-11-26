let personAge = 17;

if (personAge >= 18){
    console.log("pilngadigs");
}
else {
    console.log("lil baby");
}

let namesArray = ["Ara", "Choco", "Lico"];

for (let i = 0; i < namesArray.length; i++ ){
    console.log(namesArray[i]);
}

function sayHello(name){
    return (`Hello, ${name}`);
}
console.log(sayHello("Diego"));
