function helloWorld(){
    console.log('Hello World!');
};

function helloWorld2(){
    console.log('Hello World <3!');
};

let x = new Array();
x.push(helloWorld,helloWorld2);

for(let i =0; i < x.length; i++){
    x[i]();
}