const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  idBadge() {
    return console.log(`${this.position} : ${this.name}`);
  }
}
class Manager extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    this.bonusPercentage = bonusPercentage;
    super(name, position, yearJoined, salary);
  }
  salaryIncrease(increaseAmount) {
    return (this.salary = this.salary + increaseAmount);
  }
}

const employees = new Employee(
  employeesJSON.name,
  employeesJSON.position,
  employeesJSON.yearJoined,
  employeesJSON.salary
);
employees.name(employeesJSON.name);
employees.position(employeesJSON.position);
employees.yearJoined(employeesJSON.yearJoined);
employees.salary(employeesJSON.salary);

console.log(employees);
