var pascalTriangle = [];

var txtRowNumber = document.getElementById('txtRowNumber');
var txtIndex = document.getElementById('txtIndex');
var txtPascalNumber = document.getElementById('txtPascalNumber');

/*
 * Get pascla triangle number in row n and line m.
 * Initialize total row number to 100
 */
function generatePascalTriangle(k = 1000) {
    let time1 = new Date();
    let pascal = [[1]];  // first row

    for (let rowNum = 1; rowNum < k; rowNum++) {
        let row = [1];

        for (let index = 0; index < rowNum - 1; index++) {
            let pascalNumber = pascal[rowNum - 1][index] + pascal[rowNum - 1][index + 1] || 0;

            row.push(pascalNumber);
        }

        row.push(1);
        pascal.push(row);
    }

    // console.log(pascal);
    let time2 = new Date();
    console.log(time2 - time1);

    return pascal;
}

function getPascalNumber(n, m) {
    let result = n < m ? '数字索引应小于行数' : pascalTriangle[n - 1][m - 1] || 1;

    console.log(result);

    txtPascalNumber.value = result;
}

function getRowAndIndex() {
    rowNum = Number.parseInt(txtRowNumber.value) || 1;
    index = Number.parseInt(txtIndex.value) || 1;

    return getPascalNumber(rowNum, index);
}

pascalTriangle = generatePascalTriangle();
//(6, 4) = 10; (8, 6) = 21; (13, 9) = 495
// getPascalNumber(13, 9);

txtRowNumber.addEventListener('keyup', getRowAndIndex);
txtIndex.addEventListener('keyup', getRowAndIndex);

function showTri() {
    let showPascal = generatePascalTriangle(15);

    document.writeln('<div style="position: absolute;">');
    for (let i = 0; i < 15; i++) {
        let row = '';
        showPascal[i].forEach(x => row = row + x + '&nbsp;'.repeat(8 - (x + '').length));
        document.writeln(`<center>${row}</center>`);
    }
    document.writeln('</div>');
}

showTri();