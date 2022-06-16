// Stable Boats
/* N people are preparing for a boat journey.N is an even number,and there are exactly(N/2)-1 boats that can
 carry two people and two boats that can have only one person each. Each person has a weight arr, When two people, i and j are on the same boat, the boat's instability is farr , -arr. The boat carrying only one person has an instability equal to zero. What would be the minimum possible sum of boat instabilities if you distribute all the people optimally?*/
//  Input
// The first line of input contains an integer n, representing the number of people preparing for a boat
// journey. The second line of input containsnspace-separated. Integers as arri,arr.,arr representing the weight of each person.
// Output
// Print the minimum possible sum of boat instabilities.

// Example no. 01
// Input arr = [1, 2,  3,  4],    N = 4
// Solution :- [1, 2] [3] [4]
//              2-1   0   0  =1
// Instability :- 1

// Example no. 02
// Input arr = [1, 3,  4, 6,  3, 4,  100,  200],  N = 8
// Solution :- [1, 3] [4, 6] [3, 4] [100] [200]
//              3-1    6-4    4-3     0     0  = 5
// Instability :- 5

function boat(arr) {
  // Write your code here
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  let res = 0;
  let k = arr.length - 3;
  for (let i = 0; i < k; i++) {
    res = res + (arr[i + 1] - arr[i]);
    i = i + 1;
    continue;
  }
  return res;
}
const arr = [1, 3, 4, 6, 23, 55, 2, 2, 5, 66];

console.log(boat(arr));
