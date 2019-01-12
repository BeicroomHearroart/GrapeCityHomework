function getPascalNumber(n, m) {
    var pascal = [[1], [1, 1]];

    for (let rowNum = 2; rowNum < 14; rowNum++) {
        let row = [1];

        for (let index = 0; index < rowNum - 1; index++) {
            let pascalNumber = pascal[rowNum - 1][index] + pascal[rowNum - 1][index + 1];

            row.push(pascalNumber);
        }

        row.push(1);
        pascal.push(row);
    }

    // console.log(pascal);
    console.log(pascal[n - 1][m - 1]);
}

//(6, 4) = 10; (8, 6) = 21; (13, 9) = 495
getPascalNumber(13, 9);