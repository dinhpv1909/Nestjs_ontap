/** 
 * Khai báo và sử dụng Interface
*/

// Tạo một interface có tên Person với các thuộc tính name (kiểu string), age (kiểu number).

interface Person{
    name: String,
    age: Number
}

//Tạo một hàm printPerson nhận vào tham số kiểu Person và in ra thông tin của người đó



function printPerson(nameUser:String, ageUser:Number){
    let student:Person
    student = {
        name: nameUser,
        age:ageUser
    }
    console.log(student)
}

printPerson("Dinhpv", 18)
