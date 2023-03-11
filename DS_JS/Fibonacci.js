function fibonacci(num)
{
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}
  console.log("Fibonacci(5): "+fibonacci(5)+ "");
 console.log("Fibonacci(8): "+fibonacci(8)+"");

 // Sol 2 : 

 function fibonacci(num)
    {
        if(num==1)
            return 0;
        if(num==2)
            return 1;
        var num1=0;
        var num2=1;
        var sum;
        var i=2;
        while (i<num)  
        {
            sum=num1+num2;
            num1=num2;
            num2=sum;
            i+=1;
        }
        return num2;
    }
  
console.log("Fibonacci(5): "+fibonacci(5)+"");
console.log("Fibonacci(8): "+fibonacci(8)+"");


// Sol : 3 

function fibonacci(num)
    {   
        if(num==1)
            return 0;
        if (num == 2)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
console.log("Fibonacci(5): "+fibonacci(5)+"");
console.log("Fibonacci(8): "+fibonacci(8)+"");
