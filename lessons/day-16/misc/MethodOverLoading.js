class MethodOverLoading {

    static add(a, b) {
        return a + b;
    }

    static add(a, b, c) {
        return a + b + c;
    }

}

const result = MethodOverLoading.add(1, 2);
const result2 = MethodOverLoading.add(1, 2, 3);

console.log(result);  //NaN do JS ko hỗ trợ method overloading (chỉ nhận static add(a, b, c))
console.log(result2); // 6

//Kỹ thuật xử lý method overloading: Rest parameters

class MethodOverLoading {

    static add2(factor, anatherThing, ...nums) {
        let sum = 0;
        for (const num of nums) {
            sum = sum + num;
        }
        return sum;
    }

}

//Stati: la 1 class method (khong truy cap duoc qua obj sinh ra tu class)
class ArrayHelper {

    static filterNumber(array, isEven) {
        if (isEven) {
            return array.filter(num => num % 2 === 0);
        } else {
            return array.filter(num => num % 2 !== 0);
        }
    }

}

let tagertArray = [1, 2, 3, 4, 5, 6];
let isEven = true;
const evenNumbers = ArrayHelper.filterNumber(tagertArray, isEven);
const oddNumbers = ArrayHelper.filterNumber(tagertArray); //ko truyen tham so cho isEven thif isEven = undefine tuong duong voi false

console.log(evenNumbers);
console.log(oddNumbers);

