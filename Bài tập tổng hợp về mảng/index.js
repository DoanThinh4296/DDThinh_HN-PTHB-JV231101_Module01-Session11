// bài tập 1
array = [12, "Thịnh", 1.2, [1, 2, 3], false, null, NaN, undefined];

// bài tập 2
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
even = [];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    even.push(array2[i]);
  }
}
console.log(`danh sách số chẵn`, even.join(", "));

// bài tập 3
let total = 0;
for (let i = 0; i < array2.length; i++) {
  total = total + array2[i];
}
console.log("tổng của mảng array (for):", total);
console.log("tổng của mảng array (eval)", eval(array2.join("+")));

// bài tập 4


// bài 5
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evens = 0,
  odd = 0;

for (let i = 0; i < array4.length; i++) {
  if (array4[i] % 2 === 0) {
    evens = evens + array4[i];
  } else {
    odd = odd + array4[i];
  }
}
console.log(`tổng số lẻ là: ${odd}`);
console.log(`tổng số chẵn là: ${evens}`);

// bài tập 6


// bài 7

