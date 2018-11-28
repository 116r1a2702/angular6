
import { EmployeesComponent } from './employees/employees.component';
import { Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component'
import { from } from 'rxjs';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
export const routes: Routes = [

    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeesComponent },
    { path: 'dashboard', component: EmployeeDashboardComponent },
    { path: 'empDetails/:id', component: EmployeeDetailsComponent }


];