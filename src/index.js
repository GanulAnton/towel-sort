// You should implement your task here.

module.exports = function towelSort(matrix) {
    var arr = [];
    var arr1 = [];
    if (matrix == null || matrix == undefined) {
        return [];
    }
    for (i = 0; i < matrix.length; i++) {
        arr = matrix[i];
        if (i % 2 == 0) {
            for (j = 0; j < arr.length; j++) {
                arr1.push(arr[j]);
            }
        } else {
            var reverse = arr.reverse();
            for (j = 0; j < arr.length; j++) {
                arr1.push(arr[j]);
            }
        }
    }
    return arr1;
};
