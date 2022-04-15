import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ValidationExampleComponent } from './forms/validation-example/validation-example.component';
import {UploadFilesComponent} from './upload-files/upload-files.component';
import { ManagerComponent } from './decorators-examples/manager/manager.component';
import { BasicsComponent } from './basics/basics.component';

const routes: Routes = [
  {
    path:'basics', component: BasicsComponent
  },
  {
    path:'employee-list', component: EmployeeComponent
  },
  {
    path:'student-list', component: StudentComponent
  },
  {
    path:'play-list', component: PlaylistComponent
  },
  {
    path:'validation-example', component: ValidationExampleComponent
  },
  {
    path:'upload-files', component:UploadFilesComponent
  },
  {
    path:'decorators-examples', component:ManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
