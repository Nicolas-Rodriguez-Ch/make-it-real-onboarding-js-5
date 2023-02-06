function myFunction(obj) {
    let counter = 0;
    for (const key in obj) {
        counter += obj[key]
    }
    return counter;
}

console.log(myFunction({a:1,b:2,c:3}));
console.log(myFunction({j:9,i:2,x:3,z:4}));
console.log(myFunction({w:15,x:22,y:13}));

function fibonacci(n) {
    if (n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(4));
console.log(fibonacci(5));