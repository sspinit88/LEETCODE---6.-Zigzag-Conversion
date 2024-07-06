/*
6. Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:

Input: s = "A", numRows = 1
Output: "A"


Constraints:

    1 <= s.length <= 1000
    s consists of English letters (lower-case and upper-case), ',' and '.'.
    1 <= numRows <= 1000


*/

/*

The solution uses an array of strings to represent each row in the zigzag pattern. 
It iterates over the characters in the input string and appends each character to the appropriate row. 
It uses a variable to keep track of the current row and a flag to indicate the direction of movement. 
When it reaches the top or bottom row, it reverses the direction.

В решении используется массив строк для представления каждой строки зигзагообразного узора.
Он перебирает символы входной строки и добавляет каждый символ в соответствующую строку.
Он использует переменную для отслеживания текущей строки и флаг для указания направления движения.
Когда он достигает верхнего или нижнего ряда, он меняет направление на противоположное.

*/

function convert(s, numRows) {
  // Если numRows равно 1, возвращаем исходную строку
  // If numRows is 1, return the original string
  if (numRows === 1) return s;

  // Инициализация массива строк для каждой строки в зигзагообразном шаблоне
  // Initialize an array of strings for each row in the zigzag pattern
  let rows = new Array(numRows).fill('');

  // Инициализация переменной для отслеживания текущей строки и флага для указания направления движения
  // Initialize a variable to keep track of the current row and a flag to indicate the direction of movement
  let curRow = 0;
  let down = false;

  // Итерация по символам в строке
  // Iterate over the characters in the string
  for (let char of s) {
    // Добавление каждого символа к соответствующей строке
    // Append each character to the appropriate row
    rows[curRow] += char;

    // Если достигнута верхняя или нижняя строка, изменение направления движения
    // If the top or bottom row is reached, reverse the direction of movement
    if (curRow === 0 || curRow === numRows - 1) down = !down;

    // Обновление текущей строки в зависимости от направления движения
    // Update the current row depending on the direction of movement
    curRow += down ? 1 : -1;
  }

  // Объединение строк в одну строку и возвращение результата
  // Join the rows into one string and return the result
  return rows.join('');
}

/*

This solution ensures that the algorithm runs in O(n) time complexity and uses O(n) space complexity, where n is the length of the string. 
The space complexity is due to the array of strings that is used to store the rows. The time complexity is due to the iteration over the characters in the string.

Это решение гарантирует, что алгоритм работает с временной сложностью O(n) и использует пространственную сложность O(n), где n — длина строки.
Пространственная сложность связана с массивом строк, который используется для хранения строк. Временная сложность связана с перебором символов в строке.

*/
