//* Variable Declaration
let var1;
var var2;
//const var3; //! Uncaught SyntaxError: Missing initializer in const declaration

function showLet() {
    let var1 = 10;
    console.log(`Initial value: ${var1}`);
    if(true){
        let var1 = 20;
        console.log(`let value inside a block scope: ${var1}`);
    }
    console.log(`let value inside a function scope: ${var1}`);
}

showLet();

function showVar() {
    var var1 = 10;
    console.log(`Initial value: ${var1}`);
    if(!false) {
        var var1 = 20;
        console.log(`var value inside a block scope: ${var1}`);
    }
    console.log(`var value inside a function scope: ${var1}`)
}

showVar();