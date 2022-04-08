import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Components
import { EmployeeComponent } from './employee/employee.component';

//Services
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptorService} from './token-interceptor.service';

//Material UI
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ModelDialogComponent } from './model-dialog/model-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentComponent } from './student/student.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { PlaylistComponent } from './playlist/playlist.component';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent, 
    ModelDialogComponent, 
    StudentComponent, PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
