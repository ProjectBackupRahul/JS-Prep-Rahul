function gcd(a, b) {
	// Make sure a is larger than b
	if (a < b) {
	   var temp = a;
	   a = b;
	   b = temp;
	}

	// Iteratively subtract the smaller number from the larger number
	// until the two numbers are equal
	while (b != 0) {
	   var temp = b;
	   b = a % b;
	   a = temp;
	}

	// Return the GCD
	return a;   
 }
 // Calculate the GCD of 24 and 36
 var n1 = 24;
 var n2 = 36;
 var result = gcd(n1, n2);
 console.log("result1" + `GCD of ${n1} and ${n2} = ` + result);

 // Calculate the GCD of 24, 36, and 48
 var n1 = 8;
 var n2 = 12;
 var n3 = 20;
 var result = gcd(n1, n2, n3);
 console.log("result2" + ` GCD of ${n1}, ${n2}, and ${n3} =1`+ result)