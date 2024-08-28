/**
 * Bài tập 2: Kiểu dữ liệu tùy chọn (Optional)
 * 
 */
// Tạo một hàm có tên greet nhận vào một tham số là tên người (kiểu string), tham số này có thể tùy chọn.
// Nếu tên được cung cấp, trả về chuỗi Hello, <tên>!. Nếu không, trả về Hello, World!

function greet(data:any){

    if(typeof data==="string"){
        console.log("Hello",data);
    }
    else{
        console.log("Hello World");
    }
}
greet("Hai")