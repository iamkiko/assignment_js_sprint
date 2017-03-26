// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return Math.max.apply(null, arr);    
  
  }
  
  reversed: function(reversedString){  
    reversedString = "christos";
    return reversedString.split("").reverse().join(""); //split splits in to characters, reverse reverses them and join puts them back together to form a word
  },

  loudSnakeCase: function(){  
    //TO BE COMPLETED
  },

  compareArrays: function(array1, array2){ 
    return array1.toString() === array2.toString();
  },

  fizzBuzz: function(num){  
    var fizzArray = [];
    for (i = 0; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0){
          fizzArray.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        fizzArray.push("FIZZ");
      } else if (i % 5 === 0) {
        fizzArray.push("BUZZ");
      } else {
        fizzArray.push(i);
      }
    }
    return fizzArray;
  },

  myMap: function(arr, fn){  
    var newArr = [];
    for(i = 0; i < arr.length; i++){
      newArr.push(fn(arr[i]));
    }
    return newArr;
  },

  primes: function(){  
    // TO BE COMPLETED
  },
}
