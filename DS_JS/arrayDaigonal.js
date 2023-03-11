       
function difference(arr,n)
{
 
    // Initialize sums of diagonals
    let d1 = 0, d2 = 0;
 
    for (let i = 0; i < n; i++)
    {
        d1 += arr[i][i];
        d2 += arr[i][n-i-1];
    }
 
    // Absolute difference of the sums
    // across the diagonals
    console.log("d1", d1, "d2", d2)
    return Math.abs(d1 - d2);
}
 
/* Driver program to test above function */
 
    let n = 3;       
    let arr = [[11, 2, 4],
               [4 , 5, 6],
              [10, 8, -12]];
console.log(difference(arr, n));