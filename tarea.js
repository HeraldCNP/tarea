function matrixElementsSum(matrix) {
    var sum = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (matrix[i][j] != 0) {
                if (i == 0)
                    sum += matrix[i][j];
                else {
                    if (matrix[i - 1][j] != 0)
                        sum += matrix[i][j]
                }
            }
        }
    }
    return sum;
}
// console.log(matrixElementsSum([
//     [1, 1, 1, 0],
//     [0, 5, 0, 1],
//     [2, 1, 3, 10]
// ]));



function CenturyFromYear(year) {
    var sig = year.slice(0, 2);
    var siglo = parseInt(sig) + 1;
    return siglo;
}
// console.log(CenturyFromYear("1905"));


function isTandemRepeat() {

}


function exerciseElaboration(p, n) {
    n += 1;
    var sum = p;
    while (n-- != 0) {
        sum *= 10;
    }
    sum += p;
    sum = Math.pow(sum, 2);
    p = 0;
    while (sum > 0) {
        p += sum % 10;
        sum = parseInt(sum /= 10);
    }
    return p;
}

// console.log(exerciseElaboration(1, 2));