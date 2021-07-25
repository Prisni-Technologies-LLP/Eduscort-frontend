import { NgModule } from '@angular/core';  
/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
//project path: /Users/debabrata/documents/My_WorkSpaces/Angular_Projects/Eduscort-frontend-main
import { Routes, RouterModule } from '@angular/router';  
import { StudentListComponent } from './student-list/student-list.component';  
import { AddStudentComponent } from './add-student/add-student.component';  
import { UpdateStudentComponent } from './update-student/update-student.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
   
const routes: Routes = [  
  { path: '', redirectTo: 'secure/auth/loginUser', pathMatch: 'full' },  
  { path: 'welcome', component: WelcomeComponent },  
  { path: 'students', component: StudentListComponent },
  { path: 'students/deactivated', component: StudentListComponent}, 
  { path: 'studentsByFirstName/:first_name', component: StudentListComponent}, 
  { path: 'add-student', component: AddStudentComponent },
  { path: 'update-student/:id', component: UpdateStudentComponent},
  { path: 'student-attendance', component: StudentAttendanceComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'secure/auth/user/add', component: RegistrationComponent},
  { path: 'secure/auth/loginUser', component: LoginComponent}
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  
