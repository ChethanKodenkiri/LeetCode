// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    console.log("String is  "+s)
    let result = "";
    const n = s.length;
    const cycleLen = 2 * numRows - 2;
    console.log("cycleLen "+cycleLen)
    for (let i = 0; i < numRows; i++) {
        console.log("I is "+i)
        for (let j = 0; j + i < n; j += cycleLen) {
            result += s[i+j];
            console.log("J is "+j)
            console.log("Result for 2nd for loop "+result)
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
                console.log("j + cycleLen - i is "+ parseInt(j + cycleLen - i) )
                result += s[j + cycleLen - i];
                console.log("Result fot IF "+result)
            }
        }
    }

    return result;
};

convert("PAYPALISHIRING",3);

//Second code

// function convert(s, numRows) {
//     if (numRows === 1) return s;
    
//     const rows = new Array(numRows).fill('');
//     let direction = 1; // 1 for down, -1 for up
//     let currentRow = 0;

//     for (const char of s) {
//         rows[currentRow] += char;
//         if (currentRow === 0) {
//             direction = 1;
//         } else if (currentRow === numRows - 1) {
//             direction = -1;
//         }
//         currentRow += direction;
//     }

//     return rows.join('');
// }
