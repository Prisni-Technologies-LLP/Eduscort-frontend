/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
//import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
//import { DataTablesModule } from  'angular-datatables';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { HighlightDirective } from './highlight.directive';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({  
  declarations: [  
    AppComponent,  
    StudentListComponent,  
    AddStudentComponent, UpdateStudentComponent, WelcomeComponent, StudentAttendanceComponent, HighlightDirective, PaymentComponent, RegistrationComponent, LoginComponent,  
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,     
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot() 
  ],  
  providers: [ HttpClientModule ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }
