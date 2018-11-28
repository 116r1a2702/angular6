import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { employees } from './mock-employee';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService, private readonly http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    this.messageService.clear();
    this.messageService.add("Employee details fetched succesfully");

    // return of(employees);
    return this.http.get<Employee[]>('http://localhost:9999/fetchAllEmps');
  }
  getEmployee(id: number): Observable<Employee> {
    // TODO: send the message _after_ fetching the hero

    this.messageService.clear();
    this.messageService.add("Employee details fetched succesfully");
    return this.http.get<Employee>('http://localhost:9999/fetchEmployee/' + id);
  }
}
