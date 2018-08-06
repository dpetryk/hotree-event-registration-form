import {Injectable} from '@angular/core';
import {Employee} from '../models/employee';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // Array as database mockup
  Employees = [
    {
      id: 0,
      name: 'Daniel',
      lastname: 'Mitchell',
      email: 'daniel.mitchell@hussa.rs'
    },
    {
      id: 1,
      name: 'Albert',
      lastname: 'Alexander',
      email: 'albert.alexander@hussa.rs'
    },
    {
      id: 2,
      name: 'Philip',
      lastname: 'Hughes',
      email: 'philip.hughes@hussa.rs'
    },
    {
      id: 3,
      name: 'Walter',
      lastname: 'Nelson',
      email: 'walter.nelson@hussa.rs'
    },
    {
      id: 4,
      name: 'Ashley',
      lastname: 'Hernandez',
      email: 'ashley.hernandez@hussa.rs'
    },
    {
      id: 5,
      name: 'Donna',
      lastname: 'Washington',
      email: 'donna.washington@hussa.rs'
    },
    {
      id: 6,
      name: 'Andrew',
      lastname: 'White',
      email: 'andrew.white@hussa.rs'
    },
    {
      id: 7,
      name: 'Sharon',
      lastname: 'Allen',
      email: 'sharon.allen@hussa.rs'
    },
    {
      id: 8,
      name: 'Russell',
      lastname: 'Parker',
      email: 'russell.parker@hussa.rs'
    },
    {
      id: 9,
      name: 'Janet',
      lastname: 'Stewart',
      email: 'janet.stewart@hussa.rs'
    }
  ];

  constructor() {
  }

  getEmployees(): Employee[] {
    return this.Employees;
  }

  getEmployeeById(id: number): Employee {
    let employeeById = null;
    this.Employees.forEach((employee) => {
      if (employee.id === id) {
        employeeById = employee;
      }
    });
    return employeeById;
  }

  getLoggedEmployee() {
    return this.getEmployeeById(3);
  }

}
