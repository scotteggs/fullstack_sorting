//bubble sort code - Omri's solution reviewed in class
//bubble sort is pretty simple, nothing too crazy here


function swap (arr, indexA, indexB) {
  var oldElem = arr[indexA]; // 1
  arr[indexA] = arr[indexB]; // 1
  arr[indexB] = oldElem; // 1
}

function bubbleSort (arr) {
  var swapHappenedLastTime = true; // 1
  while (swapHappenedLastTime) { // array length * (insides)
    swapHappenedLastTime = false; // 1
    for (var i = 0; i < arr.length - 1; i++) { // array length * (insides)
      if (arr[i] > arr[i+1]) { // 1
        swapHappenedLastTime = true; // 1
        swap(arr, i, i+1); // 3
      }
    }
  }
  return arr;
}

// // best case: already sorted
// amountOfTimeNeeded = 2 + 5 * arrayLength;
// f(n) = 2 + 5 * n ==drop contstants==> O(n);

// // worst case: 
// amountOfTimeNeeded = 1 + arrayLength * (1 + arrayLength * 5)
// f(n) = 1 + n * (1 + n * 5) ==drop constants==> O(n*n)

//setup for merge sort - Omri's solution



function halve (arr) {
  var middle = arr.length / 2;
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);
  return [left, right];
}

function merge (left, right) {
  var merged = [];
  var leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length || rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex] || right[rightIndex] === undefined) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return merged;
}

function merge (left, right) {
  var merged = [];
  while (left.length && right.length) {
    // merged.push((left[0] < right[0] ? left : right).shift());
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left).concat(right);
}

function mergeSort (unsorted) {
  if (unsorted.length < 2) {
    return unsorted;
  }
  var halves = halve(unsorted),
    left = halves[0],
    right = halves[1];
  var sortedLeft = mergeSort(left);
  var sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}




//remnenets of my code below...






// // function bubbleSort(arr) {
// // 	var temp;
// // 	var swap = true;
// // 	while (swap == true) {
// // 		swap = false;
// // 		for (var i = 0; i < arr.length; i++) {
// // 			if (arr[i] > arr[i+1]) {
// // 				temp = arr[i];
// // 				arr[i] = arr[i+1];
// // 				arr[i+1] = temp;
// // 				swap = true;
// // 			}
// // 		}
// // 	}
// // 	return arr;
// // }

// function swap (arr, indexA, indexB) {
// 	var oldElem = arr[indexA];
//   arr[indexA] = arr[indexB];
//   arr[indexB] = oldElem;
// }

// function bubbleSort(arr) {
//     var swapHappendLastTime = true;
//     while (swapHappendLastTime) {
//     		swapHappendLastTime = false;
//         for (var i = 0; i < arr.length; i+=1) {
//             if (arr[i] > arr[i+1]) {
//             	swap(arr, arr[i], arr[i+1])
//               swapHappendLastTime = true;
//             }    
//         }
//     }
//     return arr;
// }


// function halve (arr) {
// 	if(arr.length === 0) {
// 		return [arr,arr]
// 	}
// 	var middle = arr.length/2;
// 	var left = arr.slice(0,middle);
// 	var right = arr.slice(middle);
// 	return [left,right]

// }

// function merge (left, right) {
// 	var merged = []
// 	var leftIndex < left.length && rightIndex < right.length)
// 			merged.push(left[leftIndex]);

// 	return merged
// }














