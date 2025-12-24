var Customer3 = /** @class */ (function () {
    function Customer3(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
var customer3 = new Customer3("John", "Doe");
;
console.log(customer3.firstName);
console.log(customer3.lastName);
