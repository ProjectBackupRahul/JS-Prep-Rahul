function removeDuplicate( str , n)
	{
	    var filteredStg = []
		// Create a set using String characters
		// excluding '\0'
		var s = new Set();
		
		// HashSet doesn't allow repetition of elements
		for (var i = 0;i<n;i++)
			s.add(str[i]);

		// Print content of the set
		for (const v of s) {

		//console.log(filteredStg.push(v));
		 console.log(v);
	}
	}

	// Driver code
		var str = "AABBDDVVAAFFASDF";
		var n = str.length;

		removeDuplicate(str, n);
		1
		7
		3
		5
		2
		6
		4