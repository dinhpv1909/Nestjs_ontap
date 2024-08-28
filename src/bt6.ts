/**
 * Bài tập 6: Xử lý mảng với TypeScript
Tạo một mảng các số nguyên và sử dụng các phương thức của mảng (map, filter, reduce) để thực hiện các thao tác khác nhau trên mảng đó.
 */

let myArray:any[]=[1,2,3,4]

// Map
console.log("Map :");
myArray.map((val: any, index: number)=>{
    console.log("key :", index, "value :", val*val);
    
})
// Fiter
console.log("Filter :");
myArray.filter((val: any, index: number)=>{

    console.log("key :", index, "value :", val*val);
    
})
// Reduce
console.log("Reduce :");
myArray.reduce((val: any, index: number)=>{
    console.log("key :", index, "value :", val*val);
    
})





