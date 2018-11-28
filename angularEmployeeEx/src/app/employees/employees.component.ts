import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { employees } from '../mock-employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  // employee: Employee = {
  //   id: 1,
  //   name: 'krishna'
  // };
  mockEmployees: Employee[];
  constructor(private employeeService: EmployeeService) {

  }
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.mockEmployees = employees);
  }
  ngOnInit() {
    this.getEmployees();
  }


}
