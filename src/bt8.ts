
/**
 * Bài tập 8: Khai báo và sử dụng Class
 */

//Tạo một class có tên Animal với thuộc tính name và một phương thức speak.

class Animal {
    speak(data:String){
        console.log(data);
        
    }
  }
   
class Dog extends Animal {

}

const dog = new Dog();
console.log(dog.speak("Woof"))
