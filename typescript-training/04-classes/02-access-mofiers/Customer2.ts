export class Customer2 {

    private _firstName!: string;
    private _lastName!: string;

    constructor(first: string, last: string) {
        this._firstName = first;
        this._lastName = last;
    }

    public get firstName() :string {
        return this._firstName
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName() :string {
        return this._lastName
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

let customer2 = new Customer2("John", "Doe");;

console.log(customer2.firstName);
console.log(customer2.lastName);