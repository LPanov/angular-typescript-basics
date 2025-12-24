export class Customer {

    firstName!: string;
    lastName!: string;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }
}

let customer = new Customer("John", "Doe");

console.log(customer.firstName);
console.log(customer.lastName);