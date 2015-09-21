// describe('Bubble Sort', function(){
//     it('handles an empty array', function(){
//         expect( bubbleSort([]) ).toEqual( [] );
//     });
//     it('handles a single element', function(){
//         expect( bubbleSort([1])).toEqual( [1] );
//     });
//     it('maintains a lenght of 1', function(){
//         expect( bubbleSort([1]).length).toEqual(1);
//     });
//     it('can sort an array of 2 items', function(){
//         expect( bubbleSort([2,1])).toEqual([1,2]);
//     });
//     it('can sort an odd numbered array of many items', function(){
//         expect( bubbleSort([19,2,1,5,7])).toEqual([1,2,5,7,19]);
//     });
//     it('can count the number of swaps', function(){
//         var arr = [4,6,5,1];
//         spyOn(window, 'swap').andCalThrough();
//         bubbleSort(arr);
//         var numSwaps = swap.callCount;
//         expect(numSwaps).toEqual(4);
//     });
// });

// describe('Merge Sort', function(){
// 	describe('halve', function(){
//     it('cuts an empty array in half', function(){
//         expect( halve([]) ).toEqual( [] );
//     });
//         it('cuts an array in half', function(){
//         expect( halve([1,2]) ).toEqual( [[1],[2]] );
//     });



//   });
// 	describe('merge', function () {
// 				it('given two arrays of equal length, returns a sorted array'), function () {
// 					expect(merge([1,3,5], [2,4,6])).toEqual([1,2,3,4,5,6]);
// 				}
// 	});
// });


describe('Bubble sort', function () {

    it('sorts an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });

    it('sorts an array of one element', function () {
        expect(bubbleSort([5])).toEqual([5]);
    });

    it('sorts an array of n elements', function () {
        var unsorted = [10,4,2,3,9,1];
        var sorted = bubbleSort(unsorted);
        expect(sorted).toEqual([1,2,3,4,9,10]);
    });

    it('swaps expected number of times', function () {
        var arr = [4,6,5,1];
        spyOn(window, 'swap').andCallThrough();
        bubbleSort(arr);
        var numSwaps = swap.callCount;
        expect(numSwaps).toEqual(4);
    });

    xit('compares expected number of times');

    xit('sorts in place');

});

// // without call through
// function spyOn (obj, methodName) {
//  function spiedMethod () {
//      spiedMethod.callCount = spiedMethod.callCount || 0;
//      spiedMethod.callCount++;
//  }
//  obj[methodName] = spiedMethod;
//  // window['swap'] = spiedMethod;
// }
// // with call through
// function spyOn (obj, methodName) {
//  var original = obj[methodName];
//  function spiedMethod () {
//      spiedMethod.callCount = spiedMethod.callCount || 0;
//      spiedMethod.callCount++;
//      return original.apply(this, arguments);
//  }
//  obj[methodName] = spiedMethod;
// }

describe('Merge sort', function () {

    describe('halve', function () {

        it('given one array, returns two arrays', function () {
            expect(halve([])).toEqual([[],[]]);
        });

        it('halves array of even length', function () {
            expect(halve([5,10])).toEqual([[5],[10]]);
        });

        it('halves array of odd length', function () {
            expect(halve([4,10,20])).toEqual([[4], [10, 20]]);
        });

    });

    describe('merge', function () {

        it('given two arrays, returns an array', function () {
            expect(merge([], [])).toEqual([]);
        });

        it('given two already sorted arrays of equal length, returns sorted result array', function () {
            expect(merge([1,5,10], [2,4,11])).toEqual([1,2,4,5,10,11]);
            expect(merge([1,9,10], [2,3,8])).toEqual([1,2,3,8,9,10]);
        });

        it('works for arrays of unequal length', function () {
            expect(merge([1,5,10,20,21], [2,4,100])).toEqual([1,2,4,5,10,20,21,100]);
        });

    });

    describe('mergeSort', function () {

        it('with 1 or fewer elements, returns sorted array', function () {
            expect(mergeSort([])).toEqual([]);
            expect(mergeSort([1000])).toEqual([1000]);
        });

        it('does the thing its suppoed to do', function () {
            var sorted = mergeSort([9,1994,18,1,-90,1234,56]);
            expect(sorted).toEqual([-90,1,9,18,56,1234,1994]);
        });

    });

});

// // performance
// for(var i = 12; i <= 14; i++) {
//  var num_items = Math.pow(2, i);
//  var native_test_array = [];
//  var b_test_array = [];
//  var m_test_array = []
//  for(var j = 0; j < num_items; j++) {
//      var rand = Math.floor(Math.random() * num_items);
//      native_test_array.push(rand);
//      b_test_array.push(rand);
//      m_test_array.push(rand);
//  }

//  console.time(num_items + " native");
//  native_test_array.sort(function (a, b) { return a - b; });
//  console.timeEnd(num_items + " native");

//  console.time(num_items + " bubble");
//  bubbleSort(b_test_array);
//  console.timeEnd(num_items + " bubble");

//  console.time(num_items + " merge");
//  mergeSort(m_test_array);
//  console.timeEnd(num_items + " merge");
// }





