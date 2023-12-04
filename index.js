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
const array3 = [4, 6, 8, 3, 21];
for (let i = 0; i < array3.length; i++) {
  let min_index = i;

  for (let j = i + 1; j < array3.length; j++) {
    // lấy số nhỏ nhất trong mảng từ index của phần tử kiểm tra
    if (array3[j] < array3[min_index]) {
      // lấy vi trí index nhỏ nhất
      min_index = j;
    }
  }

  if (min_index != i) {
    // nếu có vị trí index nhỏ nhất thì hoán đổi vị trí cho nhau
    let cache = array3[i];
    array3[i] = array3[min_index];
    array3[min_index] = cache;
  }
}
console.log(array3);

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
const array6 = [1, 2];
let count = 0; // số lần phần tử lặp lại lớp nhất
let character; // phần tử lặp
for (let i = 0; i < array6.length; i++) {
  let cache = 0;
  for (let j = 0; j < array6.length; j++) {
    // đếm số lần lặp phần tử
    if (array6[j] === array6[i]) {
      cache = cache + 1; // số lần lặp + 1
    }
  }

  if (cache > count) {
    // nếu lớn hơn số lần lặp phần tử trước thì ghi lại
    count = cache;
    character = array6[i];
  }
}

console.log(`phần tử ${character} lặp lại nhiều nhất với ${count} lần`);

// bài 7
const array7 = [
  1,
  1,
  1,
  ,
  6,
  4,
  2,
  1,
  1,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  9,
  2,
  ,
  6,
  7,
  8,
  5,
  4,
  3,
  8,
  7,
  6,
];
const result = [];

for (let i = 0; i < array7.length; i++) {
  let check = false; // kiểm tra phần tử có bị trùng hay không, mặc định là không
  for (let j = 0; j < array7.length; j++) {
    if (array7[i] === result[j]) {
      check = true; // nếu trùng trong mảng mới thì dừng lặp, trả về true
      break;
    }
  }

  if (check === false) {
    // nếu không trùng trong mảng mới thì push vào result
    result.push(array7[i]);
  }
}

console.log(result);
