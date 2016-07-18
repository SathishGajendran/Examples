var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Student = (function () {
    function Student(name, no) {
        this.name = name;
        this.no = no;
        this.fullname = name + " " + no;
    }
    return Student;
}());
function greet(data) {
    return "Hello, " + data.name + " " + data.no;
}
var name = "world";
var data = {
    name: "AAA", no: 1
};
var array1, array2;
var tuple;
array1 = [1, 2, 3];
array2 = [1, 2, 3];
tuple = ["1", 2];
// tuple[2] = [1,2];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
; //Object {0: "Red", 4: "Green", 5: "Blue", Red: 0, Green: 4, Blue: 5}
var enumValue = Color.Red;
var anyType;
anyType = 1;
anyType = "asdf";
// var objectValue :Object;
//
// objectValue = 2;
function doesNotReturnValue() {
    //statements
    // return "4"; this line throws a error.
}
var assertionValue = 123434;
var assertionValueLength1 = assertionValue.length;
var assertionValueLength2 = assertionValue.length;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
keepWholeObject({ a: "1" });
var structuredFunction = function (a, b) {
    //
    return 0;
};
// structuredFunction("adsf","34"); throws error;
var d = new Student("AAA", 1);
// document.body.innerHTML = greet(d);
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//default access specifier is public
var AccessSpecifier = (function () {
    function AccessSpecifier(theName) {
        this.name = theName;
    }
    return AccessSpecifier;
}());
// new AccessSpecifier("value").name    throws error
var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
