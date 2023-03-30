function isPrime(){
let num = prompt("Enter the number");
let flag=false;
for (let index = 2; index < num; index ++) {
    if (num % index === 0) {
        flag = true; 
        break;
    }
    
}
if (flag) {
    let str= `${num} is not prime number`;
    console.log(str);
    alert(str);
}
else{
    let str= `${num} is prime number`;
    console.log(str);
    alert(str);
}

}
isPrime();
isPrime();
isPrime();
isPrime();