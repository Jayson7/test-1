// Program to remove duplicate character

// Given a string without spaces, the task is to remove duplicates from it.
//           Note: The original order of characters must be kept the same.

Input: S = "jaaattiiiinnnn";
Output: "jatin";

// Explanation: Only keep the first
// occurrence

var indexCount = 0;

const removeDuplicate = (strings, number) => {
  for (var inf = 0; inf < number; inf++) {
    var x;
    for (x = 0; x < inf; x++) {
      if (strings[inf] == strings[x]) {
        break;
      }
    }

    if (x == inf) {
      strings[indexCount++] = strings[inf];
    }
  }

  return strings.join("").slice(strings, indexCount);
};
// test and call
var s = S.split("");
var number = s.length;
console.log(removeDuplicate(s, number));
