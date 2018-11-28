import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private empService: EmployeeService,
    private location: Location) {

  }
  emp: Employee;
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(id)
      .subscribe(emp => this.emp = emp);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getEmployee();
  }

}
