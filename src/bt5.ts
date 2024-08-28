/**
 * 
 * Bài tập 5: Generic Function
 */

//Tạo một hàm generic identity nhận vào một tham số và trả về giá trị đó mà không thay đổi kiểu dữ liệu.
function createPair<T>(v2: T){
    return [v2];
  }

// Kiểu dữ liệu của tham số và giá trị trả về nên được xác định bởi kiểu generic.
console.log(createPair<string>('hello')); 
console.log(createPair<number>(123)); 