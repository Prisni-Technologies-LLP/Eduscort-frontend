/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { Component, OnInit } from '@angular/core';  
import { StudentService } from '../student.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Student } from '../student';  
import { Router } from '@angular/router';
@Component({  
  selector: 'app-add-student',  
  templateUrl: './add-student.component.html',  
  styleUrls: ['./add-student.component.css']  
})  
export class AddStudentComponent implements OnInit {  
  
  constructor(private studentservice:StudentService,
              private router: Router) { }  
  
  student : Student=new Student();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  studentsaveform=new FormGroup({  
    first_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    middle_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    last_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    date_of_admission:new FormControl(),
    date_of_birth:new FormControl(),
    class:new FormControl() 
  });  
  
  saveStudent(student:Student){  
    this.student=new Student();     
    this.student.first_name=this.firstName.value;
    this.student.middle_name=this.middleName.value;
    this.student.last_name=this.lastName.value;  
    this.student.date_of_admission=this.dateOfAdmission.value;  
    this.student.date_of_birth=this.dateOfBirth.value; 
    this.student.class_name=this.studentClass.value; 
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    /*this.studentservice.createStudent(this.student)  
      .subscribe (
        data => {
          console.log(data)
          this.router.navigate(['students'])         
          this.student = new Student()
        } 
      )
      */
  }  
  
  get firstName(){  
    return this.studentsaveform.get('first_name');  
  }  
  get middleName(){  
    return this.studentsaveform.get('middle_name');  
  }  
  get lastName(){  
    return this.studentsaveform.get('last_name');  
  }  
  get dateOfAdmission(){  
    return this.studentsaveform.get('date_of_admission');  
  }  
  get dateOfBirth(){  
    return this.studentsaveform.get('date_of_birth');  
  }  
  get studentClass(){
    return this.studentsaveform.get('class_name');
  }
  
  
  addStudentForm(){  
    this.submitted=false;  
    this.studentsaveform.reset();  
  }  
}  