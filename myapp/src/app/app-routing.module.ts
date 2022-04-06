import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'employee-list', component: EmployeeComponent
  },
  {
    path:'student-list', component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
