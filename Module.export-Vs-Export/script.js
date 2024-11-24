// const {sum, product} = require("./app.js");
const ans = require("./app.js");

console.log(ans);
// console.log(sum(1,2,3,4));
// console.log(product(1,2,3,4));
const user = {
    name: "Debojeet Dutta",
    age: 21,
    address: {
        street: "123 Main Street",
        city: "Kolkata",
        state: "West Bengal",
        zipCode: "700001"
    },
    hobbies: ["coding", "chess", "reading"]
};

let address = user.address;
address.pincode = 743377;
address.country = "India";



// address = {
//     pincode : 743377,
//     country : "India",
// }

// console.log(address === user.address);
// console.log(address);
// console.log(user.address);