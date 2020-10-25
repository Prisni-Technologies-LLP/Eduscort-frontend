import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentAttendanceService } from '../student-attendance.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {
  classes: String[];
  class_name= new FormControl('');
  date: Date;
  students: Student[];
  student: Student;
  is_present: String;
  constructor(private router:Router, private studentService: StudentService,
    private studentAttendanceService: StudentAttendanceService) { }

  ngOnInit() {
    this.studentService.getClasses().subscribe(data =>{  
      this.classes =data;  
      //this.dtTrigger.next();  
      })  
  } 
  loadStudentList(class_name:String){
    this.studentService.getStudentsByClasses(class_name).subscribe(data =>{  
      this.students =data;          
      })  
  }
  goToWelcomePage(){
    this.router.navigate(['']);
  }
  AttendanceForm= new FormGroup({
    class_name: new FormControl(),
    date: new FormControl(),
    is_present: new FormControl()
  });
  onSubmit(){
    this.studentAttendanceService.updateStudentAttendance(this.is_present,this.student.student_id, this.date).subscribe(
      data =>{
        console.log(data)
      })

    }
  }