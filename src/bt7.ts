/**
 * Bài tập 7: Sử dụng Union và Intersection Types
*/
// Tạo một kiểu Union kết hợp giữa string và number.
let data:String | Number
data = "Dinh"
data = 123

// Tạo một kiểu Intersection kết hợp giữa hai interface và sử dụng kiểu này trong một hàm.

interface Person{
    name:String
}

interface Age{
    age:Number
}

function Intersection(data: Person|Age){
    console.log(data)
}

console.log("dinh");
console.log(18);
