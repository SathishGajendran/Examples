class Student {
    fullname: string;
    constructor(public name: any, public no: any) {
        this.fullname = name + " " + no;
    }
}

interface details {
    name: string,
    no: number
}

function greet(data: details) {
    return "Hello, " + data.name + " " + data.no;
}

var name = "world";
var data = {
    name: "AAA", no: 1
};

var array1: Array<number>, array2: number[];

var tuple: [string, number];

array1 = [1, 2, 3];
array2 = [1, 2, 3];

tuple = ["1", 2];
// tuple[2] = [1,2];

enum Color { Red, Green = 4, Blue }; //Object {0: "Red", 4: "Green", 5: "Blue", Red: 0, Green: 4, Blue: 5}

var enumValue = Color.Red;

var anyType: any;

anyType = 1;
anyType = "asdf";

// var objectValue :Object;
//
// objectValue = 2;

function doesNotReturnValue(): void {
    //statements
    // return "4"; this line throws a error.
}

var assertionValue: any = 123434;

var assertionValueLength1 = (<string>assertionValue).length;
let assertionValueLength2 = (assertionValue as string).length;


function keepWholeObject(wholeObject: { a: string, b?: number }) { // defines b as optional argument;
    let {a, b = 1001} = wholeObject;
}

keepWholeObject({ a: "1" });

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any; // define it can have any number of properties.
}

//interface (functionPrototype) defining for function
interface functionPrototype {
    (a: string, b: number): number
}
var structuredFunction: functionPrototype = function(a, b) {
    //
    return 0;
}

// structuredFunction("adsf","34"); throws error;

var d = new Student("AAA", 1);
// document.body.innerHTML = greet(d);

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

//default access specifier is public
class AccessSpecifier {
    private name: string;
    public defaultAccessSpecifier: string;
    protected code: string;
    constructor(theName: string) { this.name = theName; }
}
// new AccessSpecifier("value").name    throws error

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
