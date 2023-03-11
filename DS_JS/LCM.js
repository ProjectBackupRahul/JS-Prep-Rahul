const lcm = (a, b) => {
	let min = Math.min(a, b);
	while(min >= 2){
	   if(a % min === 0 && b % min === 0){
		  return (a*b)/min;
	   };
	   min--;
	};
	return (a*b);
 };
 console.log(lcm(6, 8));
 console.log(lcm(16, 18));
 console.log(lcm(0, 8));
 console.log(lcm(11, 28));
 console.log(lcm(18, 34));
