/**
 * Bài tập 10: Tính kế thừa và đa hình
 */

// Tạo một interface có tên Shape với phương thức area.
interface Shape{
    area():number
}

class Circle implements Shape{
    radius : number
    constructor(radius:number){
        this.radius = radius
    }
    area(): number {
        return Math.PI * this.radius *this.radius
    }
}
class Rectangle implements Shape{
    width:number;
    height:number;
    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width*this.height;
    }
}

const retangle = new Rectangle(3, 4);
const circle = new Circle(3);

console.log("Rectangle: ", retangle.area());
console.log("Circle: ", circle.area());

