function reverse( str ) //  Here Reversing the Srting !! 
  {
    // variable holds reverse string
    let rev_str = "";
    for( let i = str.length-1 ;i >= 0 ;i--)
    {
      rev_str+= str[i];
    }
    // return reverse string
    return rev_str;
  }
 
  //  function checking string is palindrome or not
  function is_palindrome( str )
  {
    reverse_str = reverse(str);   //  Calling the 
    //  condition checking if reverse str is
    // same as string it is palindrome
    // else not a palindrome
    if( reverse_str === str)
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string is not palindrome")
    }
  }
  let test = "hellolleh";
  is_palindrome(test);  //  Calling the reverse function with params 



   //  By using JS inbuild function: https

   let checkPalindrome = (stringg) => {
    return stringg === stringg.split("").reverse().join("");
  };
   
  console.log("Is Palindrome? : " + checkPalindrome("noon"));
  console.log("Is Palindrome?: " + checkPalindrome("apple"));