import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees.slice(0, 3));
    console.log(this.employees);
  }
  ngOnInit() {
    this.getEmployees();
  }

}
