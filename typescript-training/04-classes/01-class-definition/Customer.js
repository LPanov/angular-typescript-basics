var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    return Customer;
}());
var customer = new Customer("John", "Doe");
console.log(customer.firstName);
console.log(customer.lastName);
