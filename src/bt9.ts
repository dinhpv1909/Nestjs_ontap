/**
 * Bài tập 9: Xử lý lỗi với try-catch
 */

//Tạo một hàm sử dụng try-catch để xử lý lỗi khi cố gắng chia một số cho 0.

function divideNumber(numerator:number, denominator:number){
    try {
        let result = numerator/denominator;
        console.log("result", result)
        // result Infinity TS k xử lí nổi pha này :V
    } catch (error) {
        console.log("Err: ",error)
    }
}

divideNumber(3,0)

