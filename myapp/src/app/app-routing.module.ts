import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {
    path:'employee-list', component: EmployeeComponent
  },
  {
    path:'student-list', component: StudentComponent
  },
  {
    path:'play-list', component: PlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
