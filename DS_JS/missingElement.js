function getMissingNo(a, n)
{
    let i, total=1;
     
    for (i = 2; i<= (n+1); i++)
    {
        total += i;
        total -= a[i-2];
    }
    return total;
}
 
//Driver Program
    let arr = [1, 2, 3, 5];
    let N = arr.length;
     
    // Function call
    console.log(getMissingNo(arr, N));

/******************************************************************************************* */
  /*  function getMissingNo(a, n) {
  
        let total = Math.floor((n + 1) * (n + 2) / 2);
        for (let i = 0; i < n; i++)
            total -= a[i];
        return total;
    }
    
  
    // Driver Code
 
    var arr = [ 1, 2, 3, 5 ];
    var N = arr.length;
    let miss = getMissingNo(arr, N);
    console.log(miss); */