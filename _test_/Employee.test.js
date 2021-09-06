const Employee = require("../lib/Employee");

describe("Employee", () => {
    test ("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect (typeof e).toBe("object");
    });

    test ("Can set name via constructor arguments", () => {
        const name ="Mary";
        const e = new Employee(name);
        expect (e.name).toBe(name);
    });
});

