const factRecursive = (num) => {
    if (num === 0)
    {
       return 1;
    }
     return num * factRecursive(num-1);
}
console.log(`The factorial value of ${num} : `, factRecursive(4));

// Using loop factorial: the


const fact = (num) => {

    const factorial = 0
 
    for (i=1; i<num; i++){
     factorial = i*i
    }
     return factorial
 }
 
  console.log(`Factorial of the number is:`, fact(5));