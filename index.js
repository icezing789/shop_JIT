// Variable and data type
let custID = 1
let fullName = "John"
const salaray = 20000.75


// Data structure
const  months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]

const customer = [
    {"custID": 1, "fullName": "John", "salary": 20000.75},
    {"custID": 2, "fullName": "Joe", "salary": 23000.75},
    {"custID": 3, "fullName": "Yaya", "salary": 70000.00}
]


//Control flow statement
// for (let i = 0; i < customer.length; i++) {
//     console.log("คุณ", customer[i].fullName + " มีรายได้ " + customer[i].salary + " บาท ")
// }


plus = (x,y) => {
    return x + y
}

console.log(plus(3,2))