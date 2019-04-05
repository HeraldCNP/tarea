function cinco(p, n) {
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



var con = 0;

function tres(cad) {
    let res = '';
    while (con < cad.length) {
        let c = cad.charAt(con);
        if (c == '(') {
            con++;
            res += add(cad);
        } else {
            res += c;
        }
        con++;
    }
    return res;
}
const add = (cad) => {
    //console.log("cadena recursiva "+cad);
    let res = '';
    while (con < cad.length) {
        let c = cad.charAt(con);
        if (c == '(') {
            con++;
            res += add(cad);
        } else if (c == ')') {
            res = volteo(res);
            return res;
        } else {
            res += c;
        }
        con++;
    }
    return res;

}

function volteo(cad) {
    let sum = '';
    for (let i = cad.length - 1; i >= 0; i--) {
        let c = cad.charAt(i);
        sum += c;
    }
    return sum;
}


function uno() {
    var matrix = [
        [0, 1, 1, 2],
        [0, 5, 0, 0],
        [2, 0, 3, 3]
    ];
    var sum = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}