function wrapValue(n) {
  var localVariable = n;
  return function() {return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());


//Two ways of for get minimum between 2 values
// I
function minimum(a,b) {
  return Math.min(a,b);
};

console.log(minimum(11,8));

// II
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(4,7));



function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

console.log(isEven(5));



function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}


console.log(countChar("buble", "b"));
