import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DataTablesModule } from  'angular-datatables';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';

@NgModule({  
  declarations: [  
    AppComponent,  
    StudentListComponent,  
    AddStudentComponent, UpdateStudentComponent, WelcomeComponent, StudentAttendanceComponent,  
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }
