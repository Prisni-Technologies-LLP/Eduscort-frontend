import { NgModule } from '@angular/core';  
/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { Routes, RouterModule } from '@angular/router';  
import { StudentListComponent } from './student-list/student-list.component';  
import { AddStudentComponent } from './add-student/add-student.component';  
import { UpdateStudentComponent } from './update-student/update-student.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { PaymentComponent } from './payment/payment.component';
  
const routes: Routes = [  
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },  
  { path: 'welcome', component: WelcomeComponent },  
  { path: 'students', component: StudentListComponent },
  { path: 'students/deactivated', component: StudentListComponent}, 
  { path: 'studentsByFirstName/:first_name', component: StudentListComponent}, 
  { path: 'add-student', component: AddStudentComponent },
  { path: 'update-student/:id', component: UpdateStudentComponent},
  { path: 'student-attendance', component: StudentAttendanceComponent},
  { path: 'payment', component: PaymentComponent}
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  
