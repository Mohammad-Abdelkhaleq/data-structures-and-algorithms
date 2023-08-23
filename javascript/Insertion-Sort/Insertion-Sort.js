// Insert(int[] sorted, int value)
//   initialize i to 0
//   WHILE value > sorted[i]
//     set i to i + 1
//   WHILE i < sorted.length
//     set temp to sorted[i]
//     set sorted[i] to value
//     set value to temp
//     set i to i + 1
//   append value to sorted

// InsertionSort(int[] input)
//   LET sorted = New Empty Array
//   sorted[0] = input[0]
//   FOR i from 1 up to input.length
//     Insert(sorted, input[i])
//   return sorted

function InsertionSort(input) {
  var sorted = [];
  sorted[0] = input[0];
  for (var i = 1; i < input.length; i++) {
    Insert(sorted, input[i]);
  }
  return sorted;
}

function Insert(sorted, value) {
    var i = 0;
    while (value > sorted[i]) {
        i++;
    }
    while (i < sorted.length) {
        var temp = sorted[i];
        sorted[i] = value;
        value = temp;
        i++;
    }
    sorted.push(value);
}
