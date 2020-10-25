import { Component, OnInit } from '@angular/core';  
import { StudentService } from '../student.service';  
import { Student } from '../student';  
import { Observable,Subject } from "rxjs";  
//import {DataTablesModule} from  'angular-datatables';  
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
//import { MdbTableDirective, MdbTablePaginationComponent, MdbTableService } from '@angular/ng-uikit-pro-standard';
import { Router } from '@angular/router';
  
@Component({  
  selector: 'app-student-list',  
  templateUrl: './student-list.component.html',  
  styleUrls: ['./student-list.component.css']  
})  
export class StudentListComponent implements OnInit {  
  
 constructor(private studentservice:StudentService,
  private router: Router) { }  
  
  studentsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  message:String;
  students: Observable<Student[]>;  
  student : Student=new Student();  
  deleteMessage=false;  
  studentlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    /*this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };  */  
    this.studentservice.getStudentList().subscribe(data =>{  
    this.students =data;  
    //this.dtTrigger.next();  
    })  
  }  
    
  deleteStudent(id: number) {  
      this.studentservice.deleteStudent(id, this.student)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.studentservice.getStudentList().subscribe(data =>{  
            this.students =data  
            })  
        },  
        error => console.log(error));  
        this.message=`Deleted student with id:${id}`
  }  
  
  updateStudent(id: number){  
    this.router.navigate(['update-student', id]);
    /*this.studentservice.getStudent(id)  
      .subscribe(  
        data => {  
          this.studentlist=data             
        },  
        error => console.log(error)); */ 
  }  
  createStudent(){
    this.router.navigate(['update-student', -1]);
  }
  studentupdateform=new FormGroup({  
    student_id:new FormControl(),  
    first_name:new FormControl(), 
    middle_name:new FormControl(),
    last_name:new FormControl(), 
    date_of_admission:new FormControl(),
    date_of_birth:new FormControl(),
    class_name:new FormControl(),
    roll_no: new FormControl(),
    is_active: new FormControl() 
  });  
  
  updateStu(updstu){  
    this.student=new Student();   
   this.student.student_id=this.StudentId.value;  
   this.student.first_name=this.firstName.value;  
   this.student.middle_name=this.middleName.value;  
   this.student.last_name=this.lastName.value;
   this.student.date_of_admission=this.dateOfAdmission.value; 
   this.student.date_of_birth=this.dateOfBirth.value; 
   this.student.class_name=this.class.value;
   this.student.roll_no=this.roll_no.value;
   this.student.is_active=this.is_active.value;
   console.log(this.lastName.value);  
     
  
   this.studentservice.updateStudent(this.student.student_id,this.student).subscribe(  
    data => {       
      this.isupdated=true;  
      this.studentservice.getStudentList().subscribe(data =>{  
        this.students =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get firstName(){  
    return this.studentupdateform.get('first_name');  
  }  
  
  get middleName(){  
    return this.studentupdateform.get('middle_name');  
  }  
  
  get lastName(){  
    return this.studentupdateform.get('last_name');  
  }  
  
  get StudentId(){  
    return this.studentupdateform.get('student_id');  
  }  

  get dateOfAdmission(){
    return this.studentupdateform.get('date_of_admission');
  }

  get dateOfBirth(){
    return this.studentupdateform.get('date_of_birth');
  }

  get class(){
    return this.studentupdateform.get('class_name');
  }
  get roll_no(){
    return this.studentupdateform.get('roll_no');
  }
  get is_active(){
    return this.studentupdateform.get('is_active');
  }
  changeisUpdate(){  
    this.isupdated=false;  
  }  
  goToWelcomePage(){
    this.router.navigate(['']);
  }
}  