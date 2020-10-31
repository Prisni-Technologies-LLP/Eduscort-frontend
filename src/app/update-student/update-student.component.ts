/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id: number
  student: Student
  studentUpdated: Boolean
  checkBox: Boolean
  constructor(private studentService: StudentService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.studentUpdated=false;
    this.id=this.route.snapshot.params['id'];
    this.student= new Student();
    if(this.id!=-1){
    this.studentService.getStudent(this.id).subscribe(
      data=> this.student=data
    )    
    }  
  }
  save(){
    if(this.studentUpdated===false){
    if(this.id == -1) { 
      this.studentService.createStudent(this.student)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['students'])
            }
          )
          this.studentUpdated=true;          
    } else {
      this.studentService.updateStudent(this.id, this.student)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['students'])
            }
          )
    }
    this.studentUpdated=true;    
  }
  }
  goToWelcomePage(){
    this.router.navigate(['']);
  }
  goToStudentMgmt(){
    this.router.navigate(['students']);
  }
  /*onCheckboxChange(e){
    if (e.target.checked) {
        this.student.is_active="Y"
    }else{
      this.student.is_active="N"
    }
  }*/
}
